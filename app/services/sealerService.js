/**
 * Created by larjo on 17/12/2016.
 */
/**
 * Created by larjo on 15/12/2016.
 */
let JSZip = require('jszip');
const crypto = require('crypto');
let fsp = require('fs-promise');
let md5 = require('md5');
let mkdirp = require('mkdirp');
const junk = require('junk');
let jsonFormat = require('json-format');
let fs = require('fs');
let phantom = require('phantom');
let path = require('path');
let config = require('config');
//const console = require('console');


function waitUntil(asyncTest, timeOutMillis) {
    let maxtimeOutMillis;
    if (timeOutMillis) {
        maxtimeOutMillis = timeOutMillis;
    } else {
        maxtimeOutMillis = config.get('timeout');
    } //< Default Max Timeout is 10s

    return new Promise(function (resolve, reject) {
        function wait(start) {
            let startTime = start || new Date();
            if (new Date() - startTime < maxtimeOutMillis) {
                asyncTest().then(function (value) {
                    //console.log('value', value);
                    if (value === true) {
                        resolve();
                    } else {
                        setTimeout(function () {
                            wait(start);
                        }, 500);
                    }
                }).catch(function () {
                    //console.log('Error found. Rejecting.', e);
                    reject();
                });

            } else {
                //console.log('Timeout. Rejecting.');
                reject();
            }
        }

        wait();
    });
}

module.exports.loadPage = function (url) {
    let sitepage = null;

    return phantom.create()
        .then((instance) => instance.createPage())
        .then(function (page) {
            sitepage = page;
            /* page.property('onConsoleMessage', function (msg) {
             console.log(msg);
             });*/
            return page.open(url);
        })
        .then(function () {
            // console.log(status);
            return Promise.resolve(sitepage);

        });
};

module.exports.loadContent = function (page) {
    return waitUntil(function () {
        return page.evaluate(function () {
            //noinspection JSUnresolvedFunction
            return window._babbage_results_aggregate !== undefined || window._babbage_results_facts !== undefined;

        });
    })
    /* .then(function () {
     return page.evaluate(function () {
     //noinspection JSUnresolvedFunction
     //   console.log(document.getElementsByTagName('svg')[0].outerHTML);
     });
     })*/
        .then(function () {
            return page.property('content');
        }).then(function () {
            return Promise.resolve(page);
        });
};

module.exports.renderImages = function (page, outputDir) {
    mkdirp(outputDir);
    let pdfPath = outputDir + '/vector.pdf';
    let rasterPath = outputDir + '/raster.png';
    let metaPath = outputDir + '/meta.json';

    let pdfRender = page.render(pdfPath);
    let rasterRender = page.render(rasterPath);

    let metaFile = page.property('url')
        .then(function (url) {
            return fsp.writeFile(metaPath, jsonFormat({date: new Date(), url: url}));

        });


    return Promise.all([pdfRender, rasterRender, metaFile]).then(function () {
        return Promise.resolve(page);
    });


};
module.exports.captureVariables = function (page, outputDir) {
    mkdirp(outputDir);
    let factsPath = outputDir + '/facts.json';
    let aggregatePath = outputDir + '/aggregate.json';
    let factsDataPromise = page.evaluate(function () {
        //noinspection JSUnresolvedFunction
        return window._babbage_results_facts;
    }).then(function (data) {
        if (data !== null) {
            return fsp.writeFile(factsPath, jsonFormat(data));
        }
        else {
            return Promise.resolve(data);
        }
    });

    let aggregatesDataPromise = page.evaluate(function () {
        //noinspection JSUnresolvedFunction
        return window._babbage_results_aggregate;

    }).then(function (data) {
        if (data !== null) {
            return fsp.writeFile(aggregatePath, jsonFormat(data));
        }
        else {
            return Promise.resolve(data);
        }

    });

    return Promise.all([factsDataPromise, aggregatesDataPromise]).then(function () {
        return Promise.resolve(outputDir);
    });


};
module.exports.zipFiles = function (inputDir, outputFileName) {

    let zip = new JSZip();
    mkdirp(path.dirname(outputFileName));

    return fsp.readdir(inputDir)
        .then(function (files) {
            files.filter(junk.not).forEach(function (file) {
                let contentPromise = new JSZip.external.Promise(function (resolve, reject) {
                    fs.readFile(inputDir + '/' + file, function (err, data) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(data);
                        }
                    });


                });
                zip.file(path.basename(file), contentPromise);
            });
        })
        .then(function () {
            return zip
                .generateAsync({type: 'nodebuffer', streamFiles: true});
        })
        .then(function (zipFile) {
            return fsp.writeFile(outputFileName, zipFile);
        });
};

module.exports.signFile = function (fileName, outputFileName) {
    return fsp.readFile(fileName)
        .then(function (contents) {
            const sign = crypto.createSign(config.get('crypto_algorithm'));

            sign.update(contents);

            const private_key = config.get('private_key');
            let signature = sign.sign(private_key).toString('hex');

            let zip2 = new JSZip();
            zip2.file('signature.sha256', signature);

            zip2.file('package.zip', contents);
            return zip2
                .generateAsync({type: 'nodebuffer', streamFiles: true})
                .then(function (zipFile) {
                    return fsp.writeFile((outputFileName), zipFile);
                });
        });
};

module.exports.verifySignedPackage = function (fileName) {

    return fsp.readFile(fileName)
        .then(function (data) {
            let zip = new JSZip();
            return zip.loadAsync(data);
        })
        .then(function (zip) {
            let packagePromise = zip.file('package.zip').async('nodebuffer');
            let signaturePromise = zip.file('signature.sha256').async('text');
            return Promise.all([packagePromise, signaturePromise]);

        })
        .then(function (results) {
            let contents = results[0];
            let signature = results[1];
            const verify = crypto.createVerify(config.get('crypto_algorithm'));

            verify.write(contents);
            verify.end();

            const public_key = config.get('public_key');
            let result = verify.verify(public_key, signature, 'hex');
            //console.log(result);
            return Promise.resolve(result);
        });
};

module.exports.index = function (url) {
    let hash = md5(url + new Date());
    let base_dir = config.get('working_directory');
    let working_dir = base_dir + '/' + hash;
    let package_path = working_dir + '/' + 'package.zip';
    let signed_path = working_dir + '/' + hash + '.zip';

    let promise = this.loadPage(url)
        .then((page) => this.loadContent(page))
        .then((page) => this.renderImages(page, working_dir))
        .then((page) => this.captureVariables(page, working_dir))
        .then((directoryPath) => this.zipFiles(directoryPath, package_path))
        .then(() => this.signFile(package_path, signed_path))
        .then(() => this.verifySignedPackage(signed_path));

    return promise.then(function () {
        return Promise.resolve(signed_path);
    });


};

module.exports.sign = function (url) {
    let hash = md5(url + new Date());
    let base_dir = config.get('working_directory');
    let working_dir = base_dir + '/' + hash;
    let package_path = working_dir + '/' + 'package.zip';
    let signed_path = working_dir + '/' + hash + '.zip';

    let promise = this.loadPage(url)
        .then((page) => this.loadContent(page))
        .then((page) => this.renderImages(page, working_dir))
        .then((page) => this.captureVariables(page, working_dir))
        .then((directoryPath) => this.zipFiles(directoryPath, package_path))
        .then(() => this.signFile(package_path, signed_path));

    return promise.then(function () {
        return Promise.resolve(signed_path);
    });
};


module.exports.verify = function (file) {
    return this.verifySignedPackage(file);
};
