// from http://eloquentjavascript.net/code/#5.2
'use strict';

/**
 * Average.
 * @param {array} array The array.
 * @return {number} The average.
 */
function average(array) {
  /**
   * Plus.
   * @param {number} a The first number.
   * @param {number} b The second number.
   * @return {number} The sum.
   */
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

let byName = {};
let ancestry = require('../ancestry.js');
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

// → 31.2
