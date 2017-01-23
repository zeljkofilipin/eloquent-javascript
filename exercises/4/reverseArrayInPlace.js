'use strict';

/**
 * Return array with elements in the reverse order.
 * @param {array} array The array to be reversed.
 * @return {array} Array with elements in the reverse order.
 */
function reverseArrayInPlace(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let front = array[i];
		let back = array[array.length - 1 - i];
		array[i] = back;
		array[array.length - 1 - i] = front;
	}
	return array;
}

console.log(reverseArrayInPlace([1, 2, 3]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
