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
 * @return {number}
 */
function reliableMultiply(a, b) {
	try {
		return primitiveMultiply(a, b);
	} catch (e) {
		if (e instanceof MultiplicatorUnitFailure) {
			return reliableMultiply(a, b);
		}
	}
}

console.log(reliableMultiply(8, 8));
// → 64
