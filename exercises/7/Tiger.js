'use strict';

// Your code here
let LifelikeWorld = require('./code/07_elife.js').LifelikeWorld;
let Wall = require('./code/07_elife.js').Wall;
let Plant = require('./code/07_elife.js').Plant;
let SmartPlantEater = require('./SmartPlantEater').SmartPlantEater;

/**
 * Tiger
 */
function Tiger() {
  this.energy = 1000;
}
Tiger.prototype.act = function(view) {
  let space = view.find(' ');
  let food = view.find('O');
  if (this.energy > 1000)
    return {type: 'reproduce', direction: space};
  if (food)
    return {type: 'eat', direction: food};
  if (space)
    return {type: 'move', direction: space};
};

let valley = new LifelikeWorld(
  ['####################################################',
   '#                 ####         ****              ###',
   '#   *  @  ##                 ########       OO    ##',
   '#   *    ##        O O                 ****       *#',
   '#       ##*                        ##########     *#',
   '#      ##***  *         ****                     **#',
   '#* **  #  *  ***      #########                  **#',
   '#* **  #      *               #   *              **#',
   '#     ##              #   O   #  ***          ######',
   '#*            @       #       #   *        O  #    #',
   '#*                    #  ######                 ** #',
   '###          ****          ***                  ** #',
   '#       O                        @         O       #',
   '#   *     ##  ##  ##  ##               ###      *  #',
   '#   **         #              *       #####  O     #',
   '##  **  O   O  #  #    ***  ***        ###      ** #',
   '###               #   *****                    ****#',
   '####################################################'],
  {'#': Wall,
   '@': Tiger,
   'O': SmartPlantEater, // from previous exercise
   '*': Plant}
);

for (let i = 0; i < 100; i++) {
	valley.turn();
	for (let j = 0; j < 1; j++) {}
	console.log(valley.toString());
}
