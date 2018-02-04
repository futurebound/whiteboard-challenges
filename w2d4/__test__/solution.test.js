'use strict';

const solution = require('../lib/solution');
const SLL = require('../lib/sll');

describe('w2d4 whiteboarding', function () {
  describe('#solution.nthFromLast', () => {
    describe('valid input/output', () => {
      beforeEach(() => {
        this.testSLL = new SLL().insertEnd(1).insertEnd(2).insertEnd(3).insertEnd(4).insertEnd(5).insertEnd(6);
      });
  
      it('should return the node 2 from last, with value of 4', () => {
        expect(solution.nthFromLast(2, this.testSLL).value).toEqual(4);
      });
      it('that node should have a .next.next.value of 6, since it is 2 away from the lsat', () => {
        expect(solution.nthFromLast(2, this.testSLL).next.next.value).toEqual(6);
      });
      it('that node should have a .next.next.next of null, since it is 2 away from the last node', () => {
        expect(solution.nthFromLast(2, this.testSLL).next.next.next).toBeNull();
      });
      it('if number is equal to length of SLL, return head node', () => {
        expect(solution.nthFromLast(6, this.testSLL).value).toEqual(1);
      });
    });
    
    describe('invalid input/output', () => {
      it('should error if not passed arguments', () => {
        expect(solution.nthFromLast()).toBeInstanceOf(Error);
        expect(solution.nthFromLast().message).toContain('please enter two arguments');
      });
      it('should error if target not a number', () => {
        let test = new SLL();
        expect(solution.nthFromLast('two', test)).toBeInstanceOf(Error);
        expect(solution.nthFromLast('two', test).message).toContain('enter a number');
      });
      it('should error if target passed empty SLL', () => {
        let test = new SLL();
        expect(solution.nthFromLast(2, test)).toBeInstanceOf(Error);
        expect(solution.nthFromLast(2, test).message).toContain('empty list');
      });
      it('should error if target number is greater than SLL length', () => {
        let test = new SLL().insertEnd(1).insertEnd(2).insertEnd(3).insertEnd(4).insertEnd(5).insertEnd(6);
        expect(solution.nthFromLast(7, test)).toBeInstanceOf(Error);
        expect(solution.nthFromLast(7, test).message).toContain('target not in list');
      });
    });
  });
});