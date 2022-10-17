const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = '';
  const repTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.hasOwnProperty('addition') ? options.addition : '';
  const addRepTimes = options.additionRepeatTimes || 1;
  const addSeparator = options.additionSeparator || '|';

  for (let i = 0; i < repTimes; i++) {
    resultStr += str;
    for (let j = 0; j < addRepTimes; j++) {
      resultStr += j < addRepTimes - 1 ? addition + addSeparator : addition;
    }
    resultStr += i < repTimes - 1 ? separator : '';
  }
  return resultStr;
}

module.exports = {
  repeater
};
