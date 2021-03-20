module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 1;
    }
    let depth = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let count = this.calculateDepth(item) + 1;
        if (depth < count) {
          depth = count;
        }
      }
    }
    return depth;
  }
};
