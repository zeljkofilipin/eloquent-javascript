'use strict';
let run = require('./code/chapter/11_language').run;

run(
	'do(define(total, 0),',
	'	define(count, 1),',
	'	while(<(count, 11),',
	'		do(define(total, +(total, count)),',
	'			define(count, +(count, 1)))),',
	'	print(total))');

// from http://eloquentjavascript.net/code/#11.1
// Modify these definitions...
/*
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
*/
