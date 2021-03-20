const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push('~( ' + value + ' )~');
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let string = this.arr.join('').slice(1, -1);
    this.arr = [];
    return string;
  }
};

module.exports = chainMaker;
