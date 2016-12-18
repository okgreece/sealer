/**
 * Created by larjo on 15/12/2016.
 */
let os = require('os');
let JSZip = require("jszip");
let fs = require("fs");
const crypto = require('crypto');
let fsp = require('fs-promise');
let main  = require("../../services/mainService");

exports.index = function(req, res){
  main.index(req.query.url).then(function (file) {

      res.download(file);
  })

};

