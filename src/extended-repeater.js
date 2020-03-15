module.exports = function repeater ( str, options ) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  if ( separator === undefined ) {
    separator = "+"
  } else {
    separator = separator
  }
  if (repeatTimes === undefined ) {
    repeatTimes = 1
  } else {
    repeatTimes = repeatTimes
  }
  if (additionRepeatTimes === undefined ) {
    additionRepeatTimes = 1
  } else {
    additionRepeatTimes = additionRepeatTimes
  }

  let arr = [];
  for ( let i = 0; i < repeatTimes; i++ ) {
    arr.push (`${str}`)
    for ( let j = 0; j < additionRepeatTimes; j++ ) {
      if ( addition !== undefined ) arr.push ( `${addition}` );
      if ( additionRepeatTimes > j + 1 ) {
        arr.push ( `${additionSeparator}` );
      }
    }
    if ( repeatTimes > i + 1 ) arr.push (`${separator}`); 
  }
  return arr.join('')
};
