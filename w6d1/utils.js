'use strict';

const utils = module.exports = {};

utils.map = function(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

utils.filter = function(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i], i, array)) result.push(array[i]);
  }
  return result;
};

utils.reduce = function(array, callback, initialValue) {
  let accumulator = (initialValue === undefined) ? undefined : initialValue;
  for(let i = 0; i < array.length; i++) {
    if(accumulator !== undefined) accumulator = callback(accumulator, array[i], i, array);
    else accumulator = array[i];
  }
  return accumulator;
};