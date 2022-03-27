const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

   str = str.split('')
   let count = 1
   let res = []
   str.forEach((it, ind) => {

      (str[ind] == str[ind + 1]) ? count++ : (res.push(count, it), count = 1)

   })
   return res.filter(it => it !== 1).join('')
}

module.exports = {
   encodeLine
};
