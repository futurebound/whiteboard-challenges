'use strict';

const solution = module.exports = {};

solution.nthFromLast = function(n, sll) {
  if(!n || !sll) return new Error('please enter two arguments: a target number, and a singly linked list')
  if(typeof n !== 'number') return new Error('please enter a number to target');
  if(!sll.head) return new Error('empty list');
  if(n > sll.length) return new Error('target not in list');
  if(n === sll.length) return sll.head;

  const targetIndex = sll.length - n;
  let current = sll.head;

  for (let i = 1; i < targetIndex; i++) {
    current = current.next;
  }
  return current;
};