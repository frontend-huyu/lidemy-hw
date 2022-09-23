// let fruits = ['Apple', 'Orange', 'Lemon', 'Banana', 'Watermelon'];
// fruits.pop()
// console.log(fruits); // [ 'Apple', 'Orange', 'Lemon', 'Banana' ]
// console.log(fruits.pop()); // Banana
// console.log(fruits); // [ 'Apple', 'Orange', 'Lemon' ]

// fruits.shift()
// console.log(fruits); // [ 'Orange', 'Lemon', 'Banana', 'Watermelon' ]
// console.log(fruits.shift()) // Orange
// console.log(fruits); // [ 'Lemon', 'Banana', 'Watermelon' ]

// // delete
// console.log(fruits.splice(0, 1)); // [ 'Apple' ]
// console.log(fruits); // [ 'Orange', 'Lemon', 'Banana', 'Watermelon' ]

// // replace
// console.log(fruits.splice(0, 2, 'Pear')); // [ 'Orange', 'Lemon' ]
// console.log(fruits); // [ 'Pear', 'Banana', 'Watermelon' ]

// // insert
// // fruits.splice(0, 0, 'Apple', 'Orange');
// // console.log(fruits) // [ 'Apple', 'Orange', 'Pear', 'Banana', 'Watermelon' ]
// let arr = ['Apple', 'Orange'];
// fruits.splice(0, 0, ...arr);
// console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Banana', 'Watermelon' ]

// negative index
// console.log(fruits.splice(-1, 1)) // [ 'Watermelon' ]
// console.log(fruits) // [ 'Apple', 'Orange', 'Lemon', 'Banana' ]

// // fruits.splice(-1, 0, 'Watermelon')
// // console.log(fruits) // [ 'Apple', 'Orange', 'Lemon', 'Watermelon', 'Banana' ]
// fruits.splice(fruits.length, 0, 'Watermelon');
// console.log(fruits) // [ 'Apple', 'Orange', 'Lemon', 'Banana', 'Watermelon' ]

// arr.slice(start[[, end]])
// shallow copy
// let recipe = ['Apple', 'Orange'];
// let spreadArr = [...recipe];
// let sliceArr = recipe.slice()
// console.log(spreadArr); // [ 'Apple', 'Orange' ]
// console.log(sliceArr); // [ 'Apple', 'Orange' ]

// spreadArr[0] = 'Egg';
// sliceArr[0] = 'Water';
// console.log(spreadArr); // [ 'Egg', 'Orange' ]
// console.log(sliceArr); // [ 'Water', 'Orange' ]
// console.log(recipe); // [ 'Apple', 'Orange' ]

// spreadArr[0] = {
//   list: ['one Egg', 'two cups Water']
// };
// console.log(spreadArr); // [ { list: [ 'one Egg', 'two cups Water' ] }, 'Orange' ]

// console.log(sliceArr); // [ 'Water', 'Orange' ]
// console.log(recipe); // [ 'Apple', 'Orange' ]

// let copySpreadArr = spreadArr.slice();
// copySpreadArr[0].list = ['two Egg', 'two cups Milk'];

// console.log(copySpreadArr); // [ { list: [ 'two Egg', 'two cups Milk' ] }, 'Orange' ]
// console.log(spreadArr); // [ { list: [ 'two Egg', 'two cups Milk' ] }, 'Orange' ]

//
// let newArr = [
//   { list: ['one Egg', 'two cups Water'] },
//   ['We need flour to bread!'],
//   'Apple'
// ];

// let spreadArr = [...newArr];
// let sliceArr = newArr.slice();

// spreadArr[0].list = ['two Egg', 'two cups Milk'];
// sliceArr[1][0] = ['Maybe rice flour is better.'];
// spreadArr[2] = ['Apple', 'Orange'];
// spreadArr[2][1] = ['No Orange!'];

// console.log(newArr);
// [
//   { list: [ 'two Egg', 'two cups Milk' ] },
//   [ [ 'Maybe rice flour is better.' ] ],
//   'Apple'
// ]
// console.log(spreadArr);
// [
//   { list: ['two Egg', 'two cups Milk'] },
//   [['Maybe rice flour is better.']],
//   ['Apple', ['No Orange!']]
// ]
// console.log(sliceArr);
// [
//   { list: [ 'two Egg', 'two cups Milk' ] },
//   [ [ 'Maybe rice flour is better.' ] ],
//   'Apple'
// ]


