// Destructuring assignment
// // array destructuring
// let arr = ['Charlie', 'Brown'];
// let [firstName, surName] = arr;
// let obj = {
//   firstName,
//   surName
// };
// console.log(obj); // { firstName: 'Charlie', surName: 'Brown' }
// console.log(firstName, surName); // Charlie Brown

// // using empty slot to jump element
// let arr = ['Charlie', 'Brown', 'Snoopy', 'Woodstock'];
// let [firstName, , dog, bird] = arr;
// console.log(firstName, dog, bird); // Charlie Snoopy Woodstock
// // partial matching
// let [name1, name2] = ['Charlie', 'Brown', 'Snoopy', 'Woodstock'];
// console.log(name1, name2); // Charlie Brown

// // only works with iterables(String, iterable object, array)
// // String
// let [a, b, c] = 'ABC';
// console.log(a, b, c); // A B C
// // iterable object
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(new Set([1, 2, 3])); // Set(3) { 1, 2, 3 }
// console.log(one, two, three); // 1 2 3
// // iterable object
// let [arr1, arr2, arr3] = new Map([[1, '1'], [2, '2'], [3, '3']]);
// console.log(arr1, arr2, arr3); // [ 1, '1' ] [ 2, '2' ] [ 3, '3' ]
// // iterable object([Symbol.iterator])
// let obj = {
//   names: ['Charlie', 'Snoopy', 'Woodstock', 'Sally'],
//   *[Symbol.iterator]() {
//     for (let i = 0; i < this.names.length; i++) {
//       yield this.names[i];
//     }
//   }
// }
// console.log([...obj]); // [ 'Charlie', 'Snoopy', 'Woodstock', 'Sally' ]
// let [character1, character2, character3, character4] = obj;
// console.log(character1, character2); // Charlie Snoopy
// // generator
// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// let [first, second, third, fourth] = fibs();
// console.log(first, second, third, fourth); // 0 1 1 2

// error
// let [item] = 1; // TypeError: 1 is not iterable
// let [item] = false; // TypeError: false is not iterable
// let [item] = {}; // TypeError: {} is not iterable
// note: undefined, null, NaN as well

// // assign to anything at the left-side
// let user = {};
// [user.firstName, user.surName] = 'Charlie Brown'.split(' ');
// console.log(user.firstName, user.surName); // Charlie Brown

// // looping obj with entries()
// let user = {
//   name: 'Charlie Brown',
//   age: 10,
// };
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
// }
// // name: Charlie Brown
// // age: 10
// //
// let userArr = [['name', 'Charlie Brown'], ['age', 10]];
// let map = new Map();
// for (let [key, value] of userArr) {
//   map.set(key, value);
// }
// for (let [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }
// // name: Charlie Brown
// // age: 10

// // swap variable trick
// let character1 = 'Sally';
// let character2 = 'Linus';
// [character1, character2] = [character2, character1];
// // note: assignment always start from right-side,
// // so it means [character1, character2] = ['Linus', 'Sally'];
// console.log(`character1: ${character1}, character2: ${character2}`);
// // character1: Linus, character2: Sally

// rest ...
// let arr = ['Charlie', 'Snoopy', 'Woodstock', 'Sally']
// let [name1, name2, ...restName] = arr;
// console.log(restName); // [ 'Woodstock', 'Sally' ]
// console.log(restName.length); // 2
// // error
// let [name1, name2, ...restName, name4] = ['Charlie', 'Snoopy', 'Woodstock', 'Sally'];
// // SyntaxError: Rest element must be last element

// //
// let [item1, item2, ...rest] = ['Charlie'];
// console.log(item2); // undefined
// console.log(rest); // []
// //
// let [name3, name4] = restName;
// console.log(name3, name4); // Woodstock Sally
// //
// for (let item of restName) {
//   console.log(item);
// }
// // Woodstock
// // Sally
//
// // default value
// let [firstName = 'Anonymous', surName = 'Anonymous'] = ['Charlie'];
// console.log(firstName, surName); // Charlie Anonymous
// //
// let listArr = [, , 'Woodstock', 'Sally'];
// let [character1 = name1, character2 = name2, ...restCharacter] = listArr;
// console.log(`Character list: ${character1}, ${character2}, and rest of them are: ${restCharacter}`);
// // Character list: Charlie, Snoopy, and rest of them are: Woodstock,Sally
//
// // when assignment was undefined, or empty slot
// let [item1 = 'No item', item2 = 'No item'] = [1, undefined];
// console.log(item1, item2); // 1 No item
// let [item3 = 'No item', item4 = 'No item'] = [3,];
// console.log(item3, item4); // 3 No item
// //
// let [item5 = 'No item'] = [null];
// console.log(item5); // null

