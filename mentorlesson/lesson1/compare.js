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

// But if it's not Primitive type, even use '==', it won't be true
console.log([1] == [1]) // false // by sharing
console.log({ a: 1 } == { a: 1 }) // false // by sharing


// pass by value, pass by reference, pass by sharing -> [JS101]


// pass by value
// Primitive types: String, Number, Boolean, BigInt, Symbol
console.log('hello' === 'hello') // true
console.log(1 === 1) // true
console.log(true === true) // true
console.log(false === false) // true

// it's strange, still don't know how to explain
// typeof function, so it pass by sharing?
var hugeInteger = BigInt(9007199254740991)
var hugeString = BigInt('9007199254740991')
console.log(hugeInteger === hugeString) // true

// typeof function, so it pass by sharing?
console.log(Symbol('aaa') === Symbol('aaa')) // false
var sym1 = Symbol('bbb')
var sym2 = sym1
console.log(sym2 === sym1) // true


// no value: undefined & null
// undefined: variable has declared but has not yet been assigned a value
console.log(undefined === undefined) // true
// null: null is an assignment value, it can be assigned to variable as a representation of no value
console.log(null === null) // true


// pass by sharing
// Object type: Array, Object, function
// Array
var a = [1]
var b = [1]
var c = b
console.log(a == b) // false
console.log(b === c) // true

// Object
var d = {
  a: 1
}
var e = {
  a: 1
}
var f = e
console.log(d == e) // false
console.log(e === f) // true


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
