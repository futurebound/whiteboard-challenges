'use strict';

const solution = require('../lib/solution');

describe('solution.js', function() {
  it('should return undefined with correct input', function(done) {
    expect(solution.loop(8, solution.loop())).toBe(undefined);
    done();
  });

  it('should return null with negative numerical input', function(done) {
    expect(solution.loop(-1, solution.loop())).toBe(null);
    done();
  });

  it('should return null with non-integer count input', function(done) {
    expect(solution.loop('three', solution.loop())).toBe(null);
    done();
  });
});