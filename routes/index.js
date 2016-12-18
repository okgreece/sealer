let express = require('express');
let router = express.Router();
let os = require('os');
let JSZip = require("jszip");
let fs = require("fs");
const crypto = require('crypto');
let fsp = require('fs-promise');
let main = require("../controllers/main");
/* GET home page. */
router.get('/', function (req, res, next) {
    main.index(req,res);

});

module.exports = router;
