let express = require('express');
let router = express.Router();
let  os = require('os');

/* GET home page. */
router.get('/', function (req, res, next) {
    let phantom = require('phantom');
    function waitUntil(asyncTest, timeOutMillis) {
        let maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000; //< Default Max Timout is 3s

            return new Promise(function(resolve, reject) {
            function wait(start) {
                let startTime = start || new Date().getTime();
                console.log('loop...');
                if (new Date().getTime() - startTime < maxtimeOutMillis) {
                    asyncTest().then(function(value) {
                        console.log('value', value);
                        if (value === true) {
                            resolve();
                        } else {
                            setTimeout(function() {
                                wait(start);
                            }, 500);
                        }
                    }).catch(function(e) {
                        console.log('Error found. Rejecting.', e);
                        reject();
                    });

                }
                else{
                    console.log('Timeout. Rejecting.');
                    reject();

                }
            }
            wait();
        });
    }


    let sitepage = null;
    let phInstance = null;
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
                    return $("svg").length>0;

                },10000);
            }).then(function () {
                sitepage.evaluate(function () {

                    console.log($("svg")[0].outerHTML);

                }).then(function () {
                        console.log(sitepage.property("content"));
                        sitepage.property('content').then(function (content) {
                            console.log(content);
                            sitepage.render(os.tmpDir()+"/vector.pdf");
                            sitepage.render(os.tmpDir()+"/raster.png");
                            sitepage.render(os.tmpDir()+"/open.svg");

                        }).then(function () {
                            phInstance.exit();
                            let file = os.tmpDir()+"/vector.pdf";
                            res.download(file);
                            //res.render('index', { title: 'Express' });

                        });
                    }
                );

            }).catch(function(e) {
                console.log('Rejected.');
            });



        });

});

module.exports = router;
