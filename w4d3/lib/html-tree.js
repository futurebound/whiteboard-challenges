'use strict';


const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });


module.exports = function(filepath) {
  let tree = new Tree();

  fs.readFileProm(`${__dirname}/../assets/minimal.html`)
    .then(fileData => fileData.toString().replace(/\s+/g, ''))
    .then(fileStr => fileStr.split('>'))
    .then(validHTML)
    .then(eleArray => buildTree(tree, eleArray))
    .then(tree => console.log(tree.toString()))
    .catch(console.error);
};

function validHTML(stringArray) {
  if(!stringArray[0].match(/!DOCTYPEhtml/)) {
    return Promise.reject(new Error('file must be valid HTML doc'));
  }
}

function isOpeningTag(str) {
  if(!str) return;
  if(str.charAt(1) === '/') return false;
  return true; 
}

function getTagName(ele) {
  if(!ele) return;
  return isOpeningTag(ele) ? ele.replace('<', '') : ele.replace('</', '');
}

function buildTree(tree, elements) {
  let stack = [];
  elements.forEach(ele => {
    if(isOpeningTag(ele)) {
      let val = getTagName(ele);
      let parent = getTagName(stack[stack.length -1]);
      tree.add(val, parent);
      stack.push(ele);
    } else {
      stack.pop();
    }
  });
  return tree;
}








fs.readFileProm(`${__dirname}/../assets/minimal.html`)
  .then(buffer => buffer.toString()) //stringifies data stream
  .then(doc => doc.split('>'))
  .then(lines => lines.map(i => i.trim())) //gets rid of whitespace
  .then(lines => lines.map(i => i.split('<').join('>'))) //gets rid of '' in ['', 'asdfasdf'] 
  // .then(lines => lines.map(i => i.split('<').join(''))) //gets rid of '' in ['', 'asdfasdf'] 
  .then(lines => lines.map(i => i.split('/')))
  .then(lines => lines.map(i => i.filter(j => j.length > 0))) //removes all the '' 
  .then(lines => lines.map(i => i[0]))
  .then(lines => {
    let spliced = lines;
    spliced.splice(0, 1);
    spliced.splice(-1, 1);
    return spliced;
  })
  .then(lines => lines.map(i => i.split('span').join('')))
  .then(lines => lines.filter(i => i !== '>'))
  // .then(lines => lines.map(i => {
  //   if(i.startsWith('>') && i.length > 1) {
  //     asdf;
  //   }
  // }))
  .then(console.log);