'use strict';

const solution = module.exports = {};
const SLL = require('./sll'); 

solution.findRepeat = function(sll) {
  if(sll instanceof SLL) {
    if(!sll.head) return new Error('empty sll');

    let pointer1 = sll.head;
    let pointer2 = sll.head;
    let counter = 0;

    while (sll.head.next && counter < 3) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next.next;
      if(pointer1 === pointer2) return true;
      if(pointer1 === sll.head) counter++;
      if(pointer1 === undefined || pointer2 === undefined) return false;
    }
    return false;
  } else return new Error('please pass a singly linked list');
};