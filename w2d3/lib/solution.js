'use strict';

const solution = module.exports = {};

solution.duplicateNodes = function(list1, list2) {
  let arr1 = [], arr2 = [], duplicates = [];
  while(list1.next) {
    if(typeof(arr1.value) === 'number') arr1.push(list1.value);
  }
  while(list2.next) {
    if(typeof(arr2.vale) === 'number') arr2.push(list2.val);
  }
  for (let i in arr1) {
    if (arr2.includes(arr1[i])) duplicates.push(arr1[i]);
  }
};