'use strict';

module.exports = function(array) {
  if(!Array.isArray(array)) return new Error('Please pass an array with nested arrays.');
  if(array.filter(i => !Array.isArray(i)).length) return new Error('Please pass an array with nested arrays.');
  let target = array[0].length;
  for(let i in array) {
    if(array[i].length !== target) return new Error('Please pass an array with nested arrays of the same length.');
  }

  return array.reverse().map((arr, i, orgArr) => arr.map((val, j) => orgArr[j][i]));
};