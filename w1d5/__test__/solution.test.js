'use strict';

const solution = require('../lib/solution');

describe('w1d5 whiteboarding', function () {
  it('should reuturn the middle index object ', function (done) {
    const sLL = {
      value: 25,
      next: {
        value: 1,
        next: {
          value: 15,
          next: {
            value: 33,
            next: {
              value: 4,
              next: null
            }}}}};
    expect(solution.middleNode(sLL)).toEqual([15, { value: 33, next: { value: 4, next: null } }])
    done();
  });
});