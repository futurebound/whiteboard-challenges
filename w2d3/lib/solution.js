'use strict';

const Nd = require('./nd');
const SLL = require('./sll');

const solution = module.exports = {};

solution.duplicateNodes = function(list1, list2) {
  let arr1 = [], arr2 = [], duplicates = [];
  let duplicateSLL = new SLL();

  while(list1.next) { //loop pushing all node values into array
    if(typeof(arr1.value) === 'number') arr1.push(list1.value);
  }

  while (list2.next) { //loop pushing all node values into array
    if(typeof(arr2.vale) === 'number') arr2.push(list2.val);
  }

  for (let i in arr1) { //loop checking first array for duplicates present in second array, and that duplicates array doesn't already include value
    if (arr2.includes(arr1[i]) && !duplicates.includes(arr1[i])) duplicates.push(arr1[i]);
  }

  //creates new node at end of created SLL with value of current index of duplicates array
  for(let i in duplicates) {
    duplicateSLL.insertEnd(duplicates[i]);
  }

  //returns duplicate SLL as output
  return duplicateSLL;
};