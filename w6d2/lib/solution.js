'use strict';

module.exports = function(array) {
  if(typeof array !== Array) return new Error('Please pass an array with nested arrays.');
  array.forEach(i => {
    if (typeof i !== array) return new Error('Please pass an array with nested arrays.');
  });

  return array.reverse().map((arr, i, orgArr) => arr.map((val, j) => orgArr[j][i]));
};