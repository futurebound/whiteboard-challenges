'use strict';

const K_ary = require('./kary-tree');

const solution = module.exports =  {};

solution.childlessNodes = function(root) {
  let tree = new K_ary();
  tree = root;
  if(!tree.root) return new Error('Invalid input, nothing in tree');
  let cNodes = [];
  let callback = function(current) {
    if(!current.val.children[0]) cNodes.push(current.val);
  };
  tree.breadthFirst(callback);
  return cNodes;
};