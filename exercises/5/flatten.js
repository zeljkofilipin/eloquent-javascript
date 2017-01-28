'use strict';

/**
 * Flatten arrayo of arrays.
 * @param {array} arrays The array of arrays.
 * @return {array} The flattened array.
 */
function flatten(arrays) {
	let flat = [];
	arrays.forEach(function(array) {
		array.forEach(function(element) {
			flat.push(element);
		});
	});
	return flat;
}

const arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
