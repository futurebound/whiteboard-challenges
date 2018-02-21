'use strict';

const solution = require('../lib/solution');
require('jest');

describe('#solution', function () {
  describe(`valid input/output`, () => {
    this.test = 
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
    this.testTwo = 
      [
        ['one', 2, 3],
        [4, 'five', 6],
        [7, 8, 'nine'],
      ];
    this.testThree = 
      [
        [0.1, 0.2, 0.3],
        [0.4, 0.5, 0.6],
        [0.7, 0.8, 0.9],
      ];

    it('should rotate an array of arrays 90 degrees', () => {
      expect(solution(this.test))
        .toEqual(
          [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
          ]);
    });
    it('should rotate an array of arrays 90 degrees even if some elements are not numbers', () => {
      expect(solution(this.testTwo))
        .toEqual(
          [
            [7, 4, 'one'],
            [8, 'five', 2],
            ['nine', 6, 3],
          ]);
    });
    it('should rotate an array of arrays 90 degrees even if all floating point integers', () => {
      expect(solution(this.testThree))
        .toEqual(
          [
            [0.7, 0.4, 0.1],
            [0.8, 0.5, 0.2],
            [0.9, 0.6, 0.3],
          ]);
    });
  });

  describe(`invalid input/output`, () => {
    this.testInvalid = 'array';
    this.testInvalidTwo = [[], [], [], 'array'];
    this.testInvalidThree =
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9, 10],
      ];

    it('should return error if not passed array', () => {
      expect(solution(this.testInvalid)).toBeInstanceOf(Error);
    });
    it('should return error message asking for array of arrays if not passed array', () => {
      expect(solution(this.testInvalid).message).toMatch(/pass an array with nested arrays/);
    });
    it('should return error if not passed array with nested arrays', () => {
      expect(solution(this.testInvalidTwo)).toBeInstanceOf(Error);
    });
    it('should return error message asking for array of arrays if not passed array of nested arrays', () => {
      expect(solution(this.testInvalidTwo).message).toMatch(/pass an array with nested arrays/);
    });
    it('should return error if nested arrays are not all same length', () => {
      expect(solution(this.testInvalidThree)).toBeInstanceOf(Error);
    });
    it('should return error message asking for nested arrays to be same length', () => {
      expect(solution(this.testInvalidThree).message).toMatch(/of the same length/);
    });
  });
});