'use strict';

const index = module.exports = {};

index.intersect = function (arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return 'DATA ENTRY ERROR';
  }
  let duplicate = [];
  for (let i in arr1) {
    if (arr2.includes(arr1[i]) && !duplicate.includes(arr1[i])) {
      duplicate.push(arr1[i]);
    }
  }
  return duplicate;
};