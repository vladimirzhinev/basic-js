const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
   let helpArr = []
   let res = []
   n = n.toString().split('')

   for (let i = 0; i < n.length; i++) {

      n.forEach((it, ind) => {
         if (ind !== i) {
            helpArr.push(it)
         }
      })
      res.push(helpArr.join(''))
      helpArr.length = 0
   }

   res = res.map(it => +it)//.sort((a, b) => b - a)

   return Math.max(...res)
}

module.exports = {
   deleteDigit
};
