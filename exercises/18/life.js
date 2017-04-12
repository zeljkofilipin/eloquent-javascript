// the initial elements
var grid = document.querySelector('#grid');
var next = document.querySelector('#next');

// size of the grid
var x = 3;
var y = 3;

// create grid
for (var i = 0; i < y; i++) {
	var div = document.createElement('div');
	grid.appendChild(div);
	for (var j = 0; j < x; j++) {
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'id' + i + j;
		div.appendChild(checkbox);
	}
}

// next generation
next.addEventListener('click', function() {

	// is checkbox set?
	var world = [];
	for (var i = 0; i < y; i++) {
		var row = [];
		for (var j = 0; j < x; j++) {
			var checkbox = document.querySelector('#id' + i + j);
			row.push(checkbox.checked);
		}
		world.push(row);
	}
	console.log(world);

});
