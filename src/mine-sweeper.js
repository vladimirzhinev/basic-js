const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
   let result = []
   let x = []
   const lenRaw = matrix[0].length
   matrix.forEach(it => it.forEach(it => x.push(it)))
   x.forEach((it, index) => {
      let count = 0

      if (x[index - 1] !== undefined && x[index - 1] == true) count++
      if (x[index + 1] !== undefined && x[index + 1] == true) count++

      if (x[index - lenRaw] !== undefined && x[index - lenRaw] == true) count++
      if (x[index - lenRaw - 1] !== undefined && x[index - lenRaw - 1] == true) count++
      if (x[index - lenRaw + 1] !== undefined && x[index - lenRaw + 1] == true) count++

      if (x[index + lenRaw] !== undefined && x[index + lenRaw] == true) count++
      // if (x[index + lenRaw - 1] !== undefined && x[index + lenRaw - 1] == true) count++
      if (x[index + lenRaw + 1] !== undefined && x[index + lenRaw + 1] == true) count++

      result.push(count)
   })

   x.length = 0
   while (result.length)
      x.push(result.splice(0, lenRaw))

   return x
}

module.exports = {
   minesweeper
};
