/**
 * Created by larjo on 15/12/2016.
 */

let sealer = require('../../services/sealerService');

exports.sign = function (req, res) {
    sealer.sign(req.query.url).then(function (file) {

        res.download(file);
    });

};

exports.verify = function (req, res) {
    sealer.verify(req.file.path).then(function (result) {

        res.json({verified: result});
    });

};

