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
  if (str === '') return '';
  let arr = str.split('');
  let encoding = [];
  let previous = arr[0];
  let count = 1;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] !== previous) {
      encoding.push([count, previous]);
      count = 1;
      previous = arr[i];
    } else {
      count++;
    }
  }
  const regex = /[,1]/g;
  encoding.push([count, previous]);
  return encoding.join('').replaceAll(regex, '');
}

module.exports = {
  encodeLine
};
