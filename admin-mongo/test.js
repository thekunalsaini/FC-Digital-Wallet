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
    request('http://localhost:5002' , function(error, response, body) {
        expect(body).to.equal('Test API');
        //assert.isString(body,'string')
        done();
    });
});
it('Type page content', function(done) {
    request('http://localhost:5002' , function(error, response, body) {
        //expect(body).to.equal('Test API');
        assert.isString(body,'string')
        done();
    });
});
it('API signin', function(done) {
    request('http://localhost:5002/admin/signin' , function(error, response, body) {
        //console.log(error+response.body)
        expect(response.statusCode).to.equal(404);
        done();
    });
});

//process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


chai.use(chaiHttp);


  /*
  * Test the /POST route
  */
  describe('/POST admin', () => {
      it('it should signin with 200 code and return object contains data & jwt token', (done) => {
          let admin = {
            "email":"admin@gmail.com",
            "password":"admin123"
        }
        chai.request('http://localhost:5002/admin')
            .post('/signin')
            .send(admin)
            .end((err, res) => {
                   res.should.have.status(200);
                   res.body.should.be.a('object');

                //   res.body.should.have.property('errors');
                //   res.body.errors.should.have.property('pages');
                //   res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });

  });