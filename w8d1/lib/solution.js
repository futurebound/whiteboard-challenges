'use strict';

const BST = require('./binary-search-tree');

module.exports = (bstOne, bstTwo) => {
  if(bstOne instanceof BST && bstTwo instanceof BST) {

    return isSame(bstOne.root, bstTwo.root);
  }
  return new Error('pass two binary search trees');
}

const isSame = function(rootOne, rootTwo) {
  let output = false;
  output = rootOne.left ?
    rootTwo.left ? true : false
    :
    !rootTwo.left ? true : false;
  output = rootOne.right ?
    rootTwo.right ? true : false
    :
    !rootTwo.right ? true : false;
  if(output && rootOne.left)
    output = isSame(rootOne.left, rootTwo.left);
  if(output && rootOne.right)
    output = isSame(rootOne.right, rootTwo.right);
  return output;
}