module.exports = function transform ( arr ) {
  if ( !Array.isArray ( arr ) ) throw new Error();
  let resultArray = [];

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr [ i ] == '--discard-next' ) {
      i++;
    } else if ( arr [ i ] == '--discard-prev' ) {
      resultArray.pop();
    } else if ( arr [ i ] == '--double-next' ) {
      if ( i < arr.length - 1 ) {
        resultArray.push ( arr [ i + 1 ] );
      }
    } else if ( arr [ i ] == '--double-prev' ) {
      if ( i > 0 ) {
        resultArray.push ( arr [ i - 1 ] );
      }        
    } else resultArray.push ( arr [ i ] );
  }
  return resultArray
};
