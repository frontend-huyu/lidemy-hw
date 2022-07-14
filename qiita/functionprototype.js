// function Person() { }

// console.log(Person.prototype) // {}
// console.log(Person.__proto__) // {}

// console.log(Person.prototype === Person.__proto__) // false

// console.log(Person.prototype.__proto__) // [Object: null prototype] {}
// console.log(Person.__proto__.__proto__) // [Object: null prototype] {}

// console.log(Person.prototype.__proto__ === Person.__proto__.__proto__) // true

// console.log(Person.__proto__.__proto__ === Object.prototype) // true

// console.log(Person.prototype === Object.prototype) // false
// console.log(Person.prototype === Function.prototype) // false
// console.log(Person.prototype === {}) // false

// console.log(Person.prototype.constructor) // [Function: Person]

// function Person() { }
// const newPerson = new Person()

// console.log(Person.__proto__) // {}
// console.log(Person.prototype) // {}

// console.log(Person.__proto__ === Person.prototype) // false
// console.log(Person.__proto__ === Function.prototype) // true

// console.log(Object.getPrototypeOf(Person) === Person.prototype) // false
// console.log(Object.getPrototypeOf(Person) === Function.prototype) // true


//
// console.log(String.__proto__ === Function.prototype) // true
// console.log(Number.__proto__ === Function.prototype) // true
// console.log(BigInt.__proto__ === Function.prototype) // true
// console.log(Boolean.__proto__ === Function.prototype) // true
// // console.log(undefined.__proto__ === Function.prototype)
// // TypeError: Cannot read property '__proto__' of undefined
// console.log(Symbol.__proto__ === Function.prototype) // true
// // console.log(null.__proto__ === Function.prototype)
// // TypeError: Cannot read property '__proto__' of undefined

// console.log(Object.__proto__ === Function.prototype) // true
// console.log(Array.__proto__ === Function.prototype) // true
// console.log(Function.__proto__ === Function.prototype) // true

// console.log(Person.__proto__ === Person.prototype) // false
// console.log(Person.__proto__ === Function.prototype) // true

// console.log(Person.prototype) // {}
// console.log(Person.prototype.__proto__ === Object.prototype) // true
// console.log(Function.prototype.__proto__ === Object.prototype) // true
// // console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype) // true
// // console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype) // true
// console.log(Object.prototype.__proto__ === null) // true

//
// console.log(newPerson.__proto__ === Person.prototype) // true
// console.log(Object.getPrototypeOf(newPerson) === Person.prototype) // true

// instanceof
// console.log(Function.prototype instanceof Object) // true
function Person() { }
const newPerson = new Person()

console.log(String instanceof Function) // true
console.log(Number instanceof Function) // true
console.log(BigInt instanceof Function) // true
console.log(Boolean instanceof Function) // true
console.log(Symbol instanceof Function) // true

console.log(undefined instanceof Function) // false
console.log(null instanceof Function) // false


console.log(Array instanceof Function) // true
console.log(Object instanceof Function) // true
console.log(Function instanceof Function) // true

console.log(Person instanceof Function) // true
console.log(newPerson instanceof Function) // false


//
console.log(newPerson.prototype) // undefined
console.log(newPerson.__proto__) // {}
console.log(newPerson.__proto__ === Person.prototype) // true
console.log(newPerson instanceof Person) // true

console.log(newPerson.constructor) // [Function: Person]
// console.log(Person.constructor) // [Function: Function]

const str = '123'
console.log(str.prototype) // undefined
console.log(str.__proto__) // {}
console.log(str.__proto__ === String.prototype) // true
console.log(str instanceof String) // false
console.log(str.constructor) // [Function: String]

const arr = []
console.log(arr.prototype) // undefined
console.log(arr.__proto__) // Object(0) []
console.log(arr.__proto__ === Array.prototype) // true
console.log(arr instanceof String) // false
console.log(arr.constructor) // [Function: Array]

