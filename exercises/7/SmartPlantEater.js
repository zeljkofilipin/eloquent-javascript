// Your code here
/**
 * Smart plant eater
 */
function SmartPlantEater() {}

animateWorld(new LifelikeWorld(
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
));
