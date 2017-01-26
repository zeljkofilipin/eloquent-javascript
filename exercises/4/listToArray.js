'use strict';

/**
 * Return nth element of a list.
 * @param {list} list The list.
 * @param {number} position The position in the list.
 * @return {number} The element.
 */
function nth(list, position) {
	return listToArray(list)[position];
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

let arrayToList = require('./arrayToList').arrayToList;
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 1));
