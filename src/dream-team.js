const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(arr) {
  let resultString = '';
  if (!Array.isArray(arr)) return false;
  arr.forEach(item => {
    if (typeof item === 'string') {
    item.match(/[a-z]/i) ? resultString += item.trim().toUpperCase().charAt(0) : '';
    }
  });
  return resultString.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
