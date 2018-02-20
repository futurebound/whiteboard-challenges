'use strict';

const solution = module.exports = {};

solution.map = function(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    // let element = array[i];
    result.push(callback(array[i]));
    // result[i] = callback(array[i]);
  }
  return result;
}

solution.filter = function(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i], i, array)) result.push(arr[i]);
  }
  return result;
}

solution.reduce = function(callback, initialValue) {
  let accumulator = (initialValue === undefined) ? undefined : initialValue;
  for(let i = 0; i < this.length; i++) {
    if(accumulator !== undefined) accumulator = callback.call(undefined, accumulator, this[i], i, this);
    else accumulator = this[i];
  }
  return accumulator;
}