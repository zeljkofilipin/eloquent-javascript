'use strict';

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let req = new XMLHttpRequest();
req.open('GET', 'http://eloquentjavascript.net/author', false);
req.setRequestHeader('Accept', 'text/plain');
// req.setRequestHeader('Accept', 'text/html');
// req.setRequestHeader('Accept', 'application/json');
// req.setRequestHeader('Accept', 'application/rainbows+unicorns');
req.send(null);
console.log(req.responseText);
