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

/**
 * Convert list to array.
 * @param {array} array The array.
 * @param {list} list The list.
 * @return {array} array The array.
 */
function listToArray(array, list) {
	array.push(list.value);
	if (list.rest) {
		return listToArray(array, list.rest);
	} else {
		return array;
	}
}

console.log(arrayToList([1, 2, 3]));
let list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
console.log(listToArray([], list));
