// Object
// 3.7 no-prototype-builtins
// let obj = {
//   name: 'Mick',
//   hasOwnProperty: false
// }
// // bad // the object may be an { hasOwnProperty: false } or null object(Object.create(null))
// console.log(obj.hasOwnProperty('name')) // TypeError: obj.hasOwnProperty is not a function
// // good
// console.log(Object.prototype.hasOwnProperty.call(obj, 'name')) // true
// best // cache the lookup once
// const has = Object.prototype.hasOwnProperty


// 3.8 prefer-object-spread
// very bad // mutate `original`
// const original = { a: 1, b: 2 }
// let copy = Object.assign(original, { c: 3 })
// console.log(original) // { a: 1, b: 2, c: 3 }
// // bad
// let copy = Object.assign({}, original, { c: 3 })
// console.log(original) // { a: 1, b: 2 }
// // good
// const copy = { ...original, c: 3 }
// const { a, ...rest } = copy
// console.log(original) // { a: 1, b: 2 }
// console.log(copy) // { a: 1, b: 2, c: 3 }


// Array
// 4.5
// const arrLike = { length: 3, 0: 'foo', 1: 'bar', 2: 'baz' }
// // bad
// // const arr = Array.prototype.slice.call(arrLike)
// // good
// const arr = Array.from(arrLike)
// console.log(arr) // [ 'foo', 'bar', 'baz' ]

// 4.6
// // bad
// const baz = [...foo].map(bar)
// // good // avoid creating an intermediate array
// const baz = Array.from(foo, bar)
// Array.from(arrayLike[, mapFn[, thisArg]])

// destructuring
// 5.1 prefer-destructuring
// bad
// function getFullName(user) {
//   const firstName = user.firstName
//   const lastName = user.lastName
//   return `${firstName} ${lastName}`
// }
// // good
// function getFullName({ firstName, lastName }) {
//   return `${firstName} ${lastName}`
// }

// 5.2 prefer-destructuring
// const arr = [1, 2, 3, 4]
// // bad
// const first = arr[0]
// const second = arr[1]
// // good
// const [first, second] = arr

// 5.3
// // bad
// function processInput(input) {
//   return [left, right, top, bottom]
// }
// // the caller needs to think about the order of return data
// const [left, __, top] = processInput(input)

// // good
// const obj = {
//   bottom: 'bottom',
//   top: 'top',
//   right: 1,
//   left: 2
// }

// function processInput(input) {
//   let { left, right, top, bottom } = input
//   return { left, right, top, bottom }
// }
// const { left, top } = processInput(obj)
// console.log(left, top) // 2 top

// Functions
// 7.7
// really bad // we shouldn't mutate function arguments
// function handleThings(opts) {
//   opts = opts || {}
// }
// // good
// function handleThings(opts = {}) {
// }

// 7.8
// // bad // can cause side effects
// let b = 1
// function count(a = b++) {
//   console.log(a)
// }
// count() // 1
// count() // 2
// count(3) // 3 // override b++ = 4?
// count() // 3
// count() // 4

// 7.9 default-param-last
// // bad // it is similar to eval()
// function handleThings(opts = {}, name) {
// }
// // good
// function handleThings(name, opts = {}) {
// }

// 7.10 no-new-func
// // bad
// let add = new Function('a', 'b', 'return a + b')
// // still bad
// let subtract = Function('a', 'b', 'return a - b')

// 7.12 no-param-reassign
// // bad // can cause unwanted variable side effects
// function f1(obj) {
//   obj.key = 1;
// }
// // good
// function f2(obj) {
//   const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
// }

// 7.13 no-param=reassign
// // bad // never reassign parameters
// function f1(a) {
//   a = 1;
// }
// function f2(a) {
//   if (!a) {
//     a = 1;
//   }
// }
// // good
// function f3(a) {
//   const b = a || 1;
// }
// function f4(a = 1) {
// }

// 7.14 prefer-spread
// // bad
// const x = [1, 2, 3, 4, 5];
// console.log.apply(console, x);
// // good
// console.log(...x);

// // bad
// new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));
// // good
// new Date(...[2016, 8, 5]);

// Arrow Functions
// 8.2 arrow-parens arrow-body-style
// // bad // it is not a single statement => return undefined
// [1, 2, 3].map((number) => {
//   const nextNumber = number + 1;
//   `A string containing the ${nextNumber}.`;
// });
// // good
// [1, 2, 3].map((number) => `A string containing the ${number + 1}`);
// // good
// [1, 2, 3].map((number) => {
//   const nextNumber = number + 1;
//   return `A string containing the ${nextNumber}`;
// });
// // good // return (something)
// let a = [1, 2, 3].map((number, index) => ({
//   [index]: number,
// }));
// console.log(a) // [ { '0': 1 }, { '1': 2 }, { '2': 3 } ]
// // note: arr.map(function callback( currentValue[, index[, array]])

// // ?? no implicit return with side effects
// function foo(callback) {
//   const value = callback();
//   if (value === true) {
//     // do something
//   }
// }
// let bool = false;
// // bad
// foo(() => bool = true);
// // good
// foo(() => {
//   bool = true;
// });
// // note: don't understand the connection

// 8.3
// // bad
// ['get', 'post', 'put'].map((httpMethod) => Object.prototype.hasOwnProperty.call(
//   httpMagicObjectWithAVeryLongName,
//   httpMethod
// ));
// // good
// ['get', 'post', 'put'].map((httpMethod) => (
//   Object.prototype.hasOwnProperty.call(
//     httpMagicObjectWithAVeryLongName,
//     httpMethod,
//   )
// ));

// 8.4 arrow-parens
// // bad
// [1, 2, 3].map(x => x * x);
// // good
// [1, 2, 3].map((x) => x * x);

// // bad
// [1, 2, 3].map(number => (
//   `A long string with the ${number}. It's so long that we don't want it to take up space on the .map line!`
// ));
// // good
// [1, 2, 3].map((number) => (
//   `A long string with the ${number}. It's so long that we don't want it to take up space on the .map line!`
// ))

// // bad
// [1, 2, 3].map(x => {
//   const y = x + 1;
//   return x * y;
// })
// // good
// [1, 2, 3].map((x) => {
//   const y = x + 1;
//   return x * y;
// })

// 8.5 no-confusing-arrow
// // bad
// const itemHeight = (item) => item.height <= 256 ? item.largeSize : item.smallSize;
// // bad
// const itemHeight = (item) => item.height >= 256 ? item.largeSize : item.smallSize;
// // good // use ()
// const itemHeight = (item) => (item.height <= 256 ? item.largeSize : item.smallSize);
// // good // use {}, destructuring
// const itemHeight = (item) => {
//   const { height, largeSize, smallSize } = item;
//   return height <= 256 ? largeSize : smallSize;
// };

// Classes & Constructors
// 9.1 // Always use class. Avoid manipulating prototype directly
// // bad
// function Queue(contents = []) {
//   this.queue = [...contents];
// }
// Queue.prototype.pop = function () {
//   const value = this.queue[0];
//   this.queue.splice(0, 1);
//   return value;
// }

// // good
// class Queue {
//   constructor(contents = []) {
//     this.queue = [...contents];
//   }
//   pop() {
//     const value = this.queue[0];
//     this.queue.splice(0, 1);
//     return value
//   }
// }

// 9.3 // Methods can return 'this' to help with method chaining
// // bad
// function Jedi() { }

// Jedi.prototype.jump = function () {
//   this.jumping = true;
//   return true;
// };

// Jedi.prototype.setHeight = function (height) {
//   this.height = height;
//   // return this.height = height;
// };

// const luke = new Jedi();
// console.log(luke.jump()); // true
// console.log(luke.setHeight(20)); // undefined

// // good
// class Jedi {
//   jump() {
//     this.jumping = true;
//     return this;
//   }

//   setHeight(height) {
//     this.height = height;
//     return this;
//   }
// }

// const luke = new Jedi();
// console.log(luke) // Jedi {}
// console.log(luke.jump().setHeight(20)) // Jedi { jumping: true, height: 20 }
// // note: set property & value by method chaining

// 9.4 // custom toString() method
// class Jedi {
//   constructor(options = {}) {
//     this.name = options.name || 'no name';
//   }

//   getName() {
//     return this.name;
//   }

//   toString() {
//     return `Jedi - ${this.getName()}`;
//   }
// }

// let mick = new Jedi({ name: 'Mick' });
// console.log(mick.toString()) // Jedi - Mick

// 9.5 no-useless-constructor
// // bad
// class Jedi {
//   constructor() { }

//   getName() {
//     return this.name;
//   }
// }
// // bad
// class Rey extends Jedi {
//   constructor(...args) {
//     super(...args);
//   }
// }

// // good // arranged
// class Jedi {
//   constructor(...args) {
//     this.alias = args[0];
//     this.age = args[1];
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Rey extends Jedi {
//   constructor(...args) {
//     super(...args);
//     this.name = 'Rey';
//   }
// }

// let rey = new Rey('hifumi', 20);
// let jedi = new Jedi();
// console.log(rey) // Rey { alias: 'hifumi', age: 20, name: 'Rey' }
// // console.log(Object.getOwnPropertyNames(rey)) // [ 'alias', 'age', 'name' ]
// // console.log(Object.getOwnPropertyNames(jedi)) // [ 'alias', 'age' ]

// 9.7  class-methods-use-this
// // bad
// class Foo {
//   bar() {
//     console.log('bar');
//   }
// }
// // good - 'this' is used
// class Foo {
//   bar() {
//     console.log(this.bar);
//   }
// }
// // good - constructor is exempt
// class Foo {
//   constructor() {
//     this.bar = () => console.log('bar')
//   }
// }
// let foo = new Foo()
// console.log(foo) // Foo { bar: [Function (anonymous)] }
// // good -static methods are not expected to use 'this'
// class Foo {
//   static bar() {
//     console.log('bar');
//   }
// }

// let foo = new Foo()
// // foo.bar() // TypeError: foo.bar is not a function
// console.log(foo) // Foo {}

// class Test extends Foo { }
// Test.bar() // bar
// console.log(Test) // [class Test extends Foo]
// console.log(Object.getPrototypeOf(Test) === Foo) // true

// let test = new Test()
// // test.bar() // TypeError: test.bar is not a function

// let bar = Foo.bar
// bar() // bar

// Modules
// 10.3
// // bad filename: es6.js
// export { es6 as default } from './AirbnbStyleGuide';
// // good
// import { es6 } from '.AirbnbStyleGuide';
// export default es6;

// 10.4 no-duplicate-imports
// // bad
// import foo from 'foo';
//   // ...
// import { named1, named2 } from 'foo';
// // good
// import foo, { named1, named2 } from 'foo';
// // good
// import foo, {
//   named1,
//   named2,
// } from 'foo';

// 10.5 // import/no-mutable-exports // avoid mutable bindings
// // bad
// let foo = 3; // avoid let/var...
// export { foo };
// // good
// const foo = 3;
// export { foo };

// 10.6 // import/prefer-default-export // prefer default export when a single export
// // bad
// export function foo() { };
// // good
// export default function foo() { };

// 10.8 object-curly-newline // curly braces: {}
// // bad
// import { longNameA, longNameB, loneNameC } from 'path';
// // good
// import {
//   longNameA,
//   longNameB,
//   loneNameC,
// } from 'path';

// 10.9 // import/no-webpack-loader-syntax // avoid coupling a module bundler directly
// // bad
// import fooSass from 'css!sass!foo.scss';
// import barCss from 'style!css!bar.css';

// // good
// import fooSass from 'foo.scss';
// import barCss from 'bar.css';

// 10.10 // import/extensions // avoid inappropriately hardcodes implementation
// // bad
// import foo from './foo.js';
// import bar from './bar.jsx';
// import baz from './baz/index.jsx';

// // good
// import foo from './foo';
// import bar from './bar';
// import baz from './baz';

// Iterators and Generators
// 11.1 no-iterator no-restricted-syntax
// array: map()/every()/filter()/find()/findIndex()/reduce()/some()
// object: Object.keys()/Object.values()/Object.entries() => array
// const numbers = [1, 2, 3, 4, 5];
// // bad
// let sum = 0;
// for (let num of numbers) {
//   sum += num;
// }
// sum === 15;
// // good
// let sum = 0;
// numbers.forEach((num) => {
//   sum += num;
// })
// sum === 15;
// // best // functional force
// const sum = numbers.reduce((total, num) => total + num, 0)
// sum === 15;

// // bad
// const increaseByOne = [];
// for (let i = 0; i < numbers.length; i++) {
//   increaseByOne.push(numbers[i] + 1);
// }
// // good
// const increaseByOne = [];
// numbers.forEach((num) => {
//   increaseByOne.push(num + 1);
// })
// // best
// const increaseByOne = numbers.map((num) => num + 1);
