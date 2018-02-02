'use strict';

const K_ary = require('./kary-tree');

const solution = module.exports =  {};

solution.childlessNodes = function(root) {
  // if(!root.val.children[0].val) return new Error('Invalid input, nothing in tree');
  let tree = new K_ary();
  tree = root;
  console.log(tree);
  if(!tree.root) return new Error('Invalid input, nothing in tree');
  let cNodes = [];
  // console.log(tree);
  // console.log(tree.root);
  // console.log(tree.root.children[0]);
  let callback = function(current) {
    // console.log(current);
    // console.log(current.val.val);
    if(!current.val.children[0]) cNodes.push(current.val);
  };
  tree.breadthFirst(callback);
  // console.log(cNodes);
  return cNodes;
};