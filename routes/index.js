let express = require('express');
let router = express.Router();
let os = require('os');
let JSZip = require("jszip");
let fs = require("fs");
const crypto = require('crypto');
let fsp = require('fs-promise');

/* GET home page. */
router.get('/', function (req, res, next) {
    let phantom = require('phantom');

    function waitUntil(asyncTest, timeOutMillis) {
        let maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000; //< Default Max Timeout is 3s

        return new Promise(function (resolve, reject) {
            function wait(start) {
                let startTime = start || new Date().getTime();
                console.log('loop...');
                if (new Date().getTime() - startTime < maxtimeOutMillis) {
                    asyncTest().then(function (value) {
                        console.log('value', value);
                        if (value === true) {
                            resolve();
                        } else {
                            setTimeout(function () {
                                wait(start);
                            }, 500);
                        }
                    }).catch(function (e) {
                        console.log('Error found. Rejecting.', e);
                        reject();
                    });

                }
                else {
                    console.log('Timeout. Rejecting.');
                    reject();

                }
            }

            wait();
        });
    }


    let sitepage = null;
    let phInstance = null;
    let sig = "";
    phantom.create()
        .then(instance => {
            phInstance = instance;
            return instance.createPage();
        })
        .then(page => {
            sitepage = page;
            page.property('onConsoleMessage', function (msg) {
                console.log(msg);
            });
            return page.open('http://next.openspending.org/viewer/embed/bubbletree/66c9cdc19a58be697d79fa5032da2c58:sturahd16?lang=en&measure=Plan.sum&groups[]=budget_line_id_2.account_id&order=Plan.sum|desc');
        })
        .then(status => {

            console.log(status);
            // console.log(sitepage.property("content"));

            waitUntil(function () {
                // Check in the page if a specific element is now visible
                return sitepage.evaluate(function () {
                    return $("svg").length > 0;

                }, 10000);
            })
                .then(function () {
                    return sitepage.evaluate(function () {

                        console.log($("svg")[0].outerHTML);

                    })
                })
                .then(function () {

                    console.log(sitepage.property("content"));
                    return sitepage.property('content');
                })
                .then(function (content) {
                    console.log(content);
                    sitepage.render(os.tmpDir() + "/vector.pdf");
                    sitepage.render(os.tmpDir() + "/raster.png");
                    sitepage.render(os.tmpDir() + "/open.svg");
                })
                .then(function(){
                    phInstance.exit();
                    let file = os.tmpDir() + "/raster.png";
                    let zip = new JSZip();


                    let contentPromise = new JSZip.external.Promise(function (resolve, reject) {
                        fs.readFile(file, function (err, data) {
                            if (err) {
                                reject(e);
                            } else {
                                resolve(data);
                            }
                        });
                    });
                    zip.file("raster.png", contentPromise);
                    return  zip
                        .generateAsync({type: 'nodebuffer', streamFiles: true})

                })





                .then(function (zip) {
                    return fsp.writeFile((os.tmpDir() + '/out.zip'),zip);})

                .then(function () {

                    console.log("out.zip written.");

                    return fsp.readFile(os.tmpDir() + '/out.zip')
                })


                 .then(function(contents){
                     const sign = crypto.createSign('RSA-SHA256');

                     sign.update(contents);

                     const private_key =
                         `-----BEGIN PRIVATE KEY-----
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
ne+RRxv8I1tWRm4CXlUylfjVFTem02k=
-----END PRIVATE KEY-----
`;



                     let signature = sign.sign(private_key).toString('hex');
                     sig = signature;
                     let zip2 = new JSZip();
                     zip2.file("valid.sig", signature);

                     zip2.file("out.zip", contents);
                     return zip2
                         .generateAsync({type: 'nodebuffer', streamFiles: true})

                 })

                .then(function (zip) {
                    return fsp.writeFile((os.tmpDir() + '/out2.zip'),zip);})

                .then(function () {

                    fsp.readFile(os.tmpDir() + '/out.zip').then(function(contents){

                        const verify = crypto.createVerify('RSA-SHA256');

                        verify.write(contents);
                        verify.end();

                        const public_key =
                            `-----BEGIN CERTIFICATE-----
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
ksKBTcO7+9jlEYZYYw==
-----END CERTIFICATE-----
`;
                        const signature = sig;
                        console.log(verify.verify(public_key, signature, 'hex'));
                    });

                    res.download(os.tmpDir() + "/out2.zip");

                    // JSZip generates a readable stream with a "end" event,
                    // but is piped here in a writable stream which emits a "finish" event.
                    console.log("out2.zip written.");
                })


                /*.then(function () {
                    sitepage.evaluate(function () {

                        console.log($("svg")[0].outerHTML);

                    }).then(function () {
                            console.log(sitepage.property("content"));
                            sitepage.property('content')
                                .then(function (content) {
                                    console.log(content);
                                    sitepage.render(os.tmpDir() + "/vector.pdf");
                                    sitepage.render(os.tmpDir() + "/raster.png");
                                    sitepage.render(os.tmpDir() + "/open.svg");

                                })
                                .then(function () {
                                    phInstance.exit();
                                    let file = os.tmpDir() + "/raster.png";
                                    let zip = new JSZip();


                                    let contentPromise = new JSZip.external.Promise(function (resolve, reject) {
                                        fs.readFile(file, function (err, data) {
                                            if (err) {
                                                reject(e);
                                            } else {
                                                resolve(data);
                                            }
                                        });
                                    });
                                    zip.file("raster.png", contentPromise);


                                    zip
                                        .generateNodeStream({type: 'nodebuffer', streamFiles: true})
                                        .pipe(fs.createWriteStream('out.zip'))
                                        .on('finish', function () {
                                            // JSZip generates a readable stream with a "end" event,
                                            // but is piped here in a writable stream which emits a "finish" event.
                                            console.log("out.zip written.");

                                            let sign = crypto.createSign('sha256');

                                            const private_key = '-----BEGIN EC PRIVATE KEY-----\n' +
                                                'MHcCAQEEIF+jnWY1D5kbVYDNvxxo/Y+ku2uJPDwS0r/VuPZQrjjVoAoGCCqGSM49\n' +
                                                'AwEHoUQDQgAEurOxfSxmqIRYzJVagdZfMMSjRNNhB8i3mXyIMq704m2m52FdfKZ2\n' +
                                                'pQhByd5eyj3lgZ7m7jbchtdgyOF8Io/1ng==\n' +
                                                '-----END EC PRIVATE KEY-----\n';
                                            let signature = sign.sign(private_key).toString('hex');

                                            let contentPromise = new JSZip.external.Promise(function (resolve, reject) {
                                                fs.readFile("out.zip", function (err, data) {
                                                    if (err) {
                                                        reject(e);
                                                    } else {
                                                        resolve(data);
                                                    }
                                                });
                                            });
                                            let zip2 = new JSZip();

                                            zip2.file("out.zip", contentPromise);

                                            zip2.file("valid.sig", signature);
                                            zip2
                                                .generateNodeStream({type: 'nodebuffer', streamFiles: true})
                                                .pipe(fs.createWriteStream('out2.zip'))
                                                .on('finish', function () {

                                                    res.download("out2.zip");

                                                    // JSZip generates a readable stream with a "end" event,
                                                    // but is piped here in a writable stream which emits a "finish" event.
                                                    console.log("out.zip written.");
                                                });

                                        });


                                    //res.render('index', { title: 'Express' });

                                });
                        }
                    );

                })*/.catch(function (e) {
                console.log('Rejected.');
            });


        });

});

module.exports = router;
