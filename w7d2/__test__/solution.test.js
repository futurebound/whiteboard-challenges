'use strict';

const solution = require('../lib/solution');

describe('#solution', function() {
  describe('#iterative', function() {
    describe('valid input/output', () => {
      it('should return a number as output with valid input', () => {
        expect(typeof solution.recursive(4)).toEqual('number');
      });
      it('should return value of 3 for an input of 4', () => {
        expect(solution.iterative(4)).toEqual(3);
      });
      it('should return value of 5 for an input of 5', () => {
        expect(solution.iterative(5)).toEqual(5);
      });
    });
    
    describe('invalid input/output', () => {
      it('should return an error if not passed an argument', () => {
        expect(solution.recursive()).toBeInstanceOf(Error);
      });
      it('should return an error message if not passed an argument', () => {
        expect(solution.recursive().message).toMatch(/please pass/);
      });
      it('should return an error if not passed a number', () => {
        expect(solution.recursive('three')).toBeInstanceOf(Error);
      });
      it('should return an error message if not passed a number', () => {
        expect(solution.recursive('three').message).toMatch(/please pass/);
      });
      it('should return an error if passed a number less than 0', () => {
        expect(solution.recursive(-5)).toBeInstanceOf(Error);
      });
      it('should return an error message if passed a number less than 0', () => {
        expect(solution.recursive(-5).message).toMatch(/please pass/);
      });
      it('should return an error if not passed an integer', () => {
        expect(solution.recursive(3.76)).toBeInstanceOf(Error);
      });
      it('should return an error message if not passed an integer', () => {
        expect(solution.recursive(3.76).message).toMatch(/please pass/);
      });
    });
  });

  describe('#recursive', function() {
    describe('valid input/output', () => {
      it('should return a number as output with valid input', () => {
        expect(typeof solution.recursive(4)).toEqual('number');
      });
      it('should return value 3 at index 4 of fibonacci series', () => {
        expect(solution.recursive(4)).toEqual(3);
      });
      it('should return value 34 at index 9 of fibonacci series', () => {
        expect(solution.recursive(9)).toEqual(34);
      });
    });
    
    describe('invalid input/output', () => {
      it('should return an error if not passed an argument', () => {
        expect(solution.recursive()).toBeInstanceOf(Error);
      });
      it('should return an error message if not passed an argument', () => {
        expect(solution.recursive().message).toMatch(/please pass/);
      });
      it('should return an error if not passed a number', () => {
        expect(solution.recursive('three')).toBeInstanceOf(Error);
      });
      it('should return an error message if not passed a number', () => {
        expect(solution.recursive('three').message).toMatch(/please pass/);
      });
      it('should return an error if passed a number less than 0', () => {
        expect(solution.recursive(-5)).toBeInstanceOf(Error);
      });
      it('should return an error message if passed a number less than 0', () => {
        expect(solution.recursive(-5).message).toMatch(/please pass/);
      });
      it('should return an error if not passed an integer', () => {
        expect(solution.recursive(3.76)).toBeInstanceOf(Error);
      });
      it('should return an error message if not passed an integer', () => {
        expect(solution.recursive(3.76).message).toMatch(/please pass/);
      });
    });
  });
});