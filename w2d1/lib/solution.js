'use strict';

const solution = module.exports = {};

solution.loop = function (count, callback) {
  if (typeof count !== 'number' || count < 0) return null;

  if (count === 0) return undefined;

  count--;
  solution.loop(count, callback);
};