module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  result.turns = 2 ** disksNumber - 1;
  result.seconds = Math.floor((3600 / turnsSpeed) * result.turns);
  return result;
};
