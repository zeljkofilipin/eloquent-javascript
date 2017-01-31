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
let ancestry = require('../../code/5/ancestry.js');
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
/**
 * Mother-child age difference.
 * @param {object} mother The mother.
 * @param {object} child The child.
 * @return {number} Age difference.
 */
function motherChildAgeDifference(mother, child) {
	return child.born - mother.born;
}
let age = ancestry.map(function(person) {
	return person.died - person.born;
});
console.log(motherChildAgeDifference(ancestry[1], ancestry[0]));
// → 31.2
