// Your code here.

/**
 * Log the first five elements of a sequence.
 * @param {object} sequence
 */
function logFive(sequence) {
	for (let i = 0; i < 5; i++) {
		if (!sequence.next()) {
			break;
		}
		console.log(sequence.current());
	}
}

/**
 * Sequentialize the array
 * @param {array} array
 */
function ArraySeq(array) {
  this.array = array;
  this.i = -1;
}
ArraySeq.prototype.current = function() {
  this.i++;
  return this.array[this.i];
};
ArraySeq.prototype.next = function() {
  return this.array[this.i + 1];
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
// logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
