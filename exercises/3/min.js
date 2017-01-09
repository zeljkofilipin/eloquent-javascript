'use strict';

/**
 * The smaller of two numbers.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @return {int} The smaller of the two numbers.
 */
function min(num1, num2) {
	if ( num1 <= num2) {
		return num1;
	} else {
		return num2;
	}
}

console.log(min(0, 10));
console.log(min(0, -10));
