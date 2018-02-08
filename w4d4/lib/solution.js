'use strict';

const K_ary = require('../lib/kary-tree');

module.exports = function(k_ary) {
  if (k_ary instanceof K_ary && k_ary) {
    let tree = new K_ary();
    tree = k_ary;
    if (!tree.root) return new Error('Invalid input, nothing in tree');

    let mostChildren = tree.root;
    let callback = function (current) {
      if (current.val.children.length > mostChildren.children.length) mostChildren = current.val;
    };
    tree.breadthFirst(callback);
    return mostChildren;
  } else return new Error('please pass a k_ary tree');
};