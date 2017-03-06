'use strict';
let parse = require('./code/11_language').parse;

// from http://eloquentjavascript.net/code/#11.3

console.log(parse('# hello\nx'));
// → {type: 'word', name: 'x'}

console.log(parse('a # one\n   # two\n()'));
// → {type: 'apply',
//    operator: {type: 'word', name: 'a'},
//    args: []}
