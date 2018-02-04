'use strict';

const solution = require('../lib/solution2');
require('jest');

describe('#solution2', function() {
  describe('#binarySearch', () => {
    describe('valid input/ouput', () => {

      it('should return an object as output', () => {
        let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        expect(solution.binarySearch(3, test)).toBeInstanceOf(Object);
      });
      it('should return an object with propeties of value and index', () => {
        let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        expect(solution.binarySearch(3, test)).toHaveProperty('value');
        expect(solution.binarySearch(3, test)).toHaveProperty('index');
      });
      it('should return the target value and correct target index', () => {
        let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        expect(solution.binarySearch(3, test).value).toEqual(3);
        expect(solution.binarySearch(3, test).index).toEqual(2);
      });

      it('should return the target value and correct target index if only 1 number in array and that is target', () => {
        let test = [1];
        expect(solution.binarySearch(1, test).value).toEqual(1);
        expect(solution.binarySearch(1, test).index).toEqual(0);
      });
    });

    describe('invalid input/ouput', () => {
      it('should return error if not passed two arguments', () => {
        let test = [1];
        expect(solution.binarySearch(test)).toBeInstanceOf(Error);
      });
      it('should return error message if not passed two arguments', () => {
        let test = [1];
        expect(solution.binarySearch(test).message).toContain('please pass both');
      });

      it('should return error if not n not a number', () => {
        let test = [1];
        expect(solution.binarySearch('two', test)).toBeInstanceOf(Error);
      });
      it('should return error message if n not a number', () => {
        let test = [1];
        expect(solution.binarySearch('two', test).message).toContain('n must be');
      });

      it('should return error if arr not an array', () => {
        let test = 'string';
        expect(solution.binarySearch(2, test)).toBeInstanceOf(Error);
      });
      it('should return error message if arr not an array', () => {
        let test = {};
        expect(solution.binarySearch(2, test).message).toContain('please pass an array');
      });

      it('should return error if empty array', () => {
        let test = [];
        expect(solution.binarySearch(1, test)).toBeInstanceOf(Error);
      });
      it('should return error message if epmty array', () => {
        let test = [];
        expect(solution.binarySearch(1, test).message).toContain('empty array');
      });

      it('should return error if n not in array', () => {
        let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        expect(solution.binarySearch(14, test)).toBeInstanceOf(Error);
      });
      it('should return error message if n not in array', () => {
        let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        expect(solution.binarySearch(14, test).message).toContain('n not in array');
      });
    });
  });
});