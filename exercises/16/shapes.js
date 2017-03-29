'use strict';
let cx = document.querySelector('canvas').getContext('2d');

(function trapezoid(x, y) {
	cx.beginPath();
	cx.moveTo(25, 0);
	cx.lineTo(50, 0);
	cx.lineTo(75, 25);
	cx.lineTo(0, 25);
	cx.lineTo(25, 0);
	cx.stroke();
	cx.save();
})();

(function redDiamond(x, y) {
	cx.rotate(Math.PI/4);
	cx.fillStyle = 'red';
	cx.fillRect(100, 25, 50, 50);
	cx.restore();
})();

(function zigzaggingLines(x, y) {
	cx.beginPath();
	cx.moveTo(100, 0);
	for (let i = 5; i < 50; i += 10) {
	cx.lineTo(150, i);
	cx.lineTo(100, i+5);
	}
	cx.stroke();
})();
