// Your code here
let LifelikeWorld = require('./code/07_elife.js').LifelikeWorld;
let Wall = require('./code/07_elife.js').Wall;
let Plant = require('./code/07_elife.js').Plant;
let SmartPlantEater = require('./SmartPlantEater').SmartPlantEater;

/**
 * Tiger
 */
function Tiger() {
}
Tiger.prototype.act = function(view) {
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

for (let i = 0; i < 1000; i++) {
	valley.turn();
	for (let j = 0; j < 1000000; j++) {}
	console.log(valley.toString());
}
