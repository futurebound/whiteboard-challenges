'use strict';

const solution = require('../lib/solution1');
require('jest');

describe('#solution1', function() {
  describe('valid input/output', () => {
    describe('different valid bracket orientations', () => {
      it(`should return true for '{{{{}}}}'`, () => {
        expect(solution.checkBraces('{{{{}}}}')).toBe(true);
      });
      it(`should return true for  '{}{}{}{}{}'`, () => {
        expect(solution.checkBraces('{}{}{}{}{}')).toBe(true);
      });
      it(`should return true for '{{}{}}{{}}'`, () => {
        expect(solution.checkBraces('{{}{}}{{}}')).toBe(true);
      });
    });
    describe('improper syntax', () => {
      it(`should return false for '{{{{}'`, () => {
        expect(solution.checkBraces('{{{{}')).toBe(false);
      });
      it(`should return false for '{{}}}'`, () => {
        expect(solution.checkBraces('{{}}}')).toBe(false);
      });
      it(`should return false for '{{}}}'`, () => {
        expect(solution.checkBraces('{{}}}')).toBe(false);
      });
      it(`should return false for '{{}{}}}'`, () => {
        expect(solution.checkBraces('{{}{}}}')).toBe(false);
      });
      it(`should return false for '}'`, () => {
        expect(solution.checkBraces('}')).toBe(false);
      });
      it(`should return false for '{'`, () => {
        expect(solution.checkBraces('{')).toBe(false);
      });
      it(`should return false for '{asdfasdfasdf'`, () => {
        expect(solution.checkBraces('{')).toBe(false);
      });
      it(`should return false for 'asdfasdfasdf}'`, () => {
        expect(solution.checkBraces('{')).toBe(false);
      });
      it(`should return false for ''`, () => {
        expect(solution.checkBraces('{')).toBe(false);
      });
    });
  });
  describe('invalid input/output', () => {
    it('should return error if not a string', () => {
      expect(solution.checkBraces(2843795709)).toBeInstanceOf(Error);
    });
    it(`should return error message 'argument must be string'`, () => {
      expect(solution.checkBraces(2843795709)).toBeInstanceOf(Error);
      expect(solution.checkBraces(2843795709).message).toMatch('argument must be string');
    });
  });
});