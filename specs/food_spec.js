var Food = require('../food');
var assert = require('assert');
 


describe('Food', function(){

  var rye;

  beforeEach(function(){

    rye = new Food("Conjured Rye", 15);
  });

  it('should have a title', function(){
    assert.equal('Conjured Rye', rye.name);
  });

  it('should have heal points attached', function(){
    assert.equal(15, rye.replenish);
  })

});