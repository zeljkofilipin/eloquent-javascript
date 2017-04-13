// the initial elements
const grid = document.querySelector('#grid');
const next = document.querySelector('#next');

// size of the grid
const x = 3;
const y = 3;

// create grid
for (let i = 0; i < y; i++) {
	let div = document.createElement('div');
	grid.appendChild(div);
	for (let j = 0; j < x; j++) {
		let checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'id' + i + j;
		div.appendChild(checkbox);
	}
}

// next generation
next.addEventListener('click', function() {
	// is checkbox set?
	let world = [];
	for (let i = 0; i < y; i++) {
		let row = [];
		for (let j = 0; j < x; j++) {
			let checkbox = document.querySelector('#id' + i + j);
			row.push(checkbox.checked);
		}
		world.push(row);
	}
	console.log(world);
});
