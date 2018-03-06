'use strict';

const Node = require('../lib/node');

class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //O(1)
  insertHead(value) {
    if(typeof value !== 'number') return 'ERROR: non-numeric input';
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length += 1;
    return this;
  }
  
  //O(n)
  insertEnd(value) {
    if(typeof value !== 'number') return 'ERROR: non-numeric input';
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.length += 1;
      return this;
    }
    for(var i = this.head; i.next; i = i.next);
    i.next = node;
    this.length += 1;
    return this;
  }

  //O(n)
  reverse() {
    if(!this.head || !this.head.next) return 'ERROR: Empty or single element linked list, nothing to reverse';
    if(this.head.next) {
      let result = null;
      let current = this.head;
      let temp;

      while(current) {
        temp = current.next;
        current.next = result;
        result = current;
        current = temp;
      }
      this.head = result;
      return this;
    }
  }

  //O(n)
  remove(offset) {
    if(this.length === 0) return 'ERROR: No nodes to delete';
    if(offset === 1) {
      let current = this.head;
      current = current.next; 
      this.head = current;
      this.length--;
      return this;
    } else {
      let previous;
      let current = this.head;
      let counter = 0;
      while (counter < offset - 1) {
        previous = current;
        current = current.next;
        counter++;
      }
      previous.next = current.next;
      this.length--;

      return this;
    }
  }
}

module.exports = SLL;