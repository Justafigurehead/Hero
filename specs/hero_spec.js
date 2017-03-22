var Hero = require('../hero');
var assert = require('assert');

describe('Hero', function(){
var eilonwy;
beforeEach(function(){
  eilonwy = new Hero("Eilonwy the Healer", "Conjured Rye");
});


  it('should have a name', function(){
    assert.equal("Eilonwy the Healer", eilonwy.title);
  });

  it('should have full health points', function(){
    assert.equal(25, eilonwy.healthpts);
  });

  it('should have favourite food', function(){
    assert.equal("Conjured Rye", eilonwy.favFood);
  });
  
  it('should be able to talk', function(){
    assert.equal("I am out of mana!", eilonwy.talk());
  });

})