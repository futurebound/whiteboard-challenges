'use strict';

const solution = require('../lib/solution2');
require('jest');

describe('#solution2', function() {
  describe('#binarySearch', () => {
    describe('valid input/ouput', () => {
      it('should', () => {

      });
    });

    describe('invalid input/ouput', () => {
      it('should return error if not passed two arguments', () => {
        let test = [];
        expect(solution.binarySearch(test)).toBeInstanceOf(Error);
      });
      it('should return error message if not passed two arguments', () => {
        let test = [];
        expect(solution.binarySearch(test).message).toContain('please pass both');
      });

      it('should return error if not n not a number', () => {
        let test = [];
        expect(solution.binarySearch('two', test)).toBeInstanceOf(Error);
      });
      it('should return error message if n not a number', () => {
        let test = [];
        expect(solution.binarySearch('two', test).message).toContain('n must be');
      });

      it('should return error if array argument not an array', () => {
        let test = 'string';
        expect(solution.binarySearch(2, test)).toBeInstanceOf(Error);
      });
      it('should return error message if array arugment not an array', () => {
        let test = {};
        expect(solution.binarySearch(2, test).message).toContain('please pass an array');
      });
    });
  });
});