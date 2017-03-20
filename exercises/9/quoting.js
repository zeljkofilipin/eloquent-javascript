'use strict';

// from http://eloquentjavascript.net/code/#9.2
// eslint-disable-next-line quotes
let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."
