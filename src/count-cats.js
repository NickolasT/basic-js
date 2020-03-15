module.exports = function countCats(matrix) {
  let arr = matrix.flat();
  let cats = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '^^') {
      cats += 1;
    }
  }
  return cats;
};