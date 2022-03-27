const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
   let smallStr = '';
   let bigStr = '';
   let count = 0;
   s1.length > s2.length ? (smallStr = s2, bigStr = s1) : (smallStr = s1, bigStr = s2)

   for (let letter of smallStr) {
      if (bigStr.includes(letter)) {
         count++;
         bigStr = bigStr.replace(bigStr[bigStr.indexOf(letter)], '')
      }
   }
   return count
}

module.exports = {
   getCommonCharacterCount
};
