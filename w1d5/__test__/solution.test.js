'use strict';

const solution = require('./solution');

describe('w1d5 whiteboarding', function () {
  it('should reuturn the middle index object ', function (done) {
    const sLL = {
      value: 25,
      next: {
        value: 01,
        next: {
          value: 15,
          next: {
            value: 33,
            next: {
              value: 04,
              next: null
            }}}}};
    expect(solution.middleNode(sLL)).toBe()
    done();
  });
});