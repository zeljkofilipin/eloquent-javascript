'use strict';

/**
 * asTabs
 * @param {object} node
 */
function asTabs(node) {
	let childNodes = Array.prototype.slice.call(node.childNodes);
	let divs = [];
	childNodes.forEach(function(childNode) {
		if (childNode.tagName === 'DIV') {
			divs.push(childNode);
		}
	});
	divs.forEach(function(div) {
		div.style.display = 'none';
		let button = document.createElement('button');
		button.innerHTML = div.getAttribute('data-tabname');
		node.appendChild(button);
	});
	addEventListener('click', function( event ) {
		let buttonCollection = document.getElementsByTagName('button');
		let buttons = Array.prototype.slice.call(buttonCollection);
		buttons.forEach(function(button) {
			button.style.backgroundColor = '';
		});
		event.target.style.backgroundColor = 'green';
		divs.forEach(function(div) {
			if (div.getAttribute('data-tabname') === event.target.innerHTML ) {
				div.style.display = 'block';
			} else {
				div.style.display = 'none';
			}
		});
	});
}
asTabs(document.querySelector('#wrapper'));
