console.log('typeof true', typeof true) // boolean
console.log('typeof 30', typeof 30) // number
console.log('typeof 0.5', typeof 0.5) // number
console.log('typeof "hello"', typeof 'hello') // string
console.log('typeof "30"', typeof '30') // string

console.log('typeof BigInt', typeof BigInt) // function
// console.log('typeof BigInt', typeof 'BigInt') // string
console.log('typeof BigInt', typeof 1n) // bigint
console.log('typeof BigInt', typeof BigInt('1')) // bigint
console.log('typeof BigInt', typeof Object(1n)) // bigint

console.log('typeof Symbol', typeof Symbol) // function
// console.log('typeof Symbol', typeof 'Symbol') // string
let sym = Symbol('abc')
console.log('typeof Symbol', typeof Symbol('foo')) // symbol
console.log('typeof Symbol', typeof sym) // symbol
console.log('typeof Symbol', typeof Object(sym)) // object

console.log('typeof [1]', typeof [1]) // object
console.log('typeof {a: 1}', typeof { a: 1 }) // object
console.log('typeof null', typeof null) // object

console.log('typeof undefined', typeof undefined) // undefined

console.log('typeof NaN', typeof NaN) // number

console.log('typeof function', typeof function () { }) // function
let fn = function () {
  return
}
console.log('typeof function', typeof fn) // function


// Primitive values: Boolean, Number, String, "BigInt", "Symbol", "undefined", "null"
// Objects: Array, Object, function
