require('../index.js');
var should = require('chai').should();
var expect = require('chai').expect;

describe('Main test', function(){
  describe('# String', function(){
    it('should parameterize', function( done ){
	    expect("This is a test step".parameterize() ).to.equal("this-is-a-test-step");
      	done();
    });
    it('should titleize', function( done ){
	    expect("this_is 543 a-test_step".titleize() ).to.equal("This Is 543 A Test Step");
      	done();
    });
  });
});