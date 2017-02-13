// Your code here
let LifelikeWorld = require('./code/07_elife.js').LifelikeWorld;
let Wall = require('./code/07_elife.js').Wall;
let PlantEater = require('./code/07_elife.js').PlantEater;
let Plant = require('./code/07_elife.js').Plant;

/**
 * Smart plant eater
 */
function SmartPlantEater() {}

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
   // 'O': SmartPlantEater,
   'O': PlantEater,
   '*': Plant}
);

for (let i = 0; i < 9; i++) {
	valley.turn();
	for (let j = 0; j < 999999999; j++) {}
	console.log(valley.toString());
}
