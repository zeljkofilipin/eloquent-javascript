'use strict';

/**
 * step
 * @param {object} timestamp
 */
function step(timestamp) {
  if (!start) start = timestamp;
  let progress = timestamp - start;
  cat.style.left = Math.min(progress / 10, 200) + 'px';
  hat.style.left = 200 - Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

if (typeof module != 'undefined' && module.exports)
  module.exports = {step};
