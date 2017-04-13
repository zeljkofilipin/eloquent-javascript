// the initial elements
const grid = document.querySelector('#grid');
const next = document.querySelector('#next');

// size of the grid
const x = 3;
const y = 3;

/**
 * @param {int} x
 * @param {int} y
 */
function createGrid(x, y) {
	for (let i = 0; i < y; i++) {
		let div = document.createElement('div');
		grid.appendChild(div);
		for (let j = 0; j < x; j++) {
			let checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.id = 'id' + j + i;
			div.appendChild(checkbox);
		}
	}
}

/**
 * @return {array} world
 */
function previousGeneration() {
	// is checkbox set?
	let world = [];
	for (let i = 0; i < y; i++) {
		let row = [];
		for (let j = 0; j < x; j++) {
			let checkbox = document.querySelector('#id' + j + i);
			row.push(checkbox.checked);
		}
		world.push(row);
	}
	return world;
}

/**
 * @param {array} world
 */
function updateWorld(world) {
	for (let i = 0; i < world.length; i++) {
		for (let j = 0; j < world[0].length; j++) {
			let checkbox = document.querySelector('#id' + j + i);
			checkbox.checked = !checkbox.checked;
		}
	}
}

/**
 * @return {array} world
 */
function nextGeneration() {
	let previousWorld = previousGeneration();
	updateWorld(previousWorld);
	return previousWorld;
}

createGrid(x, y);
next.addEventListener('click', nextGeneration);
