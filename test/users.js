let sinon = require('sinon');
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);
let expect = chai.expect;
let app = require("../app");
let assert = require('chai').assert;

let getUsers = require('../services/mainService');

describe('DataPackage API', function() {




    it('Should load list of packages', function(done) {
        let p = getUsers.index('http://next.openspending.org/viewer/embed/bubbletree/66c9cdc19a58be697d79fa5032da2c58:sturahd16?lang=en&measure=Plan.sum&groups[]=budget_line_id_2.account_id&order=Plan.sum|desc');

            p.then(function (file) {
                assert.equal();
               // res.download(file);
                done();
            })
            .catch(done);
    }).timeout(10000);
});
