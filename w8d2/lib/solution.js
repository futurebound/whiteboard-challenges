'use strict';

const SLL = require('./sll');
const BT = require('./binary-tree');

module.exports = (binaryTree) => {
  if(binaryTree instanceof BT) {
    if(!binaryTree.root) return new Error('binary tree must have a root');

    let output = new SLL();
    let values = binaryTree.inOrderTraversal().filter(value => typeof value  === 'number').sort((a, b) => a - b);
    values.map(value => output.insertEnd(value));

    return output;
  } else return new Error('please pass a binary tree');
};