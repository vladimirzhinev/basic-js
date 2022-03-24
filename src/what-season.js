const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

   if (!date) return 'Unable to determine the time of year!';

   if (Object.keys(date).length > 0 || !(date instanceof Date)) {
      throw Error('Invalid date!');
   }

   let result = '';

   const month = date.getMonth();

   (month == 11 || month < 2) ? result = 'winter' :

      (month >= 2 && month <= 4) ? result = 'spring' :

         (month >= 5 && month <= 7) ? result = 'summer' :

            result = 'autumn'

   return result
}

module.exports = {
   getSeason
};
