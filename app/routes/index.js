let express = require('express');
let router = new express.Router();
let mainController = require('../controllers/main');
let  multer  = require('multer');
let config = require('config');

let storage = multer.diskStorage({
    destination: config.get('working_directory') + '/uploads',
    filename: function (req, file, cb) {
        cb(null,  Date.now()+ '-' + file.originalname);
    }
});

let  upload = multer({ storage: storage });

router.get('/sign', function (req, res) {
    mainController.sign(req, res);
});


router.get('/store', function (req, res) {
    mainController.store(req, res);
});


router.post('/verify', upload.single('package'), function (req, res) {
    mainController.verify(req, res);
});

module.exports = router;
