// memo
// let key = 'a'
// let obj = {};
// obj[key] = 'abc';
// console.log(obj); // { a: 'abc' }
// obj['b'] = 'bcd';
// console.log(obj); // { a: 'abc', b: 'bcd' }
// obj[1] = 123;
// console.log(obj); // { '1': 123, a: 'abc', b: 'bcd' }
// //
// let mapObj = new Map([['a', 'abc']]);
// console.log(mapObj); // Map(1) { 'a' => 'abc' }
// mapObj.set('b', 'bcd');
// console.log(mapObj); // Map(2) { 'a' => 'abc', 'b' => 'bcd' }
// mapObj.set(true, 'true');
// console.log(mapObj); // Map(3) { 'a' => 'abc', 'b' => 'bcd', true => 'true' }
// mapObj.set(null, '123');
// console.log(mapObj); // Map(4) { 'a' => 'abc', 'b' => 'bcd', true => 'true', null => '123' }
// 123
// console.log(mapObj.get(null)); // 123

//
// console.log(Object.getPrototypeOf({}) === Object.prototype); // true
// console.log(Object.getPrototypeOf(new Map()) === Object.prototype); // false
// console.log(Object.getPrototypeOf(new Map()) === Map.prototype); // true
// console.log(Object.prototype.constructor === Object); // true
// console.log(Map.prototype.constructor === Map); // true

// 
// let obj = {};
// let map = new Map();
// console.log(obj['constructor'] === Object); // true
// console.log(map['constructor'] === Map); // true
// console.log(map.has('constructor')); // false
// // note: constructor is property in prototype, not a key
// // note: in other way, we can use 'constructor' as keyName in Map
// map.set('constructor', 'abc');
// console.log(map.has('constructor')); // true
// console.log(map.get('constructor')); // abc
// console.log(map.constructor === Map); // true

// Map
// console.log(Map.prototype.constructor === Map); // true
// // new Map([[key1, value1], [key2, value2]...]) // iterable and entryable object
// const map = new Map([[0, 'Apple'], [1, 'Orange']]);
// console.log(map.size); // 2

// const map = new Map();
// // .set(key, value)
// let obj = {
//   id: 1,
//   name: 'John'
// }
// let date = new Date
// map.set(obj, date.getFullYear());
// console.log(map); // Map(1) { { id: 1, name: 'John' } => 2022 }

// // .get(key) // return corresponding value
// console.log(map.get(obj)); // 2022

// // be careful of this, object always take new memory location
// console.log(map.get({ id: 1, name: 'John' })); // undefined
// // we can do this because of the different location
// map.set({ id: 1, name: 'John' }, date.getMonth());
// console.log(map);
// // Map(2) {
// //   { id: 1, name: 'John' } => 2022,
// //   { id: 1, name: 'John' } => 8
// // }
// // if we can specify the key by variable, it will overwrite
// map.set(obj, date.getDay());
// console.log(map);
// // Map(2) { { id: 1, name: 'John' } => 0, { id: 1, name: 'John' } => 8 }

// // .delete(key)
// // the same problem, this key also has another location, so it returns false
// console.log(map.delete({ id: 1, name: 'John' })); // false
// console.log(map.delete(obj)); // true
// console.log(map); // Map(1) { { id: 1, name: 'John' } => 8 }

// // .has(key)
// console.log(map.has({ id: 1, name: 'John' })); // false
// // note: if the is an object(object/array), maybe storing location in a variable is more proper

// map.set(['id'], 1);
// console.log(map.get(['id'])); // undefined
// console.log(map.has(['id'])); // false
// console.log(map.delete(['id'])); // false
// console.log(map); // Map(2) { { id: 1, name: 'John' } => 8, [ 'id' ] => 1 }

// // .clear()
// map.clear();
// console.log(map); // Map(0) {}

