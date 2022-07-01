// reference: https://exploringjs.com/deep-js/ch_shared-mutable-state.html#avoiding-mutations-by-updating-non-destructively

// function logElements(arr) {
//   while (arr.length > 0) {
//     console.log(arr.shift());
//     // console.log(arr)
//   }
// }

// function main() {
//   const arr = ['banana', 'orange', 'apple'];

//   console.log('Before sorting:');
//   logElements(arr);

//   arr.sort(); // changes arr

//   console.log('After sorting:');
//   logElements(arr); // (A)
// }
// main();

//
function logElements(arr) {
  arr = [...arr]; // defensive copy
  while (arr.length > 0) {
    console.log(arr.shift());
  }
}

function main() {
  const arr = ['banana', 'orange', 'apple'];

  console.log('Before sorting:');
  logElements(arr);

  arr.sort(); // changes arr

  console.log('After sorting:');
  logElements(arr); // (A)
}
main();

//
const assert = require('assert')

// class StringBuilder {
//   _data = []
//   add(str) {
//     this._data.push(str)
//   }
//   getParts() {
//     // We expose internals without copying them:
//     return this._data
//   }
//   toString() {
//     return this._data.join('')
//   }
// }
//As long as .getParts() isn’t used, everything works well:
// const sb1 = new StringBuilder()
// sb1.add('Hello')
// sb1.add(' world!')
// assert.equal(sb1.toString(), 'Hello world!')
// console.log(sb1.toString() === 'Hello world!') // true

// //
// const sb2 = new StringBuilder()
// sb2.add('Hello')
// sb2.add(' world!')
// sb2.getParts().length = 0
// assert.equal(sb2.toString(), '')
// console.log(sb2.toString() === '') // true // but not OK

// const arr = [1, 2]
// console.log(arr.length)
// arr.length = 0
// console.log(arr, arr.length) // [] 0


// copy the internal ._data defensively before it is exposed
class StringBuilder {
  _data = []
  add(str) {
    this._data.push(str)
  }
  getParts() {
    // copy defensively
    return [...this._data]
  }
  toString() {
    return this._data.join('')
  }
}

const sb = new StringBuilder()
sb.add('Hello')
sb.add(' world!')
sb.getParts().length = 0
assert.equal(sb.toString(), 'Hello world!') // OK