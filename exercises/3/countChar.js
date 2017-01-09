'use strict';

/**
 * Count the number of a character in the string.
 * @param {string} string The string.
 * @param {string} character The character to be counted.
 * @return {int} number The number of the characters in the string.
 */
function countChar(string, character) {
	let numberOfChars = 0;
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === character) {
			numberOfChars++;
		}
	}
	return numberOfChars;
}

console.log(countChar('BBC', 'B'));
console.log(countChar('kakkerlak', 'k'));
