'use strict';

/**
 * Return array containing numbers from start to end, including. Increment by 1.
 * @param {int} start The first element of the array.
 * @param {int} end The last element of the array.
 * @param {int} step Step between elements of array. Optional. Defaults to 1.
 * @return {array} Array containing numbers from start to end.
 */
function range(start, end, step) {
	if (step === undefined) {
		step = 1;
	}
	let array = [];
	for(let i = start; i <= end; i += step) {
		array.push(i);
	}
	return array;
}

/**
 * Sum contents of an array.
 * @param {array} array The array.
 * @return {int} Sum of the contents of an array.
 */
function sum(array) {
	let sum = 0;
	array.forEach(function(element) {
		sum += element;
	});
	return sum;
}

let array = range(1, 10);
console.log(array);
console.log(sum(array));
console.log(range(1, 10, 2));
