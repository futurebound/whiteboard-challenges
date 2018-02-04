'use strict';

const solution = module.exports = {};

solution.nthFromLast = function(n, sll) {
  const targetIndex = sll.length - n;
  let current = sll.head;

  for (let i = 1; i < targetIndex; i++) {
    current = current.next;
  }
  return current;
};