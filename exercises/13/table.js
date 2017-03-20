'use strict';

/**
 * buildTable
 * @param {object} data
 * @return {object} table
 */
function buildTable(data) {
	let table = document.createElement('table');

	let tr = document.createElement('tr');
	let keys = Object.keys(data[0]);
	keys.forEach(function(key) {
		let th = document.createElement('th');
		th.textContent = key;
		tr.appendChild(th);
	});
	table.appendChild(tr);

	data.forEach(function(mountain) {
		let tr = document.createElement('tr');
		keys.forEach(function(key) {
			let td = document.createElement('td');
			td.textContent = mountain[key];
			if (typeof mountain[key] == 'number')
				td.style.textAlign = 'right';
			tr.appendChild(td);
		});
	table.appendChild(tr);
	});

	return table;
}
if (typeof module != 'undefined' && module.exports)
  module.exports = {buildTable};
