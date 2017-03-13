'use strict';
/**
 * byTagName
 * @param {object} node
 * @param {object} tagName
 * @return {object}
 */
function byTagName(node, tagName) {
  var found = [];
  tagName = tagName.toUpperCase();

  function explore(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
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
