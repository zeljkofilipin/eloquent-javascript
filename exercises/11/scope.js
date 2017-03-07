'use strict';
const {evaluate, run, specialForms} = require('./code/11_language');

// from http://eloquentjavascript.net/code/#11.4

specialForms["set"] = function(args, env) {
  if (args.length != 2 || args[0].type != "word")
    throw new SyntaxError("Bad use of set");
  var varName = args[0].name;
  var value = evaluate(args[1], env);

  for (var scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, varName)) {
      scope[varName] = value;
      return value;
    }
  }
  throw new ReferenceError("Setting undefined variable " + varName);
};

run('do(define(x, 4),',
    '   define(setx, fun(val, set(x, val))),',
    '   setx(50),',
    '   print(x))');
// → 50
try {
  run('set(quux, true)');
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log(e);
  } else {
    throw e;
 }
}
// → Some kind of ReferenceError
