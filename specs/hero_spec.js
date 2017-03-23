
var Hero = require('../hero');
var Food = require('../food');
var assert = require('assert');


describe('Hero', function(){


var eilonwy;
var rye;

beforeEach(function(){
  rye = new Food("Conjured Rye", 15);
  bread = new Food("Conjured Bread", 15);
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

  it('should be able to gain health by eating', function(){
    eilonwy.healthpts = 1;
    eilonwy.eat(bread);
    assert.equal(16, eilonwy.healthpts);
  });

  it('should go up by 1.5 x replenish points if their fav!', function(){
    eilonwy.healthpts = 1;
    eilonwy.eat(rye);
    assert.equal(23.5, eilonwy.healthpts);
  });

  it('should not add healthpts because health is full', function(){
    eilonwy.healthpts = 49
  })

})