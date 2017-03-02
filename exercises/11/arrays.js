'use strict';
let run = require('./code/chapter/11_language').run;
let topEnv = require('./code/chapter/11_language').topEnv;

// from http://eloquentjavascript.net/code/#11.1
// Modify these definitions...

topEnv['array'] = '...';

topEnv['length'] = '...';

topEnv['element'] = '...';

run('do(define(sum, fun(array,',
    '     do(define(i, 0),',
    '        define(sum, 0),',
    '        while(<(i, length(array)),',
    '          do(define(sum, +(sum, element(array, i))),',
    '             define(i, +(i, 1)))),',
    '        sum))),',
    '   print(sum(array(1, 2, 3))))');
// → 6
