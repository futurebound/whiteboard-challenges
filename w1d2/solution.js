'use strict';

function twoHighest(arr) {
  if (arr.length === 0) { //to check edge case of empty array
    return null;
  }
  if (arr.length === 1 && typeof(arr[0]) === 'number') { //to check edge case of only one value in array
    return {
      highest: arr[0],
      nextHighest: null
    }
  }

  let highest = -Infinity;
  let nextHighest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] > highest) {
        nextHighest = highest;
        highest = arr[i];
      }
      if (arr[i] > nextHighest && arr[i] !== highest) {
        nextHighest = arr[i];
      }
    }
  }

  return {
    highest: highest,
    nextHighest: nextHighest
  };
}