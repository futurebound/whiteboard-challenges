'use strict';

const solution = require('../lib/solution');

describe('#solution', function() {
  describe('valid input/output', () => {
    it('should return an array', () => {
      expect(solution([1], [1])).toBeInstanceOf(Array);
    });
    it('should return array with duplicates with valid data entry', () => {
      const first = ['ajax', 'bunny', 'berenger', 'carrot'];
      const second = ['apple', 'bunny', 'bundy', 'carrot', 'kiwi', 'red'];
      expect(solution(first, second)).toEqual(['bunny', 'carrot']);
    });
    it('should return array with duplicates with valid data entry, without multiple entries if data set contains multiple instances', () => {
      const first = ['ajax', 'bunny', 'bunny', 'bunny', 'berenger', 'carrot', 'carrot'];
      const second = ['apple', 'bunny', 'bundy', 'carrot', 'kiwi', 'red'];
      expect(solution(first, second)).toEqual(['bunny', 'carrot']);
    });
  });
  
  describe('invalid input/output', () => {
    it('should return an error if not passed any arguments', () => {
      expect(solution()).toBeInstanceOf(Error);
    });
    it('should return an error message if not passed any arguments', () => {
      expect(solution().message).toMatch(/two array arguments/);
    });
    it('should return an error if only passed one argument', () => {
      expect(solution([1, 2, 3])).toBeInstanceOf(Error);
    });
    it('should return an error message if only passed one argument', () => {
      expect(solution([1, 2, 3]).message).toMatch(/two array arguments/);
    });
    it('should return an error with either array being empty', () => {
      const first = ['ajax', 'bunny', 'berenger', 'carrot'];
      const second = [];
      expect(solution(first, second)).toBeInstanceOf(Error);
    });
    it('should return an error message with either array being empty', () => {
      const first = [];
      const second = ['ajax', 'bunny', 'berenger', 'carrot'];
      expect(solution(first, second).message).toMatch(/arrays with values/);
    });
  });
});