// Object Destructuring
// let { foo1, foo2 } = { name1: 'Charlie', name2: 'Snoopy' };
// console.log(foo1, foo2); // undefined undefined
// let { name1, name2 } = { name1: 'Charlie', name2: 'Snoopy' };
// console.log(name1, name2); // Charlie Snoopy
// actually it means:
// let { name1: name1, name2: name2 } = { name1: 'Charlie', name2: 'Snoopy' };
// console.log(name1, name2); // Charlie Snoopy
// // well, it is just like telling the same story in a different way
// let name1 = 'Charlie';
// let name2 = 'Snoopy';
// let obj = {
//   name1,
//   name2
// };
// console.log(obj['name1'], obj['name2']); // Charlie Snoopy
//
// change order
// let characterList = {
//   name1: 'Charlie',
//   name2: 'Snoopy',
//   name3: 'Woodstock'
// };
// let { name3, name2 } = characterList;
// console.log(name3, name2); // Woodstock Snoopy
//
// {sourceProperty: targetVariable}
// let { name1: item1, name2: item2, name3: item3 } = characterList;
// // console.log(name1); // ReferenceError: name1 is not defined
// console.log(item1); // Charlie
// // note: assign property value to a variable

// // compare
// let { name1, name2, name3 } = characterList;
// console.log(name1); // Charlie
// //
// let { name1: name1, name2: name2, name3: name3 } = characterList;
// console.log(name1); // Charlie
// note: now we can understand {sourceProperty: targetVariable} means that
// we call the corresponding property like name1, and assign its value to variable name1

// // default value
// let characterList = { name1: 'Charlie' };
// let { name2 = 'Snoopy', name3 = 'Woodstock', name1 } = characterList;
// console.log(name1, name2, name3); // Charlie Snoopy Woodstock
//
// let option = {
//   title: 'Menu'
// };
// let { width = console.log('width?'), title = console.log('title?') } = option;
// width?
// note: default value was assigned at run-time
// console.log(title); // Menu
// console.log(width); // undefined
//
// let option = {
//   title: 'Menu'
// };
// let { width: w = 100, height: h = 200, title } = option;
// console.log(title); // Menu
// console.log(w); // 100
// console.log(option); // { title: 'Menu' }
// // uh, it just like...
// let w = 100;
// let h = 200;
// let option = {
//   title: 'Menu',
//   innerMethod(key, variable) {
//     if (!option[key]) {
//       return variable
//     }
//   }
// };
// console.log(option.innerMethod('width', w), option.innerMethod('width', h)); // 100 200

// // rest
// let options = {
//   title: 'Menu',
//   width: 100,
//   height: 200
// };
// // let { title, ...rest } = options;
// // console.log(rest); // { width: 100, height: 200 }
// // error
// let title, width, height;
// // { title, width, height } = options;
// // SyntaxError: Unexpected token '='
// // note: if {} has no any declaration, JS will assume it a code block
// // this way will work
// ({ title, width, height } = options)
// console.log(width, height); // 100 200

// // nested destructuring
// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ['Cake', 'Donut'],
//   extra: true
// };
// let {
//   size,
//   items,
//   extra,
//   size: {
//     width,
//     height
//   },
//   items: [item1, item2],
//   title = 'Menu'
// } = options;
// console.log(size, items, extra); // { width: 100, height: 200 } [ 'Cake', 'Donut' ] true
// console.log(width, height, item1, item2, title); // 100 200 Cake Donut Menu

// function parameter default value
// function multiply(a, b = 1) {
//   return a * b
// }
// console.log(multiply(5)); // 5
// console.log(multiply(5, 2)); // 10
// // pass object to function
// let options = {
//   title: 'Cake menu',
//   items: ['ice cream', 'chocolate']
// };
// function showMenu({
//   title = 'Untitled',
//   width = 100,
//   height = 50,
//   items = [] }) {
//   console.log(`There is our ${title}. The size is ${width}cm * ${height}cm.`)
//   console.log(`Options include ${items}.`)
// }
// showMenu(options);
// // There is our Cake menu. The size is 100cm * 50cm.
// // Options include ice cream,chocolate.
// showMenu({});
// // There is our Untitled. The size is 100cm * 50cm.
// // Options include .
// showMenu();
// // TypeError: Cannot read properties of undefined
// // note: because we have declare those properties in function,JS engine will assume function should accept an object, if we don't, it will throw error
//
// function showMenu({
//   title = 'Untitled',
//   width = 100,
//   height = 50,
//   items = [] } = {}) {
//   console.log(`There is our ${title}. The size is ${width}cm * ${height}cm.`)
//   console.log(`Options include ${items}.`)
// }
// showMenu(options);
// // There is our Cake menu. The size is 100cm * 50cm.
// // Options include ice cream,chocolate.
// showMenu({});
// // There is our Untitled. The size is 100cm * 50cm.
// // Options include.
// showMenu();
// // There is our Untitled.The size is 100cm * 50cm.
// // Options include.
// // note: now we assign those default value an default obj, so even we didn't provide any assignment, it will work

// extract methods from function
// const { log, table } = console;
// log('hello'); // hello
// table({
//   name1: 'Charlie',
//   name2: 'Snoopy',
//   name3: 'Woodstock'
// });
// // hello
// // ┌─────────┬─────────────┐
// // │ (index) │   Values    │
// // ├─────────┼─────────────┤
// // │  name1  │  'Charlie'  │
// // │  name2  │  'Snoopy'   │
// // │  name3  │ 'Woodstock' │
// // └─────────┴─────────────┘

