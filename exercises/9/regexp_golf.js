'use strict';
// from http://eloquentjavascript.net/code/#9.1
// Fill in the regular expressions

verify(/ca(r|t)/,
       ['my car', 'bad cats'],
       ['camper', 'high art']);

verify(/pr*op/,
       ['pop culture', 'mad props'],
       ['plop']);

verify(/ferr(et|y|ari)/,
       ['ferret', 'ferry', 'ferrari'],
       ['ferrum', 'transfer A']);

verify(/ious\b/,
       ['how delicious', 'spacious room'],
       ['ruinous', 'consciousness']);

verify(/\s(\.|,|:|;)/,
       ['bad punctuation .'],
       ['escape the dot']);

verify(/\w{7,}/,
       ['hottentottententen'],
       ['no', 'hotten totten tenten']);

verify(/.../,
       ['red platypus', 'wobbling nest'],
       ['earth bed', 'learning ape']);

/**
 * verify
 * @param {regexp} regexp
 * @param {array} yes
 * @param {array} no
 */
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == '...') return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log('Failure to match "' + s + '"');
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log('Unexpected match for "' + s + '"');
  });
}
