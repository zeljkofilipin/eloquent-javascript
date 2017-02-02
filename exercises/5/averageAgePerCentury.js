// from http://eloquentjavascript.net/code/#5.3
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

// Your code here.
let ancestry = require('../../code/5/ancestry.js');

/**
 * Age.
 * @param {object} person Person object.
 * @return {number} Age.
 */
function age(person) {
	return person.died - person.born;
}

/**
 * Century.
 * @param {object} person Person object.
 * @return {number} Century.
 */
function century(person) {
	return Math.ceil(person.died/100);
}

/**
 * Age per century.
 * @param {array} ancestry The array of objects.
 * @return {object} Age per century.
 */
function agePerCentury(ancestry) {
	let agesByCentury= {
		'16': [],
		'17': [],
		'18': [],
		'19': [],
		'20': [],
		'21': [],
	};
	ancestry.forEach(function(person) {
		agesByCentury[century(person)].push(age(person));
	});
	return agesByCentury;
}

/**
 * Average age per century.
 * @param {object} agesByCentury Ages grouped by century.
 * @return {object} Average age per century.
 */
function averageAgePerCentury(agesByCentury) {
	let averages = {};
	for( let i = 16; i < 22; i++) {
		averages[i] = average(agesByCentury[i]).toFixed(1);
	}
	return averages;
}

console.log(averageAgePerCentury(agePerCentury(ancestry)));
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
