const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

   chain: [],

   getLength() {

      return this.chain.length
   },

   addLink(value = ' ') {
      this.chain.push(value)
      return this
   },

   removeLink(position) {
      if (position < 1 || position > this.chain.length || typeof position !== 'number' || position % 1 !== 0) {
         this.chain.length = 0;
         throw new Error('You can\'t remove incorrect link!')
      }
      this.chain.splice(position - 1, 1)
      return this
   },

   reverseChain() {
      this.chain.reverse()
      return this
   },

   finishChain() {
      let show = this.chain.map(it => `( ${it} )`).join('~~');
      this.chain.length = 0;
      return show;
   }
};

module.exports = {
   chainMaker
};
