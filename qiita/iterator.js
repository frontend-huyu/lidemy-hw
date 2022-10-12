// iterable
// // function makeIterator(arr) {
// //   let nextIndex = 0;
// //   return {
// //     next() {
// //       return nextIndex < arr.length ?
// //         { value: arr[nextIndex++], done: false } :
// //         { value: undefined, done: true };
// //     }
// //   };
// // }
// function makeIterator(arr) {
//   let nextIndex = 0;
//   return {
//     next() {
//       return nextIndex < arr.length ?
//         { value: arr[nextIndex++] } :
//         { done: true };
//     }
//   }
// }

// let test = makeIterator(['a', 'b']);
// console.log(test.next()); // { value: 'a', done: false }
// console.log(test.next()); // { value: 'b', done: false }
// console.log(test.next()); // { value: undefined, done: true }
//
// function idMaker() {
//   let index = 0;
//   return {
//     next() {
//       return { value: index++, done: false };
//     }
//   };
// }

// let test = idMaker()
// console.log(test.next()); // { value: 0, done: false }
// console.log(test.next()); // { value: 1, done: false }
// console.log(test.next()); // { value: 2, done: false }

//
// const obj = {
//   [Symbol.iterator]: function () {
//     let index = 0;
//     return {
//       next: function () {
//         return {
//           value: index++
//         };
//       }
//     };
//   }
// };
// let objIterator = obj[Symbol.iterator]()
// console.log(objIterator.next()); // { value: 0 }
// console.log(objIterator.next()); // { value: 1 }

// let arr = ['a', 'b', 'c'];
// let arrIterator = arr[Symbol.iterator]();
// console.log(arrIterator.next()); // { value: 'a', done: false }
// console.log(arrIterator.next()); // { value: 'b', done: false }
// let str = '123';
// let strIterator = str[Symbol.iterator]();
// console.log(strIterator.next()); // { value: '1', done: false }
// console.log(strIterator.next()); // { value: '2', done: false }

// arguments
// function printArgs() {
//   console.log(arguments);
//   for (let item of arguments) {
//     console.log(item);
//   }
// }
// printArgs('a', 'b');
// // [Arguments] { '0': 'a', '1': 'b' }
// // a
// // b
//
// array-like
// let notNodeList = {
//   0: 'div.container',
//   1: 'div.card__container',
//   2: 'div.card__img',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// console.log(notNodeList[Symbol.iterator]());
// // Object [Array Iterator] {}
// console.log(notNodeList[Symbol.iterator]().next());
// // { value: 'div.container', done: false }
// console.log([...notNodeList]);
// // [ 'div.container', 'div.card__container', 'div.card__img' ]
// for (let element of notNodeList) {
//   console.log(element);
// }
// // div.container
// // div.card__container
// // div.card__img
// //
// let arr = ['div.container', 'div.card__container', 'div.card__img'];
// let arrayLikeObj = {
//   ...arr
// };
// console.log(arrayLikeObj);
// // {
// //   '0': 'div.container',
// //   '1': 'div.card__container',
// //   '2': 'div.card__img'
// // }

// unordered object
// let obj = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of obj) {
//   console.log(item);
// }
// // undefined
// // undefined
// // undefined
//
// let obj = {
//   from: 0,
//   to: 3,
//   *[Symbol.iterator]() {
//     for (let i = this.from; i < this.to; i++) {
//       yield String.fromCodePoint(97 + i)
//     }
//   }
// };
// for (let item of obj[Symbol.iterator]()) {
//   console.log(item);
// }
// // a
// // b
// // c

// class
// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }
//   [Symbol.iterator]() {
//     return this;
//   }
//   next() {
//     let value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return { done: false, value: value };
//     }
//     return { done: true, value: undefined };
//   }
// }

// console.log(Object.getOwnPropertyNames(RangeIterator.prototype));
// // [ 'constructor', 'next' ]

// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }

// for (let value of range(0, 3)) {
//   console.log(value);
// }
// // 0
// // 1
// // 2


// let obj = {
//   data: ['hello', 'world'],
//   [Symbol.iterator]() {
//     const self = this;
//     let index = 0;
//     return {
//       next() {
//         if (index < self.data.length) {
//           return {
//             value: self.data[index++],
//             done: false
//           };
//         }
//         return { value: undefined, done: true };
//       }
//     };
//   }
// };

// for (let item of obj) {
//   console.log(item);
// };
// // hello
// // world

// let iterable = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 4,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//   console.log(item);
// }
// // a
// // b
// // c
// // undefined

// let arr = [...iterable];
// console.log(arr); // [ 'a', 'b', 'c', undefined ]

