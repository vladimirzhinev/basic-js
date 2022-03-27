const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input 
 * ,
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

   names.forEach((it, ind) => {

      let x = 1

      for (let i = ind + 1; i < names.length; i++) {

         names[i] == names[ind] ? names[i] += `(${x++})` : names[i]

      }

   })
   return names
}

module.exports = {
   renameFiles
};
