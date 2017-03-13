'use strict';
/**
 * byTagName
 * @param {object} node
 * @param {object} tagName
 * @return {object} found
 */
function byTagName(node, tagName) {
  let found = [];
  tagName = tagName.toUpperCase();

  /**
  * explore
  * @param {object} node
  */
  function explore(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE) {
        if (child.nodeName == tagName)
          found.push(child);
        explore(child);
      }
    }
  }

  explore(node);
  return found;
}

if (typeof module != 'undefined' && module.exports)
	module.exports = {byTagName};
