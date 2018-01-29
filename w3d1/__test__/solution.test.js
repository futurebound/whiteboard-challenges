'use strict';

const solution = require('../lib/solution');

describe('#w3d1 solution', function() {
  describe('#calculateArray method', function () {
    it('should return an array with length of 99', () => {
      let test = solution.arrayGenerator(1);
      expect(test.length).toEqual(99);
    });
    it('should not remove more than one number at a time when given multiple arguments', () => {
      let test = solution.arrayGenerator(20, 21);
      expect(test.length).not.toEqual(98);
    });
    it('should return an error string with argument other than integer', () => {
      let test = solution.arrayGenerator('99');
      expect(test).toEqual('ERROR: Invalid input, must be a number');
    });
  });

  describe('#calculateArray method', function() {
    it('should return a single integer, which is the number between 1-100 missing from the given array', () => {
      let test = solution.arrayGenerator(1);
      expect(typeof solution.calculateMissing(test)).toEqual('number');
    });
    it('should return a specific number, depending on which is missing from array', () => {
      let test = solution.arrayGenerator(20);
      expect(solution.calculateMissing(test)).toEqual(20);
    });
    it('should return an error string with array argument with length other than 99', () => {
      let test = solution.arrayGenerator(20);
      test.splice(1, 1);
      expect(solution.calculateMissing(test)).toEqual('ERROR: Invalid array length');
    });
  });
});