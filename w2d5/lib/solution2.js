'use strict';

const solution = module.exports = {};

solution.binarySearch = function(n, arr) {
  if(!n || !arr) return new Error('please pass both a number and an array');
  if(typeof n !== 'number') return new Error('n must be a number');
  
  let midpoint = Math.floor(arr.length / 2), bottom = 0, top = arr.length -1;
  
  if(arr instanceof Array) {
    if(!arr.length) return new Error('empty array');
    if(!arr.includes(n)) return new Error('n not in array');
    recurse();
    return {value: n, index: midpoint};
  } else return new Error('please pass an array');

  function recurse() {
    if (arr[midpoint] === n) {
      return;
    } else if (n < arr[midpoint]) {
      top = midpoint;
      midpoint = Math.floor((top + bottom) / 2);
      recurse();
    } else if (n > arr[midpoint]) {
      bottom = midpoint;
      midpoint = Math.ceil((bottom + top) / 2);
      recurse();
    }
  }
};