// let copySpreadArr = spreadArr.slice();
// copySpreadArr[2][1] = 'cinnamon';

// console.log(spreadArr)
// [
//   { list: [ 'two Egg', 'two cups Milk' ] },
//   [ [ 'Maybe rice flour is better.' ] ],
//   [ 'Apple', 'cinnamon' ]
// ]

// copy all or apart of array
// let newArr = fruits.slice(); // no specific index means copy all
// console.log(newArr); // [ 'Apple', 'Orange', 'Lemon', 'Banana', 'Watermelon' ]
// newArr = fruits.slice(2); // start from index 2
// console.log(newArr); // [ 'Lemon', 'Banana', 'Watermelon' ]
// newArr = fruits.slice(2, 4); // start from index 2, end at index 4 (not included)
// console.log(newArr); // [ 'Lemon', 'Banana' ]

// // negative index
// newArr = fruits.slice(-1)
// console.log(newArr); // [ 'Watermelon' ]
// newArr = fruits.slice(-1, fruits.length)
// console.log(newArr); // [ 'Watermelon' ]
// newArr = fruits.slice(-2)
// console.log(newArr); // [ 'Banana', 'Watermelon' ]

// newArr = fruits.slice(2, -2)
// console.log(newArr); // [ 'Lemon' ]

// oldArr.concat([])
// let fruits = ['Apple', 'Orange', 'Banana'];
// let vegetables = ['Cabbage'];
// let obj = {
//   a: '0'
// }

// let newArr = fruits.concat(vegetables, obj, 'abc');
// console.log(newArr);
// // [ 'Apple', 'Orange', 'Banana', 'Cabbage', { a: '0' }, 'abc' ]

// // return one-dimensional array
// let fruits = ['Apple', ['Orange', ['Banana']]];
// let vegetables = ['Carrot', 'Cabbage'];

// let newArr = fruits.concat(vegetables);
// console.log(newArr);
// // ['Apple', ['Orange', ['Banana']], 'Carrot', 'Cabbage']


// let fruits = ['Apple', ['Orange', ['Banana']]];
// let vegetables = [{ root: 'Carrot' }, { leaf: 'Cabbage' }];

// let newArr = fruits.concat(vegetables);
// console.log(newArr);
// // [
// //   'Apple',
// //   ['Orange', ['Banana']],
// //   { root: 'Carrot' },
// //   { leaf: 'Cabbage' }
// // ]

// newArr[1][1] = ['Lemon'];
// console.log(fruits);
// // [ 'Apple', [ 'Orange', [ 'Lemon' ] ] ]

// newArr[2].root = 'Radish';
// console.log(vegetables);
// // [ { root: 'Radish' }, { leaf: 'Cabbage' } ]

// // Symbol.isConcatSpreadable
// let arr = [1, 2];
// let arrayLike = {
//   0: 'Apple',
//   1: 'Orange',
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };
// console.log(arr.concat(arrayLike));
// // [ 1, 2, 'Apple', 'Orange' ]


// arrayLike = {
//   0: 'Apple',
//   1: 'Orange',
//   [Symbol.isConcatSpreadable]: false,
//   length: 2
// };
// console.log(arr.concat(arrayLike));
// // [
// //   1,
// //   2,
// //   {
// //     '0': 'Apple',
// //     '1': 'Orange',
// //     length: 2,
// //     [Symbol(Symbol.isConcatSpreadable)]: false
// //   }
// // ]

// let config = {
//   minAge: 18,
//   maxAge: 30,
//   match(user) {
//     return (user.age >= this.minAge) && (user.age < this.maxAge);
//   }
// };

// let veterans = {
//   minAge: 30,
//   maxAge: 40
// }

// let novice = {
//   minAge: 10,
//   maxAge: 18
// }

// let participant = [
//   { name: 'Ada', age: 32 },
//   { name: 'Leon', age: 25 },
//   { name: 'Sherry', age: 16 },
//   { name: 'Claire', age: 24 },
// ]

// let candidates = participant.filter(config.match, config);
// console.log(candidates);
// // [ { name: 'Leon', age: 25 }, { name: 'Claire', age: 24 } ]
// candidates = participant.filter(config.match, veterans);
// console.log(candidates);
// // [ { name: 'Ada', age: 32 } ]
// candidates = participant.filter(config.match, novice);
// console.log(candidates);
// // [ { name: 'Sherry', age: 16 } ]
// // note: if we use 'this' in 'config.match', we should set reference to 'thisArg'

// let config = {
//   candidates: { minAge: 18, maxAge: 30 },
//   veterans: { minAge: 30, maxAge: 40 },
//   novice: { minAge: 10, maxAge: 18 },
//   match(user) {
//     return (user.age >= this.minAge) && (user.age < this.maxAge);
//   }
// };
// let participant = [
//   { name: 'Ada', age: 32 },
//   { name: 'Leon', age: 25 },
//   { name: 'Sherry', age: 16 },
//   { name: 'Claire', age: 24 },
// ];
// console.log(participant.filter(config.match, config.candidates))
// // [ { name: 'Leon', age: 25 }, { name: 'Claire', age: 24 } ]
// console.log(participant.filter(config.match, config.veterans))
// // [ { name: 'Ada', age: 32 } ]
// console.log(participant.filter(config.match, config.novice))
// // [ { name: 'Sherry', age: 16 } ]

// or call it simply
// let candidates = participant.filter((user) => config.match(user));
// console.log(candidates);
// // [ { name: 'Leon', age: 25 }, { name: 'Claire', age: 24 } ]

// arr.forEach(function(item, index, array), thisArg)
// let fruits = ['Apple', 'Orange', 'Lemon'];
// fruits.forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });
// // Apple is at index 0 in Apple,Orange,Lemon
// // Orange is at index 1 in Apple,Orange,Lemon
// // Lemon is at index 2 in Apple,Orange,Lemon

// forEach always return undefined
// console.log(fruits.forEach((item, index) => {
//   return item === 'Orange' ? index : 'undefined';
// }))
// undefined
// note: if it can't return values of callback function, we shouldn't use it in Promise chain
// note: forEach always iterate all the elements, that is why it always return undefined

// let arr = [];
// console.log(fruits.forEach((item, index) => {
//   item === 'Orange' ? arr.push(index) : 'undefined';
// }))
// console.log(arr); // [ 1 ]

// let arr = [1, 2, 3];
// let sum = 0;

// // Promise
// const sumFn = async (a, b) => a + b;

// arr.forEach(async (item) => {
//   sum = await sumFn(sum, item);
// });
// console.log(sum); // 0

// let fruits = ['Apple', 'Orange', 'Lemon'];
// fruits.forEach((fruit) => {
//   console.log(fruit);
//   if (fruit === 'Apple') {
//     fruits.shift();
//   }
// });
// // Apple
// // Lemon

// console.log(fruits)
// // [ 'Orange', 'Lemon' ]

// arr.filter((item, index, array), thisArg)
// let users = [
//   { id: 1, name: 'Jon', score: 90 },
//   { id: 2, name: 'Robin', score: 75 },
//   { id: 3, name: 'Sansa', score: 80 },
//   { id: 4, name: 'Arya', score: 100 },
//   { id: 5, name: 'Bran', score: 120 },
//   { id: 6, name: '', score: 1000 }
// ];

// let over100 = users.filter((user) => user.score >= 100);
// console.log(over100)
// // [
// //   { id: 4, name: 'Arya', score: 100 },
// //   { id: 5, name: 'Bran', score: 120 },
// //   { id: 6, name: '', score: 1000 }
// // ]

// filter() returns elements that condition is true
// let nameOfOver100 = users.filter((user) => {
//   if (user.score >= 100) return user.name
// });
// console.log(nameOfOver100)
// // [
// //   { id: 4, name: 'Arya', score: 100 },
// //   { id: 5, name: 'Bran', score: 120 }
// // ]

// function findNameHasA(arr, query) {
//   return arr.filter((item) => {
//     return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }
// console.log(findNameHasA(users, 'a'));
// // [
// //   { id: 3, name: 'Sansa', score: 80 },
// //   { id: 4, name: 'Arya', score: 100 },
// //   { id: 5, name: 'Bran', score: 120 }
// // ]

