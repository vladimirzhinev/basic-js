const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

   const k = 0.693 / HALF_LIFE_PERIOD
   const numberActivity = +sampleActivity;

   return (typeof sampleActivity !== 'string' ||
      !parseFloat(sampleActivity) ||
      numberActivity <= 0 ||
      numberActivity > MODERN_ACTIVITY) ? false :
      Math.ceil(Math.log(MODERN_ACTIVITY / numberActivity) / k)


}

module.exports = {
   dateSample
};
