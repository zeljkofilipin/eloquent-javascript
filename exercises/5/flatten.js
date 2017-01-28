'use strict';

/**
 * Flatten arrayo of arrays.
 * @param {array} arrays The array of arrays.
 * @return {array} The flattened array.
 */
function flatten(arrays) {
	return arrays.reduce(function(flat, array) {
		return flat.concat(array);
	}, []);
}

const arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