// arr.map(function(item, index, array), thisArg)
// let users = [
//   { id: 1, name: 'Jon', score: 90 },
//   { id: 2, name: 'Robin', score: 75 },
//   { id: 3, name: 'Sansa', score: 80 },
//   { id: 4, name: 'Arya', score: 100 },
//   { id: 5, name: 'Bran', score: 120 },
//   { id: 6, name: '', score: 1000 }
// ];

// let nameLengths = users.map((user) => user.name.length);
// console.log(nameLengths) // [ 3, 5, 5, 4, 4, 0 ]

// // compare with forEach
// let arr = [];
// users.forEach((user) => {
//   arr.push(user.name.length);
// });
// console.log(arr); // [ 3, 5, 5, 4, 4, 0 ]

// let arr = ['1', '2', '3'];
// console.log(arr.map(Number)); // [ 1, 2, 3 ]

// string is iterable
// let map = Array.prototype.map
// let getCodePoint = map.call('I am string', (item) => item.codePointAt(0))
// console.log(getCodePoint);
// // [
// //   73, 32, 97, 109,
// //   32, 115, 116, 114,
// //   105, 110, 103
// // ]

// let arr = []
// let foreach = Array.prototype.forEach
// foreach.call('I am string', (item) => arr.push(item.codePointAt(0)));
// console.log(arr)
// // [
// //   73, 32, 97, 109,
// //   32, 115, 116, 114,
// //   105, 110, 103
// // ]

// compare with filter
// let over100 = users.filter((user) => user.score >= 100);
// console.log(over100)

// let mappedOver100 = users.map((user) => {
//   if (user.score >= 100) return user
//   return
// });
// console.log(mappedOver100);
// // [
// //   undefined,
// //   undefined,
// //   undefined,
// //   { id: 4, name: 'Arya', score: 100 },
// //   { id: 5, name: 'Bran', score: 120 },
// //   { id: 6, name: '', score: 1000 }
// // ]

// let mappedOver100 = []
// users.map((user) => {
//   if (user.score >= 100) {
//     mappedOver100.push(user)
//   }
// });
// console.log(mappedOver100);
// // [
// //   { id: 4, name: 'Arya', score: 100 },
// //   { id: 5, name: 'Bran', score: 120 },
// //   { id: 6, name: '', score: 1000 }
// // ]


