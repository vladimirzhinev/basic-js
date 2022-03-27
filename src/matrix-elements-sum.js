const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
   let x = []
   let lenRaw = matrix[0].length

   matrix.forEach(it => it.forEach(it => x.push(it)))

   return x.reduce((acc, it, ind) => x[ind - lenRaw] == undefined || x[ind - lenRaw] !== 0 ? acc + it : acc, 0)
}

module.exports = {
   getMatrixElementsSum
};
