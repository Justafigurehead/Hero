var Hero = function(name, favFood){
 this.title = name;
 this.healthpts = 25;
 this.favFood = favFood;

}

Hero.prototype = {
  talk: function(){
   console.log("I am out of mana!");
   return("I am out of mana!");
  }
}; 

module.exports = Hero;