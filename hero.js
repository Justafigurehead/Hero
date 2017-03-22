var Hero = function(name, favFood){
 this.title = name;
 this.healthpts = 25;
 this.maxhealthpts = 50;
 this.favFood = favFood;

}

Hero.prototype = {
  talk: function(){
   console.log("I am out of mana!");
   return("I am out of mana!");
  },
  eat: function(food){
      if (food.name === this.favFood){
        this.healthpts += 1.5 * food.replenish;
      } else {
        this.healthpts += food.replenish;
      }
    }
}; 

module.exports = Hero;