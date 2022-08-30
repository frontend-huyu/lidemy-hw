// let id = Symbol('id');
// console.log(id); // Symbol(id) // Symbol

// const obj = {
//   toString() {
//     return 123;
//   },
// };
// const sym = Symbol(obj);
// console.log(sym); // Symbol(123)

// let id1 = Symbol('id');
// let id2 = Symbol('id');
// console.log(id1 === id2); // false

// let id = Symbol('id');

// console.log(id); // Symbol(id) // Symbol
// console.log(id.toString()); // Symbol(id) // string
// console.log(String(id)); // Symbol(id) // string
// console.log(id.description); // id // string

// let id = Symbol('id');
// let id1 = Symbol('id');

// let user1 = {
//   name: 'Mick',
//   id: 1,
// };
// user1[id] = 1;
// user1[id1] = 2;
// console.log(user1)
// { name: 'Mick', id: 1, [Symbol(id)]: 1, [Symbol(id)]: 2 }

// let user2 = {
//   name: 'Lucy',
//   [id]: 2,
// };

// let user3 = {};
// Object.defineProperty(user3, id, { value: 3 });
// console.log(user3[id]); // 3

// const log = {};
// log.level = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn'),
// };
// console.log(log.level.DEBUG.description); // debug

// const colorRed = Symbol();
// const colorGreen = Symbol();

// function getColor(color) {
//   switch (color) {
//     case colorRed:
//       return 'Red';
//     case colorGreen:
//       return 'Green';
//     default:
//       throw new Error('Undefined color');
//   }
// }

// console.log(getColor(colorRed)); // Red

// const shapeType = {
//   triangle: Symbol(),
// };

// function getArea(shape, { width, height } = {}) {
//   let area = 0;
//   switch (shape) {
//     case shapeType.triangle:
//       area = 0.5 * width * height;
//       break;
//   }
//   return area;
// }
// console.log(getArea(shapeType.triangle, { width: 100, height: 100 })); // 5000

// let a = Symbol('foo');
// let b = Symbol('bar');

// let obj = {
//   [a]: 'foo',
//   [b]: 'bar',
// };

// for (let prop in obj) {
//   console.log(prop); // nothing happens
// };

// console.log(Object.getOwnPropertyNames(obj)); // []
// console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(foo), Symbol(bar) ]
// console.log(Reflect.ownKeys(obj)); // [ Symbol(foo), Symbol(bar) ]

// let size = Symbol('size');

// class Collection {
//   constructor() {
//     this[size] = 0;
//   }

//   add(item) {
//     // this[this[size]] => this.0 // this[size] = 0, ...etc.
//     this[this[size]] = item;
//     console.log(this[this[size]]);
//     this[size] += 1;
//   }

//   static sizeOf(instance) {
//     return instance[size];
//   }
// }

// let x = new Collection();
// console.log(Collection.sizeOf(x)); // 0
// console.log(Object.getOwnPropertySymbols(x)); // [ Symbol(size) ]
// console.log(x); // Collection { [Symbol(size)]: 0 }

// x.add('foo');
// console.log(Collection.sizeOf(x)); // 1
// console.log(Object.getOwnPropertySymbols(x)); // [ Symbol(size) ]
// console.log(x); // Collection { '0': 'foo', [Symbol(size)]: 1 }

// console.log(Object.keys(x)); // [ '0' ]
// console.log(Object.getOwnPropertyNames(x)); // [ '0' ]

// let s1 = Symbol.for('foo');
// let s2 = Symbol.for('foo');
// console.log(s1 === s2);

// let s1 = Symbol.for('foo');
// {
//   let s2 = Symbol.for('foo');
//   console.log(s1 === s2); // true
// };

// let s1 = Symbol.for('foo');
// console.log(Symbol.keyFor(s1)); // foo

// let s2 = Symbol('foo');
// console.log(Symbol.keyFor(s2)); // undefined

// const fooKey = Symbol.for('foo');
// const fooKey = Symbol('foo');

// function A() {
//   this.foo = 'hello';
// }

// // if global[Symbol.for('foo')] doesn't exist, set property and value
// if (!global[fooKey]) {
//   global[fooKey] = new A();
// }
// const globalSymbol = global[fooKey];
// export default globalSymbol;

// import globalSymbol from "./symbol.js";

// Symbol.for()
// console.log(globalSymbol); // A { foo: 'hello' }
// console.log(global[Symbol.for('foo')]); // A { foo: 'hello' }
// console.log(globalSymbol === global[Symbol.for('foo')]); // true

// global[Symbol.for('foo')] = { foo: 'world' };
// console.log(global[Symbol.for('foo')]); // { foo: 'world' }
// console.log(globalSymbol === global[Symbol.for('foo')]); // false

// Symbol()
// console.log(globalSymbol); // A { foo: 'hello' }
// console.log(global[Symbol.for('foo')]); // undefined
// console.log(globalSymbol === global[Symbol.for('foo')]); // false

// class Myclass {
//   [Symbol.hasInstance](instance) {
//     return instance instanceof Array;
//   }
// }
// console.log([1, 2, 3] instanceof new Myclass()); // true

// class Even {
//   static [Symbol.hasInstance](item) {
//     return Number(item) % 2 === 0;
//   }
// }
// console.log(1 instanceof Even); // false
// console.log(2 instanceof Even); // true
// //
// const Even = {
//   [Symbol.hasInstance](item) {
//     return Number(item) % 2 === 0;
//   }
// };
// console.log(1 instanceof Even); // false
// console.log(2 instanceof Even); // true

// class MyArray extends Array {
//   static get [Symbol.species]() {
//     return Array;
//   }
// }
// const a = new MyArray(1, 2, 3);
// const b = a.map(x => x);
// const c = a.filter(x => x > 1);

// console.log(b instanceof MyArray); // false
// console.log(c instanceof MyArray); // false
// console.log(b instanceof Array); // true
// console.log(c instanceof Array); // true

let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error('It is not number, string, or default.');
    }
  }
};

console.log(10 * obj); // 1230
console.log(3 + obj); // 3default
console.log('123' + obj); // 123default
// console.log(obj == 'default'); // Error: It is not number, string, or default.
console.log(String(obj)); // 'str'
