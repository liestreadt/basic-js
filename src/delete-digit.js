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
  const arr = [];
  for (let i = 0; i < String(n).split('').length; i++) {
    let tempSplit = String(n).split('');
    let tempStr = '';
    tempSplit.splice(i, 1);
    tempSplit.forEach(item => tempStr += item);
    console.log(tempStr);
    arr.push(+tempStr);
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
