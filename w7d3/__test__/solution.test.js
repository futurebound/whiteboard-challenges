'use strict';

const solution = require('../lib/solution');

describe('#solution', function() {
  describe('valid input/output', () => {
    it('should return a number is passed valid arguments', () => {
      expect(typeof solution(3, 3)).toEqual('number');
    });
    it('should return 9 if passed (3, 3)', () => {
      expect(solution(3, 3)).toEqual(9);
    });
    it('should return a number is passed valid arguments', () => {
      expect(typeof solution(21, 4)).toEqual('number');
    });
    it('should return 3 if passed (4, 3)', () => {
      expect(solution(21, 4)).toEqual(27);
    });
  });
    
  describe('invalid input/output', () => {
    it('should return an error if not passed two arguments', () => {
      expect(solution(1)).toBeInstanceOf(Error);
    });
    it('should return an error message if not passed two arguments', () => {
      expect(solution(1).message).toMatch(/pass two integers/);
    });
    it('should return an error if either argument is not a number', () => {
      expect(solution(1, 'two')).toBeInstanceOf(Error);
    });
    it('should return an error message if either argument is not a number', () => {
      expect(solution(1, 'two').message).toMatch(/pass two integers/);
    });
    it('should return an error if either argument is not an integer', () => {
      expect(solution(2, 2.234)).toBeInstanceOf(Error);
    });
    it('should return an error message if either argument is not an integer', () => {
      expect(solution(2, 2.234).message).toMatch(/pass two integers/);
    });
  });
});