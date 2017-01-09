'use strict';

/**
 * Count the number of uppercase B in the string.
 * @param {string} string The string.
 * @return {int} number The number of uppercase B in the string.
 */
function countBs(string) {
	let numberOfBs = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === 'B') {
			numberOfBs++;
		}
	}
	return numberOfBs;
}

console.log(countBs('BBC'));
