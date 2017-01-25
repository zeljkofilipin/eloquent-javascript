'use strict';

/**
 * Convert array to list.
 * @param {array} array The array.
 * @return {list} list The list.
 */
function arrayToList(array) {
	let list = null;
	array.reverse().forEach(function(i) {
		list = {value: i, rest: list};
	});
	return list;
}

console.log(arrayToList([1, 2, 3]));
