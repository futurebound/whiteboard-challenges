'use strict';

const index = require('../lib/index');

describe('index', function() {
  it('should return array with duplicates with valid data entry', function(done) {
    const first = ['ajax', 'bunny', 'berenger', 'carrot'];
    const second = ['apple', 'bunny', 'bundy', 'carrot', 'kiwi', 'red'];
    expect(index.intersect(first, second)).toEqual(['bunny', 'carrot']);
    done();
  });

  it('should return array with duplicates with valid data entry, without multiple entries if data set contains multiple instances', function(done) {
    const first = ['ajax', 'bunny', 'bunny', 'bunny', 'berenger', 'carrot', 'carrot'];
    const second = ['apple', 'bunny', 'bundy', 'carrot', 'kiwi', 'red'];
    expect(index.intersect(first, second)).toEqual(['bunny', 'carrot']);
    done();
  });

  it('should return a data entry error with either array being empty', function(done) {
    const first = ['ajax', 'bunny', 'berenger', 'carrot'];
    const second = [];
    expect(index.intersect(first, second)).toEqual('DATA ENTRY ERROR');
    done();
  });
});