// arr.reduce(function (previousValue, currentValue, index, array), initialValue);
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((previousValue, current) => {
//   return (previousValue + current);
// })
// console.log(result); // 15

// result = arr.reduce((a, b) => (a + b), 100);
// console.log(result); // 115

// arr = []
// // result = arr.reduce((a, b) => (a + b));
// // console.log(result);
// // // TypeError: Reduce of empty array with no initial value

// result = arr.reduce((a, b) => (a + b), 0);
// console.log(result); // 0

// let arr = ['a', 'b', 'c'];
// let result = arr.reduce((a, b) => (a + b));
// console.log(result); // abc

// arr = [0, 'a', 1, 'b', 2, 3];
// result = arr.reduce((a, b) => (a + b));
// console.log(result); // 0a1b23

// arr = [0, 1, 2, 'a', 3, 'b'];
// result = arr.reduce((a, b) => (a + b));
// console.log(result); // 3a3b

// result = arr.filter((item) => typeof item === 'number').reduce((a, b) => (a + b));
// console.log(result); // 6

// let arr = ['a', 'b', 'c'];
// let result = arr.reduceRight((a, b) => (a + b));
// console.log(result); // cba


// arr.sort(function compare(a, b))
// let users = [
//   { id: 1, name: 'Jon', score: 90 },
//   { id: 2, name: 'Robin', score: 75 },
//   { id: 3, name: 'Sansa', score: 80 },
//   { id: 4, name: 'Arya', score: 100 },
//   { id: 5, name: 'Bran', score: 120 },
//   { id: 6, name: '', score: 1000 }
// ];

// // let sortByScore = users.sort((a, b) => {
// //   if (a.score > b.score) return 1
// //   if (a.score < b.score) return -1
// //   return 0
// // });
// // console.log(sortByScore);

// let sortByScore = users.sort((a, b) => a.score - b.score);
// // note: a.score - b.score > 0 => ascending order
// // note: b.score - a.score > 0 => descending order
// console.log(sortByScore);
// // [
// //   { id: 2, name: 'Robin', score: 75 },
// //   { id: 3, name: 'Sansa', score: 80 },
// //   { id: 1, name: 'Jon', score: 90 },
// //   { id: 4, name: 'Arya', score: 100 },
// //   { id: 5, name: 'Bran', score: 120 },
// //   { id: 6, name: '', score: 1000 }
// // ]

// let arr = [1, 2, 15];
// console.log(arr.sort()); // [ 1, 15, 2 ]
// // default function in sort() will change elements into string
// console.log(arr.sort(function compare(a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === b) return 0;
// })); // [ 1, 2, 15 ]

// let arr = ['1', 2, 'a', -1, 5, undefined];
// let sortedArr = arr.filter((item) => {
//   return item && typeof item === 'number'
// }).sort((a, b) => a - b);

// console.log(sortedArr); // [ -1, 2, 5 ]

// use str.localeCompare()
// let alphabet = ['Banana', 'Lemon', 'apple'];
// console.log(alphabet.sort((a, b) => {
//   console.log(`${a}: ${a.codePointAt(0)}, ${b}: ${b.codePointAt(0)}`);
//   // Lemon: 76, Banana: 66
//   // apple: 97, Lemon: 76
//   // apple: 97, Lemon: 76
//   // apple: 97, Banana: 66
//   // note: quickSort
//   return a.localeCompare(b)
// }));
// // [ 'apple', 'Banana', 'Lemon' ]

// let japanese = ['あ', 'た', 'さ', 'ア', 'タ', 'サ'];
// console.log(japanese.sort((a, b) => a.localeCompare(b)));
// // [ 'あ', 'ア', 'さ', 'サ', 'た', 'タ' ]

// arr.reverse()
// let arr = ['a', 'b', 'c'];
// console.log(arr.reverse()); // [ 'c', 'b', 'a' ]

// arr.join(separator)
// let arr = ['a', 'b', 'c'];
// console.log(arr.join()); // a,b,c
// console.log(arr.join('')); // abc
// console.log(arr.join('.')); // a.b.c

// arr = ['', null, undefined, , 'a'];
// console.log(arr.join('.')); // ....a

// str.split([separator[, limit]])
// let fruits = 'Apple, Banana, Lemon';
// console.log(fruits.split(',')); // [ 'Apple', ' Banana', ' Lemon' ]
// console.log(fruits.split(', ')); // [ 'Apple', 'Banana', 'Lemon' ]
// // note: Apple/, /Banana/, /Lemon

// console.log(fruits.split(', ', 1)); // [ 'Apple' ]

// let matched = fruits.match(/apple/id).indices[0];
// console.log(matched); // [ 0, 5 ]

// split() can break surrogate pairs
// let str = '𝟘𝟙𝟚𝟛';
// let arr = str.split('');
// console.log(arr);
// // [
// //   '\ud835', '\udfd8',
// //   '\ud835', '\udfd9',
// //   '\ud835', '\udfda',
// //   '\ud835', '\udfdb'
// // ]

// // use spread syntax or Array.from()
// arr = [...str];
// console.log(arr);
// // ['𝟘', '𝟙', '𝟚', '𝟛']
// arr = Array.from(str);
// console.log(arr);
// // ['𝟘', '𝟙', '𝟚', '𝟛']

// // Array.from(arg[, map[, thisArg]])
// // string
// let str = 'abc';
// let result = Array.from(str, (item) => item.codePointAt().toString(16));
// console.log(result); // [ '61', '62', '63' ]

// str = '𝟘𝟙𝟚𝟛';
// result = Array.from(str, (item) => item.codePointAt().toString(16));
// console.log(result); // [ '1d7d8', '1d7d9', '1d7da', '1d7db' ]

// // iterable object
// // Map([[key1, value1], [key2, value2]])
// const map = new Map([[1, 2], [2, 4]])
// console.log(map);
// // Map(2) { 1 => 2, 2 => 4 }

// map.set('a', 10); // .set(key, value)
// console.log(map);
// // Map(3) { 1 => 2, 2 => 4, 'a' => 10 }
// console.log(Array.from(map));
// // [ [ 1, 2 ], [ 2, 4 ], [ 'a', 10 ] ]

// // array-like
// function addString() {
//   // console.log(arguments);
//   // // [Arguments] { '0': 1, '1': 2, '2': 3 }
//   // console.log(Array.isArray(Array.from(arguments)));
//   // // true
//   return Array.from(arguments).join('')
// }
// console.log(addString('a', 'b', 'c')); // abc
// console.log(addString(1, 2, 3)); // 123 // string

// // create array-like object => array
// console.log(Array.from({ length: 5 }, (item, index) => index));
// // [ 0, 1, 2, 3, 4 ]

// const createRange = (start, end, step) => {
//   return Array.from({ length: (end - start) / step + 1 }, (item, index) => {
//     return start + (index * step);
//   })
// };
// console.log(createRange(0, 4, 1))
// // [ 0, 1, 2, 3, 4 ]
// console.log(createRange(1, 10, 2))
// // [ 1, 3, 5, 7, 9 ]


// index
// let arr = [1, 'a', 2, 'b', 3, 'a'];
// console.log(arr.length); // 6

// indexOf()/lastIndexOf()
// console.log(arr.indexOf('a')); // 1
// console.log(arr.lastIndexOf('a')); // 5
// console.log(arr.indexOf('a', Math.floor(arr.length / 2))); // 5
// console.log(arr.lastIndexOf('a', Math.floor(arr.length / 2))); // 1


// arr.find(function(item, index, array), thisArg)
// let arr = [1, 'a', 2, 'b', 3, 'a'];
// console.log(arr.find((item, index, array) => {
//   if (index > Math.floor(array.length / 2) && item === 'a') {
//     // return index; // it won't work
//     return item; // find() always return item
//   }
// }));
// // a
// console.log(arr.find((item, index, array) => {
//   return index > Math.floor(array.length / 2) && item === 'a'
// }));
// // a

// arr.findIndex(function(item, index, array), thisArg)
// let arr = [1, 'a', 2, 'b', 3, 'a'];
// console.log(arr.findIndex((item, index, array) => {
//   return index > Math.floor(array.length / 2) && item === 'a'
// }));
// // 5

// arr.some(function(item, index, array), thisArg)
// let arr = [1, 'a', 2, 'b', 3, 'a'];
// console.log(arr.some((item, index) => item === 'a' && index === 5)) // true

// arr.every(function(item, index, array), thisArg)
// let arr = [1, 'a', 2, 'b', 3, 'a'];
// console.log(arr.every((item) => typeof item === 'string')); // false
// arr = ['a', 'b', 'c'];
// console.log(arr.every((item) => typeof item === 'string')); // true

// includes()
// let arr = ['a', 'a', 1, 2, 3];
// console.log(arr.includes('a', Math.floor(arr.length / 2))); // false

// // every()
// function arrayElementsEqual(arr1, arr2) {
//   return arr1.length === arr2.length
//     && arr1.every((item, index) => item === arr2[index])
// }
// console.log(arrayElementsEqual([1, 'a'], [1, 'a'])); // true

// arr.at(index)
// let arr = ['a', 'a', 1, 2, 3];
// console.log(arr.at()); // a
// console.log(arr.at(0)); // a
// console.log(arr.at(-1)); // 3
// console.log(arr[arr.length - 1]); // 3

// arr.flat()
// let arr = [0, [1, 2], [[3, 4]], [[[5], 6]]];
// console.log(arr.flat());
// // [ 0, 1, 2, [ 3, 4 ], [ [ 5 ], 6 ] ]
// console.log(arr.flat(1));
// // [ 0, 1, 2, [ 3, 4 ], [ [ 5 ], 6 ] ]
// console.log(arr.flat(2));
// // [
// //   0, 1, 2,
// //   3, 4, [5],
// //   6
// // ]
// console.log(arr.flat(3));
// // [
// //   0, 1, 2, 3,
// //   4, 5, 6
// // ]

// function flatArr(arr) {
//   let depth = 0
//   let type = Object.prototype.toString
//   arr.forEach((item) => type.call(item).includes('Array') ? depth++ : null)
//   return arr.flat(depth);
// }
// console.log(flatArr(arr));
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]

// arr.flatMap(function(currentValue, index, array), thisArg)
// let arr = [1, 2, 3, 4];
// let arrSqrt = arr.map((item) => [item ** 2]);
// console.log(arrSqrt);
// // [ [ 1 ], [ 4 ], [ 9 ], [ 16 ] ]
// console.log(arrSqrt.flat(1));
// // [ 1, 4, 9, 16 ]
// console.log(arr.flatMap((item) => [item ** 2]));
// // [ 1, 4, 9, 16 ]

// console.log(arr.flatMap((item) => [[item * 10]]))
// // [ [ 10 ], [ 20 ], [ 30 ], [ 40 ] ]

// undefined & empty slot
// Object.hasOwn(arr, index)
// let arr = [1, undefined, 'a'];
// console.log(Object.hasOwn(arr, 1)); // true
// arr = [1, , 'a'];
// console.log(Object.hasOwn(arr, 1)); // false

// skip
// let arrUndefined = [undefined, 'a'];
// let arrEmptySlot = [, 'a'];

// // forEach()
// arrUndefined.forEach((item) => console.log(item));
// // undefined
// // a
// arrEmptySlot.forEach((item) => console.log(item));
// // a

// // filter()
// console.log(arrUndefined.filter((item) => item));
// // [ 'a' ]
// console.log(arrUndefined.filter((item) => item === undefined));
// // [ undefined ]
// console.log(arrEmptySlot.filter((item) => item));
// // [ 'a' ]

// // reduce()
// console.log(arrUndefined.reduce((a, b) => a + b));
// // undefineda
// console.log(arrEmptySlot.reduce((a, b) => a + b));
// // a

// // some()
// console.log(arrUndefined.some((item) => item !== 'a'));
// // true
// console.log(arrEmptySlot.some((item) => item !== 'a'));
// // false

// // every()
// console.log(arrUndefined.every((item) => item === 'a'));
// // false
// console.log(arrEmptySlot.every((item) => item === 'a'));
// // true

// 
// let arrUndefined = [undefined, 'a'];
// let arrEmptySlot = [, 'a'];

// Keep
// map()
// console.log(arrUndefined.map((item) => item));
// // [ undefined, 'a' ]
// console.log(arrEmptySlot.map((item) => item));
// // [ <1 empty item>, 'a' ]
// console.log(arrUndefined.map((item) => 'abc'));
// // [ 'abc', 'abc' ]
// console.log(arrEmptySlot.map((item) => 'abc'));
// // [ <1 empty item>, 'abc' ]

// Iterate
// Array.from()
// console.log(Array.from(arrUndefined));
// // [ undefined, 'a' ]
// console.log(Array.from(arrEmptySlot));
// // [ undefined, 'a' ]

// // Spread Syntax
// console.log([...arrUndefined]);
// // [ undefined, 'a' ]
// console.log([...arrEmptySlot]);
// // [ undefined, 'a' ]

// // fill()
// console.log(arrUndefined.fill('abc'));
// // [ 'abc', 'abc' ]
// console.log(arrEmptySlot.fill('abc'));
// // [ 'abc', 'abc' ]

// Copy
// arr.copyWithin(targetIndex[, startIndex[, endIndex]]) // not including end
// console.log([0, 1, 2, 3].copyWithin(0, 3)); // [ 3, 1, 2, 3 ]
// console.log([0, 1, 2, 3].copyWithin(0, 1, 3)); //  1, 2, 2, 3 ]
// console.log(arrUndefined.copyWithin(1, 0, 1));
// // [ undefined, undefined ]
// console.log(arrEmptySlot.copyWithin(1, 0, 1));
// // [ <2 empty items> ]

// They are empty in String
// let arr = ['', undefined, null, , 'a'];
// console.log(arr.join('.')); // ....a
// console.log(arr.toString()); // ....a


// indexOf()/lastIndexOf()
// let arr = ['', undefined, null, , 'a'];
// console.log(arr.indexOf(null)); // 2
// console.log(arr.lastIndexOf(undefined)); // 1

// console.log(arr.indexOf('')); // 0
// console.log(arr.lastIndexOf('')); // 0
// console.log(arr.indexOf()); // 1
// console.log(arr.lastIndexOf()); // 1
// // // note: indexOf() and lastIndexOf() can not find out empty slot
// // // note: they treat undefined as empty

// // find()
// console.log(arr.find((item) => item)); // a
// console.log(arr.find((item) => item === null)); // null
// console.log(arr.find((item) => item === undefined)); // undefined
// console.log(arr.find((item) => item === '')); // ''

// arr = [1, , 'a']
// console.log(arr.find((item) => true)); // 1
// arr = [, 'a']
// console.log(arr.find((item) => true)); // undefined
// arr = [, 'a']
// console.log(arr.find((item) => item === undefined)); // undefined
// // note: find() treats empty slot as undefined, a real value

// findIndexOf()
// let arr = ['', undefined, null, , 'a'];
// console.log(arr.findIndex((item) => item)); // 4
// console.log(arr.findIndex((item) => item === null)); // 2
// console.log(arr.findIndex((item) => item === undefined)); // 1
// console.log(arr.findIndex((item) => item === '')); // 0

// arr = [, 'a']
// console.log(arr.findIndex((item) => item === undefined)); // 0
// arr = ['a', undefined]
// console.log(arr.findIndex((item) => item === undefined)); // 1
// // note: findIndexOf() also treats empty slot as undefined

// includes()
// let arr = ['', undefined, null, , 'a'];
// console.log(arr.includes(null)); // true
// console.log(arr.includes(undefined)); // true
// console.log(arr.includes('')); // true

// arr = [, 'a'];
// console.log(arr.includes()); // true
// arr = [undefined, 'a']
// console.log(arr.includes()); // true
// arr = [null]
// console.log(arr.includes()); // false
// // note: includes() treats empty slot and undefined as empty, but null is null

// at()
// let arr = ['', undefined, null, , 'a'];
// console.log(arr.at(0)); // ''
// console.log(arr.at(1)); // undefined
// console.log(arr.at(2)); // null
// console.log(arr.at(3)); // undefined

// console.log(arr.at(3) === undefined); // true

// // only includes() and find NaN
// let arr = [NaN];
// console.log(arr.indexOf(NaN)); // -1
// console.log(arr.lastIndexOf(NaN)); // -1
// console.log(arr.find((item) => item === NaN)); // undefined
// console.log(arr.findIndex((item) => item === NaN)); // -1

// console.log(arr.includes(NaN)); // true


// // practices
// // shuffle an arr
// // function shuffle(arr) {
// //   arr.sort(() => Math.random() - 0.5);
// // }

// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let arr = [1, 2, 3];
//   shuffle(arr)
//   count[arr.join('')]++;
// }

// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }
// // 123: 374675
// // 132: 62596
// // 213: 125113
// // 231: 62539
// // 312: 62586
// // 321: 312491

// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
// }
// // 123: 166666
// // 132: 166429
// // 213: 167335
// // 231: 166500
// // 312: 166718
// // 321: 166352

// filter unique array members
// function unique(arr) {
//   let result = [];
//   for (let str of arr) {
//     // if result have no same name, push it
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }
//   return result;
// }
// let strings = ['Hare', 'Krishna', 'Hare', 'Krishna',
//   'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'
// ];

// console.log(unique(strings));
// // [ 'Hare', 'Krishna', ':-O' ]

// // Be careful of performance problem
// let result = [];
// strings.forEach((item) => {
//   if (!result.includes(item)) {
//     result.push(item);
//   }
// });
// console.log(result);
// // [ 'Hare', 'Krishna', ':-O' ]

// create keyed object from array
let users = [
  { id: 'Jon', name: 'Jon Snow', score: 90 },
  { id: 'Robin', name: 'Robin Stark', score: 75 },
  { id: 'Sansa', name: 'Sansa Stark', score: 80 },
  { id: 'Arya', name: 'Arya Stark', score: 100 },
  { id: 'Bran', name: 'Bran Stark', score: 120 },
  { id: '', name: '', score: 1000 }
];

let usersById = groupByID(users);

function groupByID(arr) {
  return arr.reduce((obj, currentItem) => {
    obj[currentItem.id] = currentItem;
    return obj;
  }, {})
}

console.log(usersById);
// {
//   Jon: { id: 'Jon', name: 'Jon Snow', score: 90 },
//   Robin: { id: 'Robin', name: 'Robin Stark', score: 75 },
//   Sansa: { id: 'Sansa', name: 'Sansa Stark', score: 80 },
//   Arya: { id: 'Arya', name: 'Arya Stark', score: 100 },
//   Bran: { id: 'Bran', name: 'Bran Stark', score: 120 },
//   '': { id: '', name: '', score: 1000 }
// }