// // about .set()
// let arr1 = [['Apple', 1], ['Orange', 2]];
// let arr2 = [ ['Banana', 4]];
// let map = new Map([...arr1, ...arr2]);
// console.log(map);
// // Map(3) { 'Apple' => 1, 'Orange' => 3, 'Banana' => 4 }
// //
// let items = [
//   ['Apple', 1],
//   ['Orange', 2],
//   ['Orange', 3],
//   ['Banana', 4]
// ];
// let map = new Map();
// items.forEach(([key, value]) => map.set(key, value));
// console.log(map);
// // Map(3) { 'Apple' => 1, 'Orange' => 3, 'Banana' => 4 }
// //
// let map = new Map();
// let a = ['a'];
// console.log(map.set(a, 0)); // Map(1) { [ 'a' ] => 0 }
// console.log(map.set(a, 1)); // Map(1) { [ 'a' ] => 1 }
// // note: variable stores the same location, so it will overwrite
// console.log(map.set(['a'], 2)); // Map(2) { [ 'a' ] => 1, [ 'a' ] => 2 }
// console.log(map.set(['a'], 3)); // Map(3) { [ 'a' ] => 1, [ 'a' ] => 2, [ 'a' ] => 3 }
// // note: object(array, object) always take new location
// //
// let map = new Map();
// map.set(-0, 123);
// console.log(map.get(+0));
// console.log((-0) === (+0)) // true
// map.set(undefined, 3);
// map.set(null, 4);
// console.log(map.get(undefined), map.get(null)); // 3 4
// // be careful of NaN
// console.log(NaN === NaN); // false
// map.set(NaN, 123);
// map.set(NaN, 456);
// console.log(map.get(NaN)); // 456
// // note: even the strict equality was false, NaN is only one in Map

// // Map iterator
// let map = new Map([
//   ['Apple', 1],
//   ['Orange', 2],
// ]);
// console.log(map.keys()); // [Map Iterator] { 'Apple', 'Orange' }
// for (let key of map.keys()) {
//   console.log(key);
// };
// // Apple
// // Orange
// for (let value of map.values()) {
//   console.log(value);
// };
// // 1
// // 2
// for (let [key, value] of map.entries()) {
//   console.log(`${key}: ${value}`);
// };
// // Apple: 1
// // Orange: 2
// // note: entries() => Symbol.iterator
// console.log(map[Symbol.iterator] === map.entries); // true

