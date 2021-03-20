module.exports = function repeater(str, options) {
  let result = '';
  let additionStr = '';
  if ('addition' in options) {
    if (!('additionSeparator' in options)) {
      options.additionSeparator = '|';
    }
    if (options.additionRepeatTimes > 1) {
      options.addition += options.additionSeparator;
    }
    additionStr = options.addition;
    if ('additionRepeatTimes' in options) {
      for (i = 0; i < options.additionRepeatTimes - 1; i++) {
        additionStr += options.addition;
      }
    }
    if (options.additionRepeatTimes > 1) {
      additionStr = additionStr.slice(0, additionStr.lastIndexOf(options.additionSeparator));
    }
    str += additionStr;
  }
  if (!('separator' in options)) {
    options.separator = '+';
  }
  if (options.repeatTimes > 1) {
    str += options.separator;
  }
  result = str;
  if ('repeatTimes' in options) {
    for (i = 0; i < options.repeatTimes - 1; i++) {
      result += str;
    }
  }
  if (options.repeatTimes > 1) {
    result = result.slice(0, result.lastIndexOf(options.separator))
  }
  return (result);
};
