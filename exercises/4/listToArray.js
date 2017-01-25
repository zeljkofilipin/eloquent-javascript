'use strict';

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

let list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
console.log(listToArray(list));
