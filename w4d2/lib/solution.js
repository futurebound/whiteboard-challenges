'use strict';

const K_ary = require('./kary-tree');

const solution = module.exports =  {};

solution.treeSum = function(k_ary) {
  if(k_ary instanceof K_ary && k_ary) {
    let tree = new K_ary();
    tree = k_ary;
    if(!tree.root) return new Error('Invalid input, nothing in tree');

    let total = null;
    let callback = function(current) {
      if(typeof current.val.val === 'number') total += current.val.val;
    };
    tree.breadthFirst(callback);
    return total;
  } else return new Error('please pass a k_ary tree')
};