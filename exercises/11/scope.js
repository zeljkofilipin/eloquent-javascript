'use strict';
const {run, specialForms} = require('./code/11_language');

// from http://eloquentjavascript.net/code/#11.4

specialForms["set"] = function(args, env) {
  // Your code here.
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
