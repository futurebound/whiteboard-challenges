'use strict';

module.exports = function (arr1, arr2) {
  if(!arr1 || !arr2) return new Error('Please pass two array arguments.');
  if(arr1.length === 0 || arr2.length === 0) return new Error('Please pass two arrays with values.');
  return Array.from(new Set(arr1.filter(i => arr2.includes(i))));
};