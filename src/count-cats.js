module.exports = function countCats(matrix) {
  let count = 0;
  for (let item of matrix) {
    for (let subItem of item) {
      if (subItem == '^^') {
        count++;
      }
    }
  }
  return count;
};
