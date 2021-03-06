'use strict';

const solution = module.exports = {};

solution.iterative = function(index) {
  if(index < 0 || !Number.isInteger(index)) return new Error('please pass a whole number (integer) greater than or equal to 0');
  let [a, b] = [1, 0];
  while(index-- > 0) {
    [a, b] = [b + a, a];
  }
  return b;
};

solution.recursive = function(index) {
  if(index < 0 || !Number.isInteger(index)) return new Error('please pass a whole number (integer) greater than or equal to 0');
  if(index === 0) return 0;
  if(index === 1) return 1;
  if(index > 1) {
    return solution.recursive(index - 1) + solution.recursive(index - 2);
  }
};