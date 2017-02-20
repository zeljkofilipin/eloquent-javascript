'use strict';

// from http://eloquentjavascript.net/code/chapter/08_error.js

let box = {
  locked: true,
  unlock: function() {
    this.locked = false;
  },
  lock: function() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};

// from http://eloquentjavascript.net/code/#8.2

/**
 * withBoxUnlocked
 * @param {function} body
 */
function withBoxUnlocked(body) {
  // Your code here.
}

withBoxUnlocked(function() {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(function() {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised:', e);
}
console.log(box.locked);
// → true