// others
// // array destructuring => object
// let arr = ['a', 'b', 'c'];
// let [item1, item2, item3] = arr;
// let obj = {
//   item1,
//   item2,
//   item3
// };
// console.log(obj); // { item1: 'a', item2: 'b', item3: 'c' }
// let [...allItems] = arr;
// let obj2 = {
//   allItems
// };
// console.log(obj2);
// // { allItems: [ 'a', 'b', 'c' ] }
// let obj3 = {
//   ...allItems
// };
// console.log(obj3);
// // { '0': 'a', '1': 'b', '2': 'c' }
// 
// let arr = ['a', 'b', 'c'];
// let { 0: firstItem, [arr.length - 1]: lastItem } = arr;
// console.log(firstItem); // a
// console.log(lastItem); // c

// // string destructuring
// let [a, b, c, d, e] = 'Apple';
// console.log(a, b, c, d, e); // A p p l e
// // length property
// let { length: strLength } = 'Apple';
// console.log(strLength); // 5
// let { length: arrLength } = ['a', 'b'];
// console.log(arrLength); // 2
// let { size: mapLength } = new Map([
//   ['a', 1], ['b', 2],
//   ['c', 3], ['d', 4]
// ])
// console.log(mapLength); // 4

// // about Number/Boolean 
// let { toString: numberMethod } = 123;
// console.log(numberMethod); // [Function: toString]
// console.log(numberMethod === Number.prototype.toString); // true
// let { toString: booleanMethod } = true;
// console.log(booleanMethod === Boolean.prototype.toString); // true

// console.log((123).toString === numberMethod); // true
// console.log((123).toString() === numberMethod.call(123)); // true
// console.log((true).toString() === booleanMethod.call(true)); // true

// about function parameters
// function add([x, y]) {
//   return x + y;
// }
// console.log(add([1, 2])); // 3
// //
// console.log([[1, 2], [3, 4]].map(([a, b]) => a + b)); // [ 3, 7 ]

// // compare and think about following example
// function move({ x = 0, y = 0 } = {}) {
//   return [x, y];
// }
// console.log(move({ x: 3, y: 8 })); // [ 3, 8 ]
// console.log(move({ x: 3 })); // [ 3, 0 ]
// console.log(move({})); // [ 0, 0 ]
// console.log(move()); // [ 0, 0 ]
// console.log(move({ a: 1, b: 2 })); // [ 0, 0 ]
// // note: we declare parameter {x, y} in function, and set default value to x, y
// // no matter what arguments we use, x, y always hold its default value
// //
// function move({ x, y } = { x: 0, y: 0 }) {
//   return [x, y];
// }
// console.log(move({ x: 3, y: 8 })); // [ 3, 8 ]
// console.log(move({ x: 3 })); // [ 3, undefined ]
// console.log(move({})); // [ undefined, undefined ]
// console.log(move()); // [ 0, 0 ]
// console.log(move({ a: 1, b: 2 })); // [ undefined, undefined ]
// /*note:
// We also declare parameter {x, y} in this function, but didn't set any default value to x, y.
// Instead, we set another obj { x: 0, y: 0 } as default value to {x, y}.
// So, only we didn't use any argument(= undefined), the default value takes effect.
// */

// // only undefined can make default value take effect
// console.log([1, 2, 3].map((item = 'lost item') => item)); // [ 1, 2, 3 ]
// console.log([1, undefined, 3].map((item = 'lost item') => item)); // [ 1, 'lost item', 3 ]
// console.log([1, , 3].map((item = 'lost item') => item)); // [ 1, <1 empty item>, 3 ]

// Practices
// function returnArr() {
//   return [1, 2, 3];
// }
// let [a, b, c] = returnArr();
// console.log(a, b, c); // 1 2 3
// //
// function returnObj1() {
//   return {
//     foo: 1,
//     bar: 2
//   }
// }
// let { foo, bar } = returnObj1()
// console.log(foo, bar); // 1 2
// //
// function returnObj2({ x = 0, y = 0 } = {}) {
//   return {
//     x,
//     y
//   }
// }
// let { x, y } = returnObj2();
// console.log(x, y); // 0 0

//
// function orderedArr([x, y, z]) {
//   return [x, y, z];
// };
// console.log(orderedArr([1, 2, 3])); // [ 1, 2, 3 ]
// //
// function unorderedObj({ x, y, z }) {
//   return { x, y, z };
// }
// console.log(unorderedObj({ z: 3, y: 2, x: 1 })); // { x: 1, y: 2, z: 3 }

// // JSON
// let jsonData = {
//   id: 42,
//   status: 'OK',
//   data: [123, 4567]
// }
// let { id, status, data: number } = jsonData;
// console.log(id, status, number); // 42 OK [ 123, 4567 ]

// // Map
// const map = new Map([
//   ['key1', 'value1'],
//   [undefined, 'value2'],
//   [, 'value3']
// ]);
// for (let [key = 'no key', value] of map) {
//   console.log(key);
// }
// // key1
// // no key

// // module
// import { properties, methods } from 'module.js';
