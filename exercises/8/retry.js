'use strict';
/**
 * MultiplicatorUnitFailure
 */
function MultiplicatorUnitFailure() {}

/**
 * primitiveMultiply
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

/**
 * reliableMultiply
 * @param {number} a
 * @param {number} b
 */
function reliableMultiply(a, b) {
  // Your code here.
  primitiveMultiply(a, b);
}

console.log(reliableMultiply(8, 8));
// → 64
