// From http://eloquentjavascript.net/code/chapter/06_object.js
'use strict';

/**
 * Repeat.
 * @param {string} string
 * @param {number} times
 * @return {string} result
 */
function repeat(string, times) {
  let result = '';
  for (let i = 0; i < times; i++)
    result += string;
  return result;
}
/**
 * Text cell.
 * @param {string} text
 */
function TextCell(text) {
  this.text = text.split('\n');
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  let result = [];
  for (let i = 0; i < height; i++) {
    let line = this.text[i] || '';
    result.push(line + repeat(' ', width - line.length));
  }
  return result;
};

// Your code here.

/**
 * Stretch cell.
 * @param {string} inner
 * @param {number} width
 * @param {number} height
 */
function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

let sc = new StretchCell(new TextCell('abc'), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
