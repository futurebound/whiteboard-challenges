'use strict';

module.exports = (base, exponent) => {
  if(!base || !exponent) return new Error('Please pass two integers, a base and an exponent.');
  if(!Number.isInteger(base) || !Number.isInteger(exponent)) return new Error('Please pass two integers, a base and an exponent.');
  return `${base ** exponent}`.split('').reduce((a, b) => ~~a + ~~b);
};