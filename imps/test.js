// const assert = require('chai').assert;
// const Chef = require('./index');
// const expect = require("chai").expect;

// var cal = require('./add')

// describe('Chef test',function(){
//     let chef = Chef;

//     it("check the dish has valid name", function(){
//         assert.isString(chef.checkMenu(),'string')
//     });

//     it("check for a dish in menu",function(){
//         let dish = chef.checkMenu()
//         assert.oneOf(dish,chef.dishes)
//     });

//     it("check sum of two numbers are: ",function(){
//         var res = cal(40,40);
//         expect(res).to.equal(80);
//     })

// });

var expect  = require('chai').expect;
var request = require('request');
const assert = require('chai').assert;
//use describe to combine it
it('Main page content', function(done) {
    request('http://localhost:5005' , function(error, response, body) {
        expect(body).to.equal('Test API');
        //assert.isString(body,'string')
        done();
    });
});
it('Type page content', function(done) {
    request('http://localhost:5005' , function(error, response, body) {
        //expect(body).to.equal('Test API');
        assert.isString(body,'string')
        done();
    });
});
it('API signin', function(done) {
    request('http://localhost:5005/imps/signin' , function(error, response, body) {
        //console.log(error+response.body)
        expect(response.statusCode).to.equal(404);
        done();
    });
});
it('API - try to access api without jwt token get 401 error', function(done) {
    request('http://localhost:5005/imps/admin/history' , function(error, response, body) {
        //console.log(error+response.body)
        expect(response.statusCode).to.equal(401);
        done();
    });
});