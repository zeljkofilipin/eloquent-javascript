'use strict';

let grid = '';
let size = 8;
let even = ' # # # #\n';
let odd = '# # # # \n';

for (let i = 0; i < size; i++) {
	if (i % 2 === 0) {
		grid += even;
	} else {
		grid += odd;
	}
}

console.log(grid);
