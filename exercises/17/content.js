'use strict';

let headers = [
	'text/plain',
	'text/html',
	'application/json',
	'application/rainbows+unicorns',
];

let req = new XMLHttpRequest();
headers.forEach(function(header) {
	req.open('GET', 'http://eloquentjavascript.net/author', false);
	req.setRequestHeader('Accept', header);
	req.send(null);
	console.log(req.responseText);
});
