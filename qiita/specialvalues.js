// undeclared vs. undefined
// var a = 1 // declared global variable
// b = 2 // undeclared global variable

// console.log(b) // 2

// function test() {
//   c = 3
//   console.log(c)
// }

// test() // 3

// var x
// console.log(typeof x) // undefined

// let z
// console.log(typeof z) // undefined


// undefined vs. null
var a
console.log(a) // undefined

function logStr(str) {
  console.log(str)
}

logStr() // undefined

console.log(logStr())
// undefined // str is undefined
// undefined // return value is undefined
// function's return value, default value is 'undefined'

const obj = {}
logStr(obj.name) // undefined

// null
console.log(typeof null) // object
console.log(typeof undefined) // undefined

console.log(Object.getPrototypeOf(Object.prototype)) // null

const x = null

if (!x && typeof x === 'object') {
  console.log('Yes, you got a null')
}
// note: null is the only one object value in falsy value



// NaN
// console.log(typeof NaN) // number
// console.log(NaN === NaN) // false
// console.log(NaN == NaN) // false
// note: NaN is never equal to itself

// isNaN
// console.log(isNaN({})) // true
// console.log(isNaN([]))　// false

// console.log(isNaN(BigInt(9007199254740991)))
// console.log(isNaN(BigInt('9007199254740991')))
// TypeError: Cannot convert a BigInt value to a number

// console.log(isNaN(123)) // false
// console.log(isNaN(-1.23)) // false
// console.log(isNaN(1 - 3)) // false
// console.log(isNaN(0)) // false

// console.log(isNaN('')) // false // *string
// console.log(isNaN('123')) // false // *string
// console.log(isNaN('Hello')) // true
// console.log(isNaN('2022/07/05')) // true
// console.log(isNaN(true)) // false // *boolean
// console.log(isNaN(undefined)) // true // *undefined
// console.log(isNaN(null)) // false // *object

// console.log(isNaN(NaN)) // true
// console.log(isNaN('NaN')) // true


// console.log(isNaN(0 / 0)) // true
// console.log(isNaN(1 / 0)) // false // Infinity
// console.log(isNaN(Infinity / Infinity)) // true
// console.log(isNaN(Infinity / -Infinity)) // true

// console.log(Number({})) // NaN
// console.log(Number([])) // 0
// console.log(Number('')) // 0
// console.log(Number('123')) // 123
// console.log(Number(true)) // 1
// console.log(Number(undefined)) // NaN
// console.log(Number(null)) // 0

// Number.isNaN
// console.log(Number.isNaN({})) // false
// console.log(Number.isNaN([])) // false
// console.log(Number.isNaN(BigInt(9007199254740991))) // false
// console.log(Number.isNaN(BigInt('9007199254740991'))) // false

// console.log(Number.isNaN('')) // false
// console.log(Number.isNaN('123')) // false
// console.log(Number.isNaN(true)) // false
// console.log(Number.isNaN(null)) // false

// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN('NaN')) // false // *string

// console.log(Number.isNaN(0 / 0)) // true
// console.log(Number.isNaN(1 / 0))  // false // Infinity
// console.log(Number.isNaN(Infinity / Infinity)) // true
// console.log(Number.isNaN(Infinity / -Infinity)) // true


// negative-zero
console.log(0 === -0) // true

// console.log(1 / 0) // Infinity
// console.log(1 / -0) // -Infinity

const negativeZero = -0

function NegZero(num) {
  return num === 0 && (1 / num) === -Infinity
}

console.log(NegZero(negativeZero)) // true

// console.log(Object.is(negativeZero, 0)) // false
// console.log(Object.is(negativeZero, -0)) // true

console.log(Object.is(undefined, undefined)) // true
console.log(Object.is(null, null)) // true
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, +0)) // true
console.log(Object.is(-0, -0)) // true