// // Map.prototype.forEach(function(value, key, map), thisArg)
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`)
// });
// // Apple: 1
// // Orange: 2


// Map => Array
// Spread syntax
// let map = new Map([
//   ['Apple', 1],
//   ['Orange', 2],
//   [{ 'total': 3 }, { 'prices': 300 }]
// ])
// console.log(map);
// // Map(3) { 'Apple' => 1, 'Orange' => 2, { total: 3 } => { prices: 300 } }
// console.log([...map.keys()]);
// // [ 'Apple', 'Orange', { total: 3 } ]
// console.log([...map.values()]);
// // [ 1, 2, { prices: 300 } ]
// console.log([...map.entries()]);
// // [ [ 'Apple', 1 ], [ 'Orange', 2 ], [ { total: 3 }, { prices: 300 } ] ]
// console.log([...map]);
// // [ [ 'Apple', 1 ], [ 'Orange', 2 ], [ { total: 3 }, { prices: 300 } ] ]
// //
// let map = new Map([
//   ['Apple', 1],
//   ['Orange', 2],
// ]);

// let filteredMap = new Map(
//   [...map].filter(([key, value]) => value < 2)
// );
// console.log(filteredMap); // Map(1) { 'Apple' => 1 }

// let mappedMap = new Map(
//   [...map].map(([key, value]) => [key, value * 2])
// );
// // note: map() have to return key-value pair as the argument of Map()
// console.log(mappedMap);
// // Map(2) { 'Apple' => 2, 'Orange' => 4 }

// Map => Object
// let map = new Map([
//   ['Apple', 1],
//   ['Orange', 2],
// ]);
// let obj = Object.create(null);
// // console.log(Object.getPrototypeOf(obj) === null); // true
// map.forEach((value, key) => {
//   obj[key] = value
// });
// console.log(obj);
// // [Object: null prototype] { Apple: 1, Orange: 2 }
// note: if key in Map was not string, it will be tried to Type coercion
// // Map <= Object
// function objToStrMap(obj) {
//   let strMap = new Map();
//   for (let key of Object.keys(obj)) {
//     strMap.set(key, obj[key]);
//   }
//   return strMap;
// }
// let test = objToStrMap({
//   a: 1,
//   b: true,
//   toString() {
//     return 'I am function'
//   }
// });
// console.log(test);
// // Map(3) { 'a' => 1, 'b' => true, 'toString' => [Function: toString] }
// console.log(test.toString()); // [object Map]
// console.log(test.get('toString')()); // I am function
// // or simply
// let obj = {
//   a: 1,
//   b: true
// };
// let strMap = new Map(Object.entries(obj));
// console.log(strMap); // Map(2) { 'a' => 1, 'b' => true }

// Map => JSON
// let map = new Map([
//   ['Apple', 1],
//   ['Orange', 2],
// ]);
// function mapToJSON(map) {
//   let counter = 0;
//   let obj = Object.create(null);
//   map.forEach((value, key) => {
//     if (typeof key !== 'string') counter++;
//     obj[key] = value;
//   })
//   return counter ? JSON.stringify([...map]) : JSON.stringify(obj);
// }
// console.log(mapToJSON(map)); // {"Apple":1,"Orange":2}

// map.set(true, 3);
// console.log(mapToJSON(map));
// // [["Apple",1],["Orange",2],[true,3]]

// Map <= JSON
// let strArr = '[["Apple",1],["Orange",2],[true,3]]';

// let objJSON = {
//   "squadName": "Super hero squad",
//   "homeTown": "Metro City",
//   "formed": 2016,
//   "secretBase": "Super tower",
//   "active": true,
//   "members": [
//     {
//       "name": "Molecule Man",
//       "age": 29,
//       "secretIdentity": "Dan Jukes",
//       "powers": [
//         "Radiation resistance",
//         "Turning tiny",
//         "Radiation blast"
//       ]
//     },
//     {
//       "name": "Madame Uppercut",
//       "age": 39,
//       "secretIdentity": "Jane Wilson",
//       "powers": [
//         "Million tonne punch",
//         "Damage resistance",
//         "Superhuman reflexes"
//       ]
//     },
//     {
//       "name": "Eternal Flame",
//       "age": 1000000,
//       "secretIdentity": "Unknown",
//       "powers": [
//         "Immortality",
//         "Heat Immunity",
//         "Inferno",
//         "Teleportation",
//         "Interdimensional travel"
//       ]
//     }
//   ]
// }

// let arrJSON = [
//   {
//     "name": "Molecule Man",
//     "age": 29,
//     "secretIdentity": "Dan Jukes",
//     "powers": [
//       "Radiation resistance",
//       "Turning tiny",
//       "Radiation blast"
//     ]
//   },
//   {
//     "name": "Madame Uppercut",
//     "age": 39,
//     "secretIdentity": "Jane Wilson",
//     "powers": [
//       "Million tonne punch",
//       "Damage resistance",
//       "Superhuman reflexes"
//     ]
//   }
// ]

// // function JSONToMap(json) {
// //   return new Map(JSON.parse(json))
// // }
// // console.log(JSONToMap(strArr));
// // // Map(3) { 'Apple' => 1, 'Orange' => 2, true => 3 }
// // console.log(JSONToMap(JSON.stringify(objJSON)));
// // // TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
// // console.log(JSONToMap(JSON.stringify(arrJSON)));
// // // Map(1) { undefined => undefined }

// function JSONToMap(json) {
//   let map = new Map()
//   let type = Object.prototype.toString
//   let data = JSON.parse(json);

//   if (type.call(data) === '[object Object]') {
//     for (let [key, value] of Object.entries(data)) {
//       map.set(key, value);
//     }
//   } else if (type.call(data) === '[object Array]') {
//     data.forEach((values, index, arr) => {
//       if (!type.call(values).includes('Array')) {
//         for (let [key, value] of Object.entries(values)) {
//           map.set(key, value);
//         }
//       } else {
//         for (let [key, value] of data) {
//           map.set(key, value)
//         }
//       }
//     })
//   }
//   return map
// }

// function JSONToMap(json) {
//   let map = new Map()
//   let type = Object.prototype.toString
//   let data = JSON.parse(json);

//   if (type.call(data) === '[object Object]') {
//     [data].forEach((values, index, arr) => {
//       for (let [key, value] of Object.entries(values)) {
//         map.set(key, value);
//       }
//     })
//   }
//   return map
// }

// console.log(JSONToMap(JSON.stringify(objJSON)));
// // Map(6) {
// //   'squadName' => 'Super hero squad',
// //   'homeTown' => 'Metro City',
// //   'formed' => 2016,
// //   'secretBase' => 'Super tower',
// //   'active' => true,
// //   'members' => [
// //     {
// //       name: 'Molecule Man',
// //       age: 29,
// //       secretIdentity: 'Dan Jukes',
// //       powers: [Array]
// //     },
// //     {
// //       name: 'Madame Uppercut',
// //       age: 39,
// //       secretIdentity: 'Jane Wilson',
// //       powers: [Array]
// //     },
// //     {
// //       name: 'Eternal Flame',
// //       age: 1000000,
// //       secretIdentity: 'Unknown',
// //       powers: [Array]
// //     }
// //   ]
// // }
// console.log(JSONToMap(JSON.stringify(arrJSON)));
// // // Map(4) {
// // //   'name' => 'Madame Uppercut',
// // //   'age' => 39,
// // //   'secretIdentity' => 'Jane Wilson',
// // //   'powers' => [ 'Million tonne punch', 'Damage resistance', 'Superhuman reflexes
// // // ' ]
// // // }
// console.log(JSONToMap(strArr));
// // Map(3) { 'Apple' => 1, 'Orange' => 2, true => 3 }

// Set
// about .add(value)
// let arr = [1, 2, 2, 3, 3, 4, 5]
// let set = new Set();
// arr.forEach((item) => set.add(item));
// console.log(set);
// // Set(5) { 1, 2, 3, 4, 5 }
// //
// let iterableArr = ['div.container', 'div1', 'div2']; // NodeList
// let set = new Set(iterableArr);
// console.log(set);
// // Set(3) { 'div.container', 'div1', 'div2' }
// //
// let set = new Set(document.querySelectorAll('div'));
// // or
// let set = new Set()
// document
//   .querySelectorAll('div')
//   .forEach((div) => set.add(div));

// remove duplicate members
// let arr = [1, 2, 2, 3, 3, 4, 5];
// console.log([...new Set(arr)]); // [ 1, 2, 3, 4, 5 ]

// let str = [...new Set('ababbc')].join('');
// console.log(str); // abc

// let set = new Set();
// let a = NaN;
// let b = NaN;
// set.add(a);
// set.add(b);
// console.log(set); // Set(1) { NaN }

// set.add({});
// set.add({});
// console.log(set); // Set(3) { NaN, {}, {} }

// Set.prototype.constructor
// let set = new Set();
// console.log(set.constructor === Set); // true
// // .size
// set.add(1).add(2).add(2).add(1);
// console.log(set.size); // 2

// let set = new Set();
// // .add(value)
// set.add('a').add('b');
// // .has(value)
// console.log(set.has('a')); // true
// console.log(set.has('constructor')); // false
// console.log(set.size); // 2

// set.add('constructor');
// console.log(set.has('constructor')); // true
// console.log(set.size); // 3
// // .delete(value)
// console.log(set.delete('a')); // true
// console.log(set.size); // 2
// // .clear()
// set.clear();
// console.log(set.size); // 0

// // dedupe
// function dedupeArr(arr) {
//   // return [...new Set(arr)];
//   return Array.from(new Set(arr));
// }
// console.log(dedupeArr([1, 1, 2, 2, 3])); // [ 1, 2, 3 ]

// // iteration
// // .keys() return === .values() return
// let set = new Set(['Apple', 'Orange']);
// for (let item of set.keys()) {
//   console.log(item);
// }
// // Apple
// // Orange
// for (let item of set.values()) {
//   console.log(item);
// }
// // Apple
// // Orange

// // .entries(value, value)
// for (let item of set.entries()) {
//   console.log(item);
// }
// // ['Apple', 'Apple']
// // ['Orange', 'Orange']
// // [Symbol.iterator] will call .values(), which means we can iterate set straightly
// console.log(Set.prototype[Symbol.iterator] === Set.prototype.values); // true
// for (let item of set) {
//   console.log(item);
// }
// // Apple
// // Orange

// .forEach()
// let set = new Set([1, 2, 3]);
// set.forEach((value, key) => {
//   console.log(`key: ${key}, value: ${value}`);
// })
// // key: 1, value: 1
// // key: 2, value: 2
// // key: 3, value: 3
// // note: the key always be equal to the value in set.forEach()

// // Spread syntax => filter, map....
// let set = new Set([1, 2, 3]);
// set = new Set([...set].map((item) => item ** 2));
// console.log(set); // Set(3) { 1, 4, 9 }
// set = new Set([...set].filter((item) => item > 5));
// console.log(set); // Set(1) { 9 }

// // Union/Intersect/Difference
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 3, 2]);

// // Union
// let union = new Set([...set1, ...set2]);
// // Set(3) { 1, 4, 9 }
// console.log(union); // Set(4) { 1, 2, 3, 4 }

// // Intersect
// let intersect = new Set([...set1].filter((item) => set2.has(item)));
// console.log(intersect); // Set(2) { 2, 3 }

// // Difference
// let differenceSet1 = new Set([...set1].filter((item) => !set2.has(item)));
// console.log(differenceSet1); // Set(1) { 1 }
// let differenceSet2 = new Set([...set2].filter((item) => !set1.has(item)));
// console.log(differenceSet2); // Set(1) { 4 }

// // Symmetric difference
// let symmetricDifference = new Set([...differenceSet1, ...differenceSet2]);
// console.log(symmetricDifference); // Set(2) { 1, 4 }

// Practices
// console.log('a'.codePointAt(0)); // 97
// let alphabetObj = {
//   from: 0,
//   to: 26,
//   *[Symbol.iterator]() {
//     for (let i = this.from; i < this.to; i++) {
//       yield String.fromCodePoint('a'.codePointAt(0) + i);
//     }
//   }
// }

// let set = new Set(alphabetObj);
// // console.log(set);
// let alphabetOrder = new Map(...[set.entries()]);
// alphabetOrder = new Map([...alphabetOrder].map(([key, value]) => [key, 0]));
// console.log(alphabetOrder);
// // Map(26) {
// //   'a' => 0,
// //   'b' => 0,
// //   'c' => 0,
// //   'd' => 0,
// //   ...
// // }
// alphabetOrder = new Map(Array.from(alphabetOrder, ([key, value]) => [key, null]));
// console.log(alphabetOrder);
// // Map(26) {
// //   'a' => null,
// //   'b' => null,
// //   'c' => null,
// //   'd' => null,
// //   ...
// // }

// let weakmap = new WeakMap();
// // weakmap.set(1, 2);
// // // TypeError: Invalid value used as weak map key
// // weakmap.set(Symbol(), 2);
// // // TypeError: Invalid value used as weak map key
// // weakmap.set(null, 2);
// // // TypeError: Invalid value used as weak map key
// let obj = {
//   1: 2,
//   null: 2
// }
// weakmap.set(obj, 2);
// console.log(weakmap.has(obj));
// // true
// console.log(weakmap);
// // WeakMap { <items unknown> }
// // cancel reference
// obj = null;
// console.log(weakmap.has(obj));
// // false
// console.log(weakmap);
// // WeakMap { <items unknown> }

// let key = {};
// let obj = { foo: 1 };
// let weakmap = new WeakMap();
// weakmap.set(key, obj);
// obj = null;
// console.log(weakmap.has(key));
// // true
// console.log(weakmap.get(key));
// // { foo: 1 }

// weakmap.set(key, obj);
// console.log(weakmap.get(key));
// // null
// key = null;
// console.log(weakmap.has(key));
// // false
// console.log(weakmap.get(key));
// // undefined

// note: even though we had changed value in variable obj, variable key in weakmap is still collecting the previous value, we can understand the "weak reference" only works on "key" in WeakMap instance, instead of "value"


// weakmap
// let elements = ['div.container', 'div1', 'div2'];
// let weakmap = new WeakMap();
// // .set(key, value)
// weakmap.set(elements, 'something');
// // .get(key)
// console.log(weakmap.get(elements)); // something
// // .has(key)
// console.log(weakmap.has(elements)); // true
// // .delete(key)
// console.log(weakmap.delete(elements)); // true
// console.log(weakmap.has(elements)); // false

// weakset
// let elements = ['div.container', 'div1', 'div2'];
// let weakset = new WeakSet();
// console.log(weakset.add(elements)); // WeakSet { <items unknown> }
// console.log(weakset.has(elements)); // true
// console.log(weakset.delete(elements)); // true
// console.log(weakset.has(elements)); // false

// practices
// DOM
// const wm = new WeakMap();
// wm.set(
//   document.getElementById('logo'),
//   { clickedTimes: 0 }
// );
// document
//   .getElementById('logo')
//   .addEventListener('click', () => {
//     let logoData = wm.get(document.getElementById('logo'));
//     logoData.clickedTimes++;
//   }, false);

// // WeakMap - only for instance
// const _counter = new WeakMap();
// const _action = new WeakMap();
// class CountDown {
//   // don't do this
//   constructor(counter, action) {
//     _counter.set(this, counter);
//     _action.set(this, action);
//   }
//   decrement() {
//     let counter = _counter.get(this);
//     if (counter < 1) return;
//     counter--;
//     _counter.set(this, counter);
//     if (counter === 0) {
//       _action.get(this)();
//     }
//   }
// }

// let countdown = new CountDown(2, () => console.log('Done'));
// console.log(_counter.has(countdown)); // true
// console.log(_counter.has(new CountDown(2, () => console.log('Done')))); // true
// countdown.decrement();
// countdown.decrement();
// // Done

// countdown = null;
// console.log(_counter.has(countdown)); // false
// console.log(_counter.has(new CountDown(2, () => console.log('Done')))); // true
// console.log(_counter.delete(countdown)); // true
// console.log(_counter.delete(new CountDown(2, () => console.log('Done')))); // true
// console.log(_counter.has(countdown)); // false
// console.log(_counter.has(new CountDown(2, () => console.log('Done')))); // true
// // note: now we know that, never setting in constructor.
// // note: every time we call new CountDown, it will set a brand-new key in weakmap

//
// const _counter = new WeakMap();
// const _action = new WeakMap();
// class CountDown {
//   constructor(counter, action) {
//     this.counter = counter
//     this.action = action
//   }
//   setWeakMap() {
//     if (!_counter.has(this.counter)) {
//       _counter.set(this, this.counter);
//     }
//     if (!_action.has(this, this.action)) {
//       _action.set(this, this.action);
//     }
//   }
//   decrement() {
//     let counter = _counter.get(this);
//     if (counter < 1) return;
//     counter--;
//     _counter.set(this, counter);
//     if (counter === 0) {
//       _action.get(this)();
//     }
//   }
// }

// let countdown = new CountDown(2, () => console.log('Done'));
// countdown.setWeakMap();
// countdown.decrement();
// countdown.decrement();
// // Done
// countdown = null;
// console.log(_counter.has(countdown)); // false
// console.log(_counter.has(new CountDown(2, () => console.log('Done')))); // false

//
// // WeakSet - only for instance
// const fooWeak = new WeakSet();
// class Foo {
//   constructor() {
//     fooWeak.add(this);
//   }
//   method() {
//     if (!fooWeak.has(this)) {
//       throw new TypeError('Foo.prototype.method must be used only for Foo instance')
//     }
//     return 'Ok, let\'s do something'
//   }
// }
// // console.log(Foo.prototype.method());
// // // TypeError: Foo.prototype.method must be used only for Foo instance

// let foo = new Foo();
// console.log(fooWeak.has(foo)); // true
// console.log(foo.method()); // Ok, let's do something
// foo = null;
// console.log(fooWeak.has(foo)); // false

// // Map practice
// ShoppingCart
// class ShoppingCart {
//   constructor() {
//     this.itemList = new Map();
//   }
//   addItem(item) {
//     // using Nullish coalescing operator to check item exist or not
//     const count = this.itemList.get(item) ?? 0;
//     this.itemList.set(item, count + 1);
//   }
//   getTotalPrice() {
//     return Array.from(this.itemList).reduce((previousTotal, [item, count]) => {
//       return previousTotal + item.price * count;
//     }, 0);
//   }
//   toString() {
//     return Array.from(this.itemList).map(([item, count]) => {
//       return `${item.name}: ${count}`;
//     }).join(',')
//   }
// }

// const shoppingCart = new ShoppingCart();
// const shopItems = [
//   { name: 'Orange', price: 100 },
//   { name: 'Apple', price: 200 }
// ];

// shoppingCart.addItem(shopItems[0]);
// shoppingCart.addItem(shopItems[0]);
// shoppingCart.addItem(shopItems[1]);
// shoppingCart.addItem(shopItems[1]);
// console.log(shoppingCart.getTotalPrice()); // 600
// console.log(shoppingCart.toString()); // Orange: 2,Apple: 2

// filter anagrams
// function sortLetter(arr) {
//   let map = new Map();
//   for (let word of arr) {
//     let sorted = word
//       .toLowerCase()
//       .split('')
//       .sort((a, b) => a.codePointAt() - b.codePointAt())
//       .join('');
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
// console.log(sortLetter(arr));
// // [ 'PAN', 'hectares', 'era' ]

