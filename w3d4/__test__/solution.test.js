'use strict';

const SLL = require('../lib/sll');
const solution = require('../lib/solution');
require('jest');

describe('#solution', () => {
  describe('#dedupe(head)', function () {
    beforeEach(() => {
      this.testSLL = new SLL().insertEnd(1).insertEnd(2).insertEnd(2).insertEnd(3).insertEnd(3).insertEnd(4).insertEnd(5).insertEnd(6);
      this.testSLLTwo = new SLL().insertEnd(1).insertEnd(2).insertEnd(3).insertEnd(4).insertEnd(5).insertEnd(6).insertEnd(2).insertEnd(3);
    });
    
    it('should create an SLL with length of 8, to use as argument in dedupe', () => {
      expect(this.testSLL.length).toEqual(8);
      expect(this.testSLLTwo.length).toEqual(8);
    });
    
    describe('Valid input/output', () => {
      it('should return an instance of SLL', () => {
        expect(solution.dedupe(this.testSLL)).toBeInstanceOf(SLL);
        expect(solution.dedupe(this.testSLLTwo)).toBeInstanceOf(SLL);
      });
  
      it('should have a length of 6 with argument possessing two consecutive duplicates', () => {
        expect(solution.dedupe(this.testSLL).length).toEqual(6);
      });
      it('should have node values of 1, 2, 3, 4, 5, 6', () => {
        let result = solution.dedupe(this.testSLL);
        expect(result.head.value).toEqual(1);
        expect(result.head.next.value).toEqual(2);
        expect(result.head.next.next.value).toEqual(3);
        expect(result.head.next.next.next.value).toEqual(4);
        expect(result.head.next.next.next.next.value).toEqual(5);
        expect(result.head.next.next.next.next.next.value).toEqual(6);
      });
  
      it('should have a length of 8 with argument possessing two duplicates but neither consecutive', () => {
        expect(solution.dedupe(this.testSLLTwo).length).toEqual(8);
      });
      it('should have node values of 1, 2, 3, 4, 5, 6, 2, 3', () => {
        let result = solution.dedupe(this.testSLLTwo);
        expect(result.head.value).toEqual(1);
        expect(result.head.next.value).toEqual(2);
        expect(result.head.next.next.value).toEqual(3);
        expect(result.head.next.next.next.value).toEqual(4);
        expect(result.head.next.next.next.next.value).toEqual(5);
        expect(result.head.next.next.next.next.next.value).toEqual(6);
        expect(result.head.next.next.next.next.next.next.value).toEqual(2);
        expect(result.head.next.next.next.next.next.next.next.value).toEqual(3);
      });

    });

    describe('Invalid input', () => {
      let testInvalid = 'whoops';
      let testInvalidTwo = new SLL().insertEnd(1);
      it('should return error without having a head, value, or next', () => {
        expect(solution.dedupe(testInvalid)).toBeInstanceOf(Error);
      });
      it('should return message of error without having a head, value, or next', () => {
        expect(solution.dedupe(testInvalid).message).toEqual('ERROR: Invalid Input');
      });

      it('should return error with only one node', () => {
        expect(solution.dedupe(testInvalidTwo)).toBeInstanceOf(Error);
      });
      it('should return message of error without having a next', () => {
        expect(solution.dedupe(testInvalidTwo).message).toEqual('ERROR: Only one node in list, cannot check for duplicates');
      });
    });
  });
});