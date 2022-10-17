const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!")
  const temp = [].concat(arr);
  for (let i = 0; i < temp.length; i++) {
    temp[i] === '--double-next' ?
    (i !== temp.length - 1 ? temp[i] = temp[i+1] : temp.splice(temp.length - 1, 1)) :
    '';

    temp[i] === '--double-prev' ?
    (i !== 0 ? temp[i] = temp[i-1] : temp.splice(0, 1)) :
    '';

    temp[i] === '--discard-next' ?
    (i !== temp.length - 1 ?
      (temp[i+2] === '--discard-prev' || '--double-prev' ?
      temp.splice(i, 3) : temp.splice(i, 2)) :
      temp.splice(temp.length - 1, 1)
    ) :
    '';

    temp[i] === '--discard-prev' ?
    (i !== 0 ? temp.splice(i-1, 2) : temp.splice(0, 1)) :
    '';
  }
  return temp.filter(elem => elem != "--double-prev");
}

module.exports = {
  transform
};
