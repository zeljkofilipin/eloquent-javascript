'use strict';

/**
 * Return array with elements in the reverse order.
 * @param {array} array The array to be reversed.
 * @return {array} Array with elements in the reverse order.
 */
function reverseArray(array) {
	let reversed = [];
	for (let i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]);
	}
	return reversed;
}

console.log(reverseArray([1, 2, 3]));
