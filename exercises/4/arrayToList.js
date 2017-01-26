'use strict';

/**
 * Prepend element to the list.
 * @param {number} element The element.
 * @param {list} list The list.
 * @return {list} The list.
 */
function prepend(element, list) {
	return {value: element, rest: list};
}

/**
 * Convert array to list.
 * @param {array} array The array.
 * @return {list} list The list.
 */
function arrayToList(array) {
	let list = null;
	array.reverse().forEach(function(i) {
		list = prepend(i, list);
	});
	return list;
}

if (require.main === module) {
	console.log(arrayToList([10, 20]));
	console.log(prepend(10, prepend(20, null)));
}

module.exports = {arrayToList};
