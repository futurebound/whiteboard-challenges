'use strict';

const solution = module.exports = {};

solution.iterative = function(index) {

};

solution.recursive = function(index) {
  if(typeof index !== 'number' || index < 0) return new Error('please pass a number greater than or equal to 0');
  if(index === 0) return 0;
  if(index === 1) return 1;
  if(index > 1) {
    return solution.recursive(index - 1) + solution.recursive(index - 2);
  }
};