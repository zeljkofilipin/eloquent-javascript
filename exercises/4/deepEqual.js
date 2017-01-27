'use strict';

/**
 * Deep equal.
 * @param {object} value1 The first value.
 * @param {object} value2 The second value.
 * @return {boolean} Two objects are deep equal.
 */
function deepEqual(value1, value2) {
	if ((typeof value1 === 'object') && (typeof value2 === 'object')) {
		let properties1 = Object.getOwnPropertyNames(value1);
		let properties2 = Object.getOwnPropertyNames(value2);

		let equal = [];
		for (let i = 0; i < properties1.length; i++) {
			equal.push(deepEqual(value1[properties1[i]], value2[properties2[i]]));
		}
			return equal;
	} else {
		return value1 === value2;
	}
}

let obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
// → true
