'use strict';

/**
 * Does every element of the array pass the test?
 * @param {array} array
 * @param {object} test
 * @return {bool}
 */
function every(array, test) {
	let passed = true;
	array.forEach(function(element) {
		if (!test(element)) {
			passed = false;
		}
	});
	return passed;
}

/**
 * Do some elements of the array pass the test?
 * @param {array} array
 * @param {object} test
 * @return {bool}
 */
function some(array, test) {
	let passed = false;
	array.forEach(function(element) {
		if (test(element)) {
			passed = true;
		}
	});
	return passed;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
