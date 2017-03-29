'use strict';
let cx = document.querySelector('canvas').getContext('2d');

(function trapezoid(x, y) {
	cx.beginPath();
	cx.moveTo(x + 25, y);
	cx.lineTo(x + 50, y);
	cx.lineTo(x + 75, y + 25);
	cx.lineTo(x, y + 25);
	cx.lineTo(x + 25, y);
	cx.stroke();
})(0, 0);

(function redDiamond(x, y, width, height) {
	cx.save();
	cx.rotate(Math.PI/4);
	cx.fillStyle = 'red';
	cx.fillRect(x, y, width, height);
	cx.restore();
})(100, -100, 50, 50);

(function zigzaggingLines(x, y, step) {
	cx.beginPath();
	cx.moveTo(x, y);
	for (let i = 5; i < 50; i += step) {
	cx.lineTo(x + 50, i);
	cx.lineTo(x, i+5);
	}
	cx.stroke();
})(200, 0, 10);