console.log(arr.__proto__.__proto__ === Object.prototype) // true

// prototype
// console.log(String.prototype) // {}
// console.log(Number.prototype) // {}
// console.log(BigInt.prototype) // Object [BigInt] {}
// console.log(Boolean.prototype) // {}
// // console.log(undefined.prototype)
// // TypeError: Cannot read property 'prototype' of undefined
// console.log(Symbol.prototype) // Object [Symbol] {}
// // console.log(null.prototype)
// // TypeError: Cannot read property 'prototype' of null

// console.log(Array.prototype) // Object(0) []
// console.log(Object.prototype) // [Object: null prototype] {}
// console.log(Function.prototype) // {}

// console.log(String.prototype === Number.prototype) // false
// console.log(String.prototype === Boolean.prototype) // false
// console.log(Number.prototype === Boolean.prototype) // false

// console.log(String.prototype === Function.prototype) // false
// console.log(Boolean.prototype === Function.prototype) // false
// console.log(Number.prototype === Function.prototype) // false


// //
// console.log(String.prototype === Function.prototype) // false
// console.log(Number.prototype === Function.prototype) // false
// console.log(BigInt.prototype === Function.prototype) // false
// console.log(Boolean.prototype === Function.prototype) // false
// console.log(Symbol.prototype === Function.prototype) // false

// console.log(Array.prototype === Function.prototype) // false
// console.log(Object.prototype === Function.prototype) // false

console.log(Person instanceof Function) // true
console.log(Object instanceof Function) // true
console.log(Function instanceof Object) // true
//
// console.log(String.prototype === Object.prototype) // false
// console.log(Number.prototype === Object.prototype) // false
// console.log(BigInt.prototype === Object.prototype) // false
// console.log(Boolean.prototype === Object.prototype) // false
// console.log(Symbol.prototype === Object.prototype) // false

// console.log(Array.prototype === Object.prototype) // false
// console.log(Function.prototype === Object.prototype) // false

// console.log(Object.getPrototypeOf(newPerson) === Person.prototype) // true
// console.log(newPerson.__proto__ === Person.prototype) // true
// console.log(newPerson.prototype) // undefined


// constructor
// console.log(String.constructor) // [Function: Function]
// console.log(Number.constructor) // [Function: Function]
// console.log(BigInt.constructor) // [Function: Function]
// console.log(Boolean.constructor) // [Function: Function]
// // console.log(undefined.constructor)
// // TypeError: Cannot read property 'constructor' of undefined
// console.log(Symbol.constructor) // [Function: Function]
// // console.log(null.constructor)
// //TypeError: Cannot read property 'constructor' of null

// console.log(Array.constructor) // [Function: Function]
// console.log(Object.constructor) // [Function: Function]
// console.log(Function.constructor) // [Function: Function]

// console.log(Person.constructor) // [Function: Function]
// console.log(Person.prototype.constructor) // [Function: Person]
// console.log(newPerson.constructor) // [Function: Person]

// Function.constructor = Person

// console.log(String.constructor)
// // [Function: Function] { constructor: [Function: Person] }
// console.log(Number.constructor)
// // [Function: Function] { constructor: [Function: Person] }
// console.log(BigInt.constructor)
// // [Function: Function] { constructor: [Function: Person] }
// console.log(Boolean.constructor)
// // [Function: Function] { constructor: [Function: Person] }
// console.log(Symbol.constructor)
// // [Function: Function] { constructor: [Function: Person] }

// console.log(Array.constructor)
// // [Function: Function] { constructor: [Function: Person] }
// console.log(Object.constructor)
// // [Function: Function] { constructor: [Function: Person] }
// console.log(Function.constructor)
// // [Function: Person]

// console.log(Person.constructor)
// // [Function: Function] { constructor: [Function: Person] }
// console.log(Person.prototype.constructor) // [Function: Person]
// console.log(newPerson.constructor)
// // [Function: Person]
