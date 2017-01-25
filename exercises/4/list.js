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
 * @param {list} list The list.
 * @param {array} array The array. Optional. Defaults to empty array.
 * @return {array} array The array.
 */
function listToArray(list, array) {
	if (array === undefined) {
		array = [];
	}
	array.push(list.value);
	if (list.rest) {
		return listToArray(list.rest, array);
	} else {
		return array;
	}
}

console.log(arrayToList([1, 2, 3]));
let list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
console.log(listToArray(list));
