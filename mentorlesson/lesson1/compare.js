// JavaScript is Weakly type language.
var str = 'hello' + 'world' // 'helloworld'
var number = 10
number = number + '' // 10+''='10' 
// number.toString()

console.log(str) // 'helloworld'
console.log(number === '10') // true


// Difference between '==' and '==='
console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 === '1') // false

// So we shall always use '===' to check boolean
console.log(1 === 1) // true
console.log('hello' === 'hello') // true

// But if it's not Primitive type, even use '==', it doesn't be true
console.log([1] == [1]) // false // by reference
console.log({ a: 1 } == { a: 1 }) // false // by reference


// by value
// Primitive type: String, Number, Boolean, BigInt, Symbol, undefined
console.log('hello' === 'hello') // true
console.log(1 === 1) // true
console.log(true === true) // true
console.log(false === false) // true

var hugeInteger = BigInt(9007199254740991)
var hugeString = BigInt('9007199254740991')
console.log(hugeInteger === hugeString) // true

console.log(Symbol('aaa') === Symbol('aaa')) // false
var sym1 = Symbol('bbb')
var sym2 = sym1
console.log(sym2 === sym1) // true

console.log(undefined === undefined) // true

// null: null
console.log(null === null) // true


// by reference
// Object type: Array, Object, function
// Array
var a = [1]
var b = [1]
console.log(a == b) // false

// Object
var c = {
  a: 1
}
var d = {
  a: 1
}
console.log(c == d) // false

// function has special case
// function case1
function compare1() {
  return 1
}
function compare2() {
  return 1
}
console.log(compare1() === compare2()) // true
// case1 return the same value, so it's true

// function case2
function compare3() {
  console.log('string')
}
function compare4() {
  console.log('string')
}
console.log(compare3() === compare4()) // true
// it looks like case1, but case2 is something strange 

// function case3
function compare5() {
  console.log(123)
}
function compare6() {
  console.log('456')
}
console.log(compare5() === compare6()) // true
// case2 & case3: when we use console.log, even though value was not the same, it always be true.

// function case4
function compare7() {
  return '123'
}
function compare8() {
  return '456'
}
console.log(compare7() == compare8()) // false

// function case5
function compare9() {
  return 'ccc'
}
function compare10() {
  console.log('ccc')
}
console.log(compare9() == compare10()) // false
