function transform(arr) {
   if (!(arr instanceof Array)) {
      throw Error("'arr' parameter must be an instance of the Array!")
   }
   let res = arr.slice(0)

   res.map((it, ind) => {

      if (res[ind] == '--discard-next' && res[ind + 1]) {

         res.splice(ind, 2, 'del')
      }
      else if (res[ind] == '--discard-prev' && res[ind - 1] && res[ind - 1] !== 'del') {

         res.splice(ind - 1, 2, 'del')
      }

      else if (res[ind] == '--double-next' && res[ind + 1]) {

         res.splice(ind, 1, res[ind + 1])
      }
      else if (res[ind] == '--double-prev' && res[ind - 1] && res[ind - 1] !== 'del') {

         res.splice(ind, 1, res[ind - 1])
      }
   })

   res = res.filter(it => it !== 'del' && it !== '--discard-prev' && it !== '--double-prev' && it !== '--discard-next' && it !== '--double-next')
   return res
}

module.exports = {
   transform
};