// let generator = function* () {
//   yield 1;
//   yield* [...iterable];
//   yield 5;
// };
// // let test = generator();
// // console.log([...test]); // [ 1, 'a', 'b', 'c', undefined, 5 ]

// // Destructuring assignment & Spread syntax
// let set = new Set(['a', 'b', 'c']);
// for (let item of set) {
//   console.log(item);
// };
// // a
// // b
// // c
// let arr = [...set]; // Spread syntax
// console.log(arr); // [ 'a', 'b', 'c' ]
// let [first, ...rest] = set; // Destructuring assignment
// console.log(first, rest); // a [ 'b', 'c' ]
//
// let str = 'Apple';
// console.log(...str); // A p p l e
// console.log([...str]); // [ 'A', 'p', 'p', 'l', 'e' ]

// let arr = ['Banana', 'Lemon']
// console.log(['a', ...arr, 'Peach']); // [ 'a', 'Banana', 'Lemon', 'Peach' ]

// Generator & yield*
// function* generator() {
//   yield 1;
//   yield* [2, 3, 4];
//   yield 5
// }
// let iterator = generator();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// //
// let callGenerator = function* () {
//   yield* generator()
// };
// let test = callGenerator()
// console.log(test.next()); // { value: 1, done: false }
// console.log(test.next()); // { value: 1, done: false }
// console.log(test.next()); // { value: 3, done: false }

// // for...of
// for (let item of test) {
//   console.log(item);
// }
// // 1
// // 2
// // 3
// // 4
// // 5

// Array.from()
// let arrayLikeObj = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3 // required
// };
// let arr = Array.from(arrayLikeObj);
// console.log(arr); // [ 'a', 'b', 'c' ]

// Map()
// let map = new Map([
//   [0, 'a'],
//   [1, 'b'],
//   [2, 'c']
// ]);
// console.log(...map); // [ 0, 'a' ] [ 1, 'b' ] [ 2, 'c' ]
// for (let [key, value] of map.entries()) {
//   console.log(`key: ${key}, value: ${value}`);
// }
// // key: 0, value: a
// // key: 1, value: b
// // key: 2, value: c
// console.log(map[Symbol.iterator] === map.entries); // true

// // Promise.all() & Promise.race()
// let promise1 = Promise.resolve(3);
// let promise2 = 42;
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo');
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // [ 3, 42, 'foo' ]

// // for...of
// // Array
// let arr = ['Apple', 'Banana', 'Lemon'];
// for (let item of arr) {
//   console.log(item);
// }
// // Apple
// // Banana
// // Lemon
// //
// let obj = {};
// obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);
// // obj[Symbol.iterator] = Array.prototype[Symbol.iterator].bind(arr);
// for (let item of obj) {
//   console.log(item);
// }
// // Apple
// // Banana
// // Lemon

// // extract index without using for...in
// console.log(Object.entries(obj)); // []
// // note: obj is still empty, we just bought iterator method and data from arr
// for (let [index, value] of [...obj].entries()) {
//   console.log(`index: ${index}, value: ${value}`);
// }
// // index: 0, value: Apple
// // index: 1, value: Banana
// // index: 2, value: Lemon

// if property name wasn't number in order, property will be skipped
// let arrayLikeObj = {
//   2: 'a',
//   0: 'b',
//   1: 'c',
//   foo: 'foo',
//   a: 'a',
//   length: 5,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of arrayLikeObj) {
//   console.log(item);
// }
// // b
// // c
// // a
// // undefined
// // undefined
//
// let obj = {
//   2: 'a',
//   0: 'b',
//   1: 'c',
//   foo: 'foo',
//   a: 'a',
//   length: 5,
// }
// for (let item of Object.keys(obj)) {
//   console.log(item);
// }
// // 0
// // 1
// // 2
// // foo
// // a
// // length
// for (let item of Object.values(obj)) {
//   console.log(item);
// }
// // b
// // c
// // a
// // foo
// // a
// // 5

// Practices
// let obj = {
//   data: ['Apple', 'Banana', 'Lemon', 'Peach'],
//   *[Symbol.iterator]() {
//     for (let i = 0; i < this.data.length; i++) {
//       yield [i, this.data[i]]
//     }
//   }
// };
// for (let [index, value] of obj) {
//   if (index > 2) break
//   console.log(value);
// }
// // Apple
// // Banana
// // Lemon
// //
// let obj = {
//   a: 'Apple',
//   b: 'Banana',
//   c: 'Lemon',
//   d: 'Peach',
//   *[Symbol.iterator]() {
//     for (let i = 0; i < 26; i++) {
//       yield [i, this[String.fromCodePoint(97 + i)]]
//     }
//   }
// };
// for (let [index, value] of obj) {
//   if (index > 2) break
//   console.log(value);
// }
// // Apple
// // Banana
// // Lemon

//



