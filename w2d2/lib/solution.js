'use strict';

const solution = module.exports = {};
const SLL = require('./sll'); 

solution.findRepeat = function(sll) {
  if(sll instanceof SLL) {
    if(!sll.head) return new Error('empty sll');

    let pointer1 = sll.head;

    while (pointer1.next) {
      pointer1 = pointer1.next;
      if(pointer1 === sll.head) return true;
    }
    return false;
  } else return new Error('please pass a singly linked list');
};