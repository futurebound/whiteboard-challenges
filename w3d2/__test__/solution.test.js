'use strict';

const Queue = require('../lib/solution');
require('jest');

describe('#solution', function() {
  describe('valid input/output', () => {
    beforeEach(() => {
      this.test = new Queue().enqueue(1).enqueue(2).enqueue(3);
    });
    
    describe('#enqueue(val)', () => {
      it('should create a queue', () => {
        expect(this.test).toBeInstanceOf(Queue);
      });
      it('should have inStack and outStack properties', () => {
        expect(this.test).toHaveProperty('inStack');
        expect(this.test).toHaveProperty('outStack');
      });
      it('should have size of 3 after calling enqueue 3 times', () => {
        expect(this.test.size).toEqual(3);
      });
      it('should have outstack with top node value of 3 and next node value of 2 ', () => {
        expect(this.test.inStack.top.val).toEqual(3);
        expect(this.test.inStack.top.next.val).toEqual(2);
      });
    });

    describe('#dequeue()', () => {
      it('should return an object', () => {
        expect(this.test.dequeue()).toBeInstanceOf(Object);
      });
      it('should return an object with value of 1', () => {
        expect(this.test.dequeue().val.val).toEqual(1);
      });
      it('should return an object with next of null', () => {
        expect(this.test.dequeue().val.next).toBeNull();
      });
    });
  });

  describe('invalid input/output', () => {
    beforeEach(() => {
      this.test = new Queue().enqueue(1).enqueue(2).enqueue(3);
    });

    describe('#enqueue', () => {
      it('should return error if not passed a value', () => {
        expect(this.test.enqueue()).toBeInstanceOf(Error);
      });
      it('should return error message explaining no value passed', () => {
        expect(this.test.enqueue().message).toMatch('no value to enqueue');
      });
    });

    describe('#dequeue', () => {
      it('should return error if nothing in queue', () => {
        this.test.dequeue();
        this.test.dequeue();
        this.test.dequeue();
        expect(this.test.dequeue()).toBeInstanceOf(Error);
      });
      it('should return error message explaining nothing in queue', () => {
        this.test.dequeue();
        this.test.dequeue();
        this.test.dequeue();
        expect(this.test.dequeue().message).toMatch('nothing to dequeue');
      });
    });
  });
});