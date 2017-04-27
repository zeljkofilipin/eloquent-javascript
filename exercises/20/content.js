'use strict';

const http = require('http');

let headers = [
	'text/plain',
	'text/html',
	'application/json',
	'application/rainbows+unicorns',
];

headers.forEach(function(header) {
	let request = http.request({
		hostname: 'eloquentjavascript.net',
		path: '/author',
		method: 'GET',
		headers: {Accept: header},
	}, function(response) {
		response.on('data', function(chunk) {
			let content = '';
			content += chunk;
			console.log('----------');
			console.log(header);
			console.log('----------');
			console.log(content);
		});
	});
	request.end();
});
