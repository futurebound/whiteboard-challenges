'use strict';

const SLL = require('../lib/sll');
const K_ary = require('../lib/kary-tree');

module.exports = function(k_ary) {
  if (k_ary instanceof K_ary && k_ary) {
    let tree = new K_ary();
    tree = k_ary;
    if (!tree.root) return new Error('Invalid input, nothing in tree');

    let nodeValues = [], sll = new SLL();
    let callback = function (current) {
      if (typeof current.val.val === 'number') nodeValues.push(current.val.val);
    };
    tree.breadthFirst(callback);
    
    console.log(nodeValues.sort((a, b) => a - b));
    for(let i in nodeValues) {
      sll.insertEnd(nodeValues[i]);
    }

    // console.log(nodeValues.map(i => sll.insertEnd(i)));
    return sll;

  } else return new Error('please pass a k_ary tree');
};