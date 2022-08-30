// const arr = [...Array(5000).keys()];

// // for
// console.time('for');
// for (let i = 0; i < arr.length; i++) {
// }
// console.timeEnd('for');

// // for...of
// console.time('for...of');
// for (let value of arr) {
// }
// console.timeEnd('for...of');

// // forEach loop
// console.time('forEach');
// arr.forEach((value) => {
// });
// console.timeEnd('forEach');

// // for: 0.212ms
// // for...of: 0.178ms
// // forEach: 0.078ms

// // forEach > for...of > for

// // map
// console.time('map');
// arr.map((x) => x);
// console.timeEnd('map');

// // filter
// console.time('filter');
// arr.filter((x) => x);
// console.timeEnd('filter');

// // reduce
// console.time('reduce');
// arr.reduce((x, y) => x + y);
// console.timeEnd('reduce');

// // map: 0.154ms
// // filter: 0.141ms
// // reduce: 0.101ms

// const arr = [...Array(5000).keys()];
// map
// console.time('map');
// arr.map((x) => String(x));
// console.timeEnd('map');

// console.time('map vs. for');
// let newArr1 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr1.push(String(arr[i]));
// }
// console.timeEnd('map vs. for');

// console.time('map vs. forEach');
// arr.forEach((x) => String(x));
// console.timeEnd('map vs. forEach');

// map: 0.175048828125 ms
// map vs. for: 0.406982421875 ms
// map vs. forEach: 0.137939453125 ms

// filter
// console.time('filter');
// arr.filter((x) => (x >= 0));
// console.timeEnd('filter');

// console.time('filter vs. for');
// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     newArr2.push(arr[i]);
//   }
// }
// console.timeEnd('filter vs. for');

// console.time('filter vs. forEach');
// arr.forEach((x) => (filter >= 0));
// console.timeEnd('map vs. forEach');

// filter: 0.1337890625 ms
// filter vs. for: 0.42578125 ms
// filter vs. forEach: 0.08984375 ms

// reduce
// let total = 0;
// console.time('reduce');
// arr.reduce((x, y) => (x + y));
// console.timeEnd('reduce');

// console.time('reduce vs. for');
// for (let i = 0; i < arr.length; i++) {
//   total += arr[i];
// }
// console.timeEnd('reduce vs. for');

// console.time('reduce vs. forEach');
// arr.forEach((x) => (total += x));
// console.timeEnd('reduce vs. forEach');

// reduce: 0.0908203125 ms
// reduce vs. for: 0.21484375 ms
// reduce vs. forEach: 0.158935546875 ms

// // for...in
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// let arr = [4, 5, 6];

// for (let key in obj) {
//   console.log(key);
// };
// // a
// // b
// // c

// for (let index in arr) {
//   console.log(index);
// };
// // 0
// // 1
// // 2

// // for...of
// for (let value of arr) {
//   console.log(value);
// };
// // 4
// // 5
// // 6

// for (let value of obj) {
//   console.log(value);
// };
// // TypeError: obj is not iterable

// // iterable object
// let obj1 = {
//   from: 1,
//   to: 5,
//   *[Symbol.iterator]() {
//     for (let i = this.from; i <= this.to; i++) {
//       yield i;
//     };
//   },
// };

// for (let value of obj1) {
//   console.log(value);
// };
// // 1
// // 2
// // 3 ...

// let arr = [];
// arr[2] = 2;
// for (let index in arr) {
//   console.log(index)
// };
// // 2
// for (let value of arr) {
//   console.log(value)
// };
// // undefined
// // undefined
// // 2

// arr = [, , ,];
// // it doesn't work
// for (let index in arr) {
//   console.log(index)
// };
// for (let value of arr) {
//   console.log(value)
// };
// // undefined x 3

// Array.prototype.foo = 1;
// let arr = [1, 2];
// // for (let prop in arr) {
// //   console.log(prop)
// // };
// // 0
// // 1
// // foo

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// Object.prototype.newProp = 'I am new property.';
// // for (let prop in arr) {
// //   console.log(prop);
// // };
// // 0
// // 1
// // foo
// // newProp

// function getName(name) {
//   this.name = name;
// }
// let test = new getName('Mick');
// // for (let prop in test) {
// //   console.log(prop)
// // }
// // name
// // newProp

// for (let prop in test) {
//   if (Object.prototype.hasOwnProperty.call(test, prop)) {
//     console.log(prop);
//   };
// };
// // name

// function Person(name) {
//   if (!new.target) {
//     return new Person(name)
//   }

//   this.name = name;
// }
// let mick = Person('Mick');
// console.log(mick); // Person { name: 'Mick' }

// const Singleton = function () {
//   if (typeof Singleton.cache === 'object') return Singleton.cache;

//   // in first time, set property 'cache' in Singleton
//   this.p = 'public';
//   Singleton.cache = this;
// }
// let obj1 = new Singleton();
// let obj2 = new Singleton();
// console.log(obj1 === obj2); // true

// const Singleton = function () {
//   // when we create instance return the value
//   if (typeof Singleton.cache === 'object') return Singleton.cache;

//   // set property 'cache' in first invocation
//   this.p = 'public';
//   Singleton.cache = this;
// };

// let obj1 = new Singleton();
// let obj2 = new Singleton();
// console.log(obj1 === obj2); // true

// Singleton.cache = 'Reference changed';
// console.log(Singleton.cache);

// const Singleton = function () {
//   let cache;
//   return function () {
//     if (typeof cache === 'object') return cache;

//     this.p = 'public';
//     cache = this;
//   };
// }
// let obj1 = new Singleton();
// let obj2 = new Singleton();
// console.log(obj1 === obj2); // true
// console.log(Singleton.cache); // undefined

// class Singleton {
//   constructor() {
//     // ...
//   }

//   method() {
//     // ...
//   }
// }

// let objSingleton = new Singleton();
// Object.freeze(objSingleton);

// export default objSingleton;

// let user = {};
// console.log(user.address.street);
// // TypeError: Cannot read properties of undefined (reading 'street')

// let user = {};
// console.log(user.address ? user.address.street : undefined); // undefined

// console.log(user.address && user.address.street && user.address.name); // undefined

// console.log(user?.address?.street);
// // undefined

// let userAdmin = {
//   admin() {
//     console.log('Admin');
//   }
// };
// let userGuest = {};

// userAdmin.admin?.(); // Admin
// userGuest.admin?.(); // nothing happens

// let key = 'firstName';

// let user1 = {
//   firstName: 'Mick',
// };
// let user2 = null;

// console.log(user1?.[key]); // Mick
// console.log(user2?.[key]); // undefined

// // if user1 exists, delete property 'firstName'
// delete user1?.firstName;
// console.log(user1) // {}
