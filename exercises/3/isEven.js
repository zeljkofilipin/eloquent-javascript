'use strict';

/**
 * Is the number even.
 * @param {int} number The number.
 * @return {bool} Is the number even.
 */
function isEven(number) {
	if ( number === 0 ) {
		return true;
	} else if (number === 1) {
		return false;
	} else if (number < 0) {
		return isEven(-number);
	} else {
		return isEven(number - 2);
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));