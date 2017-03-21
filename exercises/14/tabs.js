'use strict';

function asTabs(node) {
	var childNodes = Array.prototype.slice.call(node.childNodes);
	var divs = [];
	childNodes.forEach(function(childNode) {
		if (childNode.tagName === 'DIV') {
			divs.push(childNode);
		}
	});
	divs.forEach(function(div) {
		div.style.display = 'none';
		var button = document.createElement('button');
		button.innerHTML = div.getAttribute('data-tabname');
		node.appendChild(button);
	});
	addEventListener('click', function( event ) {
		var buttons = Array.prototype.slice.call(document.getElementsByTagName('button'));
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
asTabs(document.querySelector("#wrapper"));
