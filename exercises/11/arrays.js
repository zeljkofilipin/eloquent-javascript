'use strict';
let run = require('./code/11_language').run;
let topEnv = require('./code/11_language').topEnv;

// from http://eloquentjavascript.net/code/#11.1
// Modify these definitions...

topEnv['array'] = function(...args) {
	return args;
};

topEnv['length'] = function(array) {
	return array.length;
};

topEnv['element'] = function(array, i) {
	return array[i];
};

run('do(print(array(1, 2, 3)))');
run('do(print(length(array(1, 2, 3))))');
run('do(print(element(array(1, 2, 3), 0)))');
run('do(define(sum, fun(array,',
    '     do(define(i, 0),',
    '        define(sum, 0),',
    '        while(<(i, length(array)),',
    '          do(define(sum, +(sum, element(array, i))),',
    '             define(i, +(i, 1)))),',
    '        sum))),',
    '   print(sum(array(1, 2, 3))))');
// → 6
