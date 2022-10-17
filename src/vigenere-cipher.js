const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(value) {
    this.machine = 'direct';
    if (value === false) {
      this.machine = 'reverse'
    } else {
      this.machine = 'direct';
    }
  }

  encrypt(string, key) {
    if (arguments.length !== 2 || typeof string !== 'string') throw Error('Incorrect arguments!');
    let cypher = '';
    for (let i = 0, j = 0; i < string.length; i++) {
      let upperLetter = string[i].toUpperCase();
      if (upperLetter.charCodeAt() >= 65 && upperLetter.charCodeAt() <= 90) {
        console.log('asd');
        let currentLetter = ((upperLetter.charCodeAt() - 65) +
        (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        cypher += String.fromCharCode(currentLetter + 65);
        j++;
      } else {
        cypher += upperLetter;
      }
    }
    return this.machine === 'direct' ? cypher : cypher.split('').reverse().join('');
  };

  decrypt(string, key) {
    if (arguments.length !== 2 || typeof string !== 'string') throw Error('Incorrect arguments!');
    let message = '';
    for (let i = 0, j = 0; i < string.length; i++) {
      let upperLetter = string[i].toUpperCase();
      if (upperLetter.charCodeAt() >= 65 && upperLetter.charCodeAt() <= 90) {
        let currentLetter = ((upperLetter.charCodeAt() - 65) -
        (key[j % key.length].toUpperCase().charCodeAt() - 65));
        currentLetter = currentLetter >= 0 ? currentLetter : currentLetter + 26;
        currentLetter %= 26
        message += String.fromCharCode(currentLetter + 65);
        j++;
      } else {
        message += upperLetter;
      }
    }
    return this.machine === 'direct' ? message : message.split('').reverse().join('');
  };
}

module.exports = {
  VigenereCipheringMachine
};
