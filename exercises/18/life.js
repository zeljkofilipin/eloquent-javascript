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
 * @param {object} checkbox
 * @return {array}
 */
function neighbors(checkbox) {
	let location = checkbox.id.slice(2, 4);
	let x = Number(location.slice(0, 1));
	let y = Number(location.slice(1, 2));

	let possibleNeighbors = [];
	// row above
	possibleNeighbors.push(document.querySelector('#id' + (x - 1) + (y - 1)));
	possibleNeighbors.push(document.querySelector('#id' + (x + 0) + (y - 1)));
	possibleNeighbors.push(document.querySelector('#id' + (x + 1) + (y - 1)));
	// cell's row
	possibleNeighbors.push(document.querySelector('#id' + (x - 1) + (y + 0)));
	possibleNeighbors.push(document.querySelector('#id' + (x + 1) + (y + 0)));
	// row below
	possibleNeighbors.push(document.querySelector('#id' + (x - 1) + (y + 1)));
	possibleNeighbors.push(document.querySelector('#id' + (x + 0) + (y + 1)));
	possibleNeighbors.push(document.querySelector('#id' + (x + 1) + (y + 1)));

	// remove null from array
	let neighbors = possibleNeighbors.filter( function(neighbor) {
		if(neighbor) {
			return neighbor;
		}
	});
	return neighbors;
}

/**
 * @param {array} neighbors
 * @return {int}
 */
function numberOfAliveNeighbors(neighbors) {
	let number = 0;
	neighbors.forEach(function(neighbor) {
		if(neighbor.checked) {
			number++;
		}
	});
	return number;
}

/**
 * @param {object} checkbox
 * @return {boolean}
 */
function isCellAlive(checkbox) {
	let alive = checkbox.checked;
	let number = numberOfAliveNeighbors(neighbors(checkbox));
	if (alive && number === 2) {
		return true;
	} else if (alive && number === 3) {
		return true;
	} else if (alive && number < 2) {
		return false;
	} else if (alive && number > 3) {
		return false;
	} else if (!alive && number === 3) {
		return true;
	}
}

/**
 * @param {array} world
 */
function updateWorld(world) {
	for (let i = 0; i < world.length; i++) {
		for (let j = 0; j < world[0].length; j++) {
			let checkbox = document.querySelector('#id' + j + i);
			checkbox.checked = isCellAlive(checkbox);
		}
	}
}

/**
 */
function nextGeneration() {
	updateWorld(previousGeneration());
}

createGrid(x, y);
next.addEventListener('click', nextGeneration);
