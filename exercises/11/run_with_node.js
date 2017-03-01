// load dependencies
require("./code/load")("code/chapter/11_language.js");

run("do(define(plusOne, fun(a, +(a, 1))),",
    "   print(plusOne(10)))");

run("do(define(pow, fun(base, exp,",
    "     if(==(exp, 0),",
    "        1,",
    "        *(base, pow(base, -(exp, 1)))))),",
    "   print(pow(2, 10)))");
