'use strict';

module.exports = str => {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let score = [], winner = 0, winnerOut = '';
  let words = str.split(' ');
  for(let i = 0; i < words.length; i++) {
    score[i] = 0;
    for(let j = 0; j < words[i].length; j++) {
      score[i] += letters.indexOf(words[i][j]) + 1;
    }
  }
  for(let k = 0; k < words.length; k++) {
    if(score[k] > winner) {
      winner = score[k];
      winnerOut = words[k];
    }
  }
  return winnerOut;
};