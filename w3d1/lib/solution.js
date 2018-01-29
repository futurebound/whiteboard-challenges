'use strict';

const solution = module.exports = {};

solution.arrayGenerator = function(val) {
  if(typeof val !== 'number') return ('ERROR: Invalid input, must be a number');

  let arr = [...Array(100)];
  for (let i = 1; i < 101; i++) {
    arr[i - 1] = i;
  }
  arr.splice(val-1, 1);
  return arr;
}

solution.calculateArray = function(arr) {
  if (arr.length !== 99) return ('ERROR: Invalid array length');

  let arrSum = arr.reduce((a, b) => a + b);
  let missing = 5050 - arrSum;
  console.log('missing #:', missing);
  return missing;
}