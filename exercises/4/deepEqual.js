'use strict';

/**
 * Deep equal.
 * @param {object} value1 The first value.
 * @param {object} value2 The second value.
 * @return {boolean} Two objects are deep equal.
 */
function deepEqual(value1, value2) {
	if (value1 === value2) {
		return true;
	}

	if (value1 === null || typeof value1 !== 'object' ||
		value2 === null || typeof value2 !== 'object') {
		return false;
	}

	let properties1 = Object.getOwnPropertyNames(value1);
	let properties2 = Object.getOwnPropertyNames(value2);

	for (let i = 0; i < properties1.length; i++) {
		return (deepEqual(value1[properties1[i]], value2[properties2[i]]));
	}
}

let obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
// → true
