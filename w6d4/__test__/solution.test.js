'use strict';

const solution = require('../lib/solution');
require('jest');

describe('#solution', function () {
  describe(`valid input/output`, () => {

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
      expect(solution(this.testInvalid).message).toMatch(/please pass an array/);
    });
  });
});