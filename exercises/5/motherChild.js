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
let ancestry = require('./code/ancestry');
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

let ageDifference = [];
ancestry.forEach(function(person) {
  let mother = byName[person.mother];
	if (mother) {
    ageDifference.push(motherChildAgeDifference(mother, person));
	}
});

console.log(average(ageDifference));
// → 31.2
