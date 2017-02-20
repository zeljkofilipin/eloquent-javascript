'use strict';
// Your code here
let LifelikeWorld = require('./code/07_elife.js').LifelikeWorld;
let Wall = require('./code/07_elife.js').Wall;
let Plant = require('./code/07_elife.js').Plant;

/**
 * Smart plant eater
 */
function SmartPlantEater() {
  this.energy = 20;
}
SmartPlantEater.prototype.act = function(view) {
  let space = view.find(' ');
  let plant = view.find('*');
  if (this.energy > 100)
    return {type: 'reproduce', direction: space};
  if (plant)
    return {type: 'eat', direction: plant};
  if (space)
    return {type: 'move', direction: space};
};

let valley = new LifelikeWorld(
  ['############################',
   '#####                 ######',
   '##   ***                **##',
   '#   *##**         **  O  *##',
   '#    ***     O    ##**    *#',
   '#       O         ##***    #',
   '#                 ##**     #',
   '#   O       #*             #',
   '#*          #**       O    #',
   '#***        ##**    O    **#',
   '##****     ###***       *###',
   '############################'],
  {'#': Wall,
   'O': SmartPlantEater,
   '*': Plant}
);

if (require.main === module) {
	for (let i = 0; i < 100; i++) {
		valley.turn();
		for (let j = 0; j < 1; j++) {}
		console.log(valley.toString());
	}
}
module.exports = {SmartPlantEater};
