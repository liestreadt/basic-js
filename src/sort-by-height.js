const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrOfItems = [];
  arr.forEach((item, index) => {
    item === -1 ?
    arrOfItems.push([item, index]) :
    '';
  })

  let result = arr.filter(item => item !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arrOfItems.length; i++) {
    result.splice(arrOfItems[i][1], 0, arrOfItems[i][0])
  }
  return result;
}

module.exports = {
  sortByHeight
};
