'use strict';

const solution = require('../lib/solution');
const SLL = require('../lib/sll');
require('jest');

describe('#solution.js', function() {
  describe('valid input/output', () => {
    beforeEach(() => {
      this.sll = new SLL().insertEnd(1).insertEnd(2).insertEnd(3);
    });
    
    it('should return false with non-circular SLL', () => {
      expect(solution.findRepeat(this.sll)).toBe(false);
    });
    it('should return true with circular list', () => {
      let test = new SLL().insertEnd(1).insertEnd(2).insertEnd(3);
      test.head.next.next.next = test.head;
      expect(solution.findRepeat(test)).toBe(true);
    });
  });

  describe('invalid input/output', () => {
    it('should return an error if not passed SLL', () => {
      let test = 'SLL';
      expect(solution.findRepeat(test)).toBeInstanceOf(Error);
    });
    it('should return an error with message describing why if not passed SLL', () => {
      let test = 'SLL';
      expect(solution.findRepeat(test).message).toMatch('please pass a singly linked list');
    });
    it('should return an error if passed empty SLL', () => {
      let test = new SLL();
      expect(solution.findRepeat(test)).toBeInstanceOf(Error);
    });
    it('should return an error with message describing why if passed empty SLL', () => {
      let test = new SLL();
      expect(solution.findRepeat(test).message).toMatch('empty sll');
    });
  });
});