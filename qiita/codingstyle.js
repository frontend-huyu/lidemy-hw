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
//   `A long string with the ${number}. /
// It's so long that we don't want it to take up space on the .map line!`
// ));
// // good
// [1, 2, 3].map((number) => (
//   `A long string with the ${number}. /
// It's so long that we don't want it to take up space on the .map line!`
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
// bad
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

// Variables
// 13.4
// // bad // unnecessary function call
// function checkName(hasName) {
//   const name = getName();

//   if (hasName === 'test') {
//     return false;
//   }
//   if (name === 'test') {
//     this.setName('');
//     return false;
//   }
//   return name;
// }

// // good
// function checkName(hasName) {
//   if (hasName === 'test') {
//     return false;
//   }

//   const name = getName();

//   if (name === 'test') {
//     this.setName('');
//     return false;
//   }
//   return name;
// }

// 13.5 no-multi-assign
// // bad // Chaining variable assignments create implicit global variable
// (function example() {
//   let a = b = c = 1;
// }());
// // console.log(a); // ReferenceError: a is not defined
// console.log(b); // 1
// console.log(c); // 1

// 13.6 no-plusplus
// // bad // unary increment(+)/decrement(-) statements can cause silent errors
// const array = [1, 2, 3];
// let num = 1;
// num++;
// --num;

// let sum = 0;
// let truthyCount = 0;
// for (let i = 0; i < array.length; i++) {
//   let value = array[i];
//   sum += value;
//   if (value) {
//     truthyCount++;
//   }
// }
// console.log(truthyCount, num) // 3 1

// // good
// const array = [1, 2, 3];
// let num = 1;
// num += 1;
// num -= 1;
// const sum = array.reduce((a, b) => a + b, 0);
// const truthyCount = array.filter(Boolean).length;
// console.log(truthyCount, num) // 3 1
// // note: silent error are errors do not trigger any kind of reporting.

// 13.7 max-len operator-linebreak
// // good
// const foo = (
//   superLongLongLongLongLongLongLongLongFunctionName()
// );
// // // good
// const foo = 'superLongLongLongLongLongLongLongLongString';

// Comparison Operators & Equality
// 15.3
// // bad
// if (name) { }
// // good // use explicit comparisons for string
// if (name !== '') { }
// // bad
// if (collection.length) { }
// // good // use explicit comparisons for number
// if (collection.length > 0) { }

// 15.5 no-case-declarations
// // bad
// switch (foo) {
//   case 1:
//     let x = 1;
//     break;
//   case 2:
//     const y = 2;
//     break;
// }

// // good // create block in case/default for lexical declarations
// switch(foo) {
//   case 1: {
//     let x = 1;
//     break;
//   }
//   case 2: {
//     const y = 2;
//     break;
//   }
//   case 3: {
//     function f() {
//       // ...
//     }
//   }
//   case 4:
//   bar();
//   break;
//   default: {
//     class C { }
//   }
// }

// Control Statements
// 17.1
// // good
// if (
//   foo === 123
//   && bar === 'abc'
// ) {
//   thing1();
// }
// // good
// if (
//   (foo === 123 || bar === 'abc')
//   && doesItLookGoodWhenItBecomesThatLong()
//   && isThisReallyHappening()
// ) {
//   thing1();
// }
// // good
// if (foo === 123 && bar === 'abc') {
//   thing1();
// }

// Comments
// 18.1
// // good
// /**
//  * make() returns a new element
//  * based on the passed-in tag name
//  */
// function make(tag) {
//   // ...
//   return element;
// }

// 18.5 // ues // FIXME: to annotate problems
// class Calculator extends Abacus {
//   constructor() {
//     super();

//     // FIXME: shouldn't use a global here
//     total = 0;
//   }
// }

// // 18.6 // use // TODO: to annotate solutions to problems
// class Calculator extends Abacus {
//   super();

//   // TODO: total should be configurable by an options param
//   this.total = 0;
// }

// Whitespace
// 19.7
// // bad
// const obj = {
//   foo() {
//   },
//   bar() {
//   },
// };
// // good
// const obj = {
//   foo() {
//   },

//   bar() {
//   },
// };

// // bad
// const arr = [
//   function foo() {
//   },
//   function bar() {
//   },
// ];
// // good
// const arr = [
//   function foo() {
//   },

//   function bar() {
//   },
// ];

// Type Casting & Coercion
// 22.2 no-new-wrappers
// let reviewScore = 9;
// // bad
// const totalScore = new String(reviewScore);
// console.log(typeof totalScore); // object
// // bad
// const totalScore = reviewScore + ''; // invokes reviewScore.valueOf()
// console.log(reviewScore.valueOf()); // 9
// // bad
// const totalScore = reviewScore.toString(); // is not guaranteed to return a string
// console.log(typeof totalScore); // string
// // good
// const totalScore = String(reviewScore);

// 22.3 radix no-new-wrappers
// let inputValue = '4';
// // good
// const val = Number(inputValue);
// // good
// const val = parseInt(inputValue, 10);

// 22.4
// let inputValue = '4';
// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
// const val = inputValue >> 0;

// 22.5
/** note: Be careful when using bitshift operations.
 * Numbers are represented as 64-bit values,
 * but bitshift operations always return a 32-bit integer.
 * Bitshift can lead to unexpected behavior for
 * integer values larger than 32 bit.
 * Largest signed 32-bit Int is 2,147,483,647
*/
// console.log(2147483647 >> 0); // 2147483647
// console.log(2147483648 >> 0); // -2147483648
// console.log(2147483649 >> 0); // -2147483647

// 22.6 no-new-wrappers
// const age = 0;
// // bad
// const hasAge = new Boolean(age);
// // good
// const hasAge = Boolean(age);
// // best
// const hasAge = !!age;

// Naming Conventions
// 23.4 no-underscore-dangle
// // good
// this.firstName = 'Panda';
// // good, in environments where WeakMaps are available
// // see https://kangax.github.io/compat-table/es6/#test-WeakMap
// const firstNames = new WeakMap();
// firstNames.set(this, 'Panda');

// 23.5
// don't save references to 'this'. Use arrow functions or bind()
// // bad
// function foo() {
//   const self = this;
//   return function () {
//     console.log(self);
//   };
// }

// // good
// function foo() {
//   return () => {
//     console.log(this);
//   };
// }

// 23.8
// Use PascalCase when you export a constructor/class/singleton/function library/ bare object.
// Singleton: a function or class which can have only one instance.
// Bare object: objects created using null as the prototype value.

// Accessors
// 24.2
/**
 * Do not use JavaScript getters/setters as
 * they cause unexpected side effects and harder to
 * test, maintain, and reason about.
*/
// // bad
// class Dragon {
//   get age() {
//     // ...
//   }

//   set age(value) {
//     // ...
//   }
// }
// // good
// class Dragon {
//   getAge() {
//     // ...
//   }

//   setAge(value) {
//     // ...
//   }
// }

// 24.3
// If the property/method is a boolean, use isVal() or hasVal()
// bad
// if (!dragon.age()) {
//   return false;
// }
// // good
// if (!dragon.hasAge()) {
//   return false;
// }
