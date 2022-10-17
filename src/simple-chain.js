const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!arguments) {
      this.chain.push(' ');
    } else {
      this.chain.push(` ${value} `);
      console.log(this.chain);
      return this;
    }
  },

  removeLink(pos) {
    if (isNaN(pos) || pos > this.chain.length || pos <= 0) {
      this.chain = [];
      throw Error("You can't remove incorrect link!")
    } else {
      this.chain.splice(pos - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = `(${this.chain.join(')~~(')})`;
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
