// function waitThreeSeconds() {
//   let ms = 3000 + new Date().getTime()
//   while (new Date() < ms) { }
//   console.log('finished function')

// }

// function clickHandler() {
//   console.log('click event!')
// }

// document.addEventListener('click', clickHandler)
// console.log('started execution')
// waitThreeSeconds()
// console.log('finished execution')

// let a = 5 * 2 + 6 / 3 - 2
// console.log(a) // 10
// // Addition (+): 11, left-to-right
// // Subtraction (-): 11, left-to-right
// // Multiplication (*): 12, left-to-right
// // Division (/): 12, left-to-right
// // 10 + 2 - 2 => 12 - 2 => 10

// let b = 1
// let c = 2
// let d = 3
// b = c = d
// console.log(b) // 3
// console.log(c) // 3
// console.log(d) // 3
// // Assignment (=): 2, right-to-left
// // d => c => b

// let e = 1 + '2'
// console.log(e) // 12 // string
// e = 1 + '2' + 3
// console.log(e) // 123 // string
// e = '2' + 3
// console.log(e) // 23 // string

// function sayHi(name) {
//   name = name || 'Anonymous'
//   console.log(`Hi, ${name}`)
// }
// sayHi('Taro') // Hi, Taro
// sayHi() // Hi, Anonymous


// // logical OR (||)
// let f = false || []
// console.log(f) // []
// // [] is falsy value

// f = true || false && false
// console.log(f) // true
// // Logical OR (||): 3, left-to-right
// // Logical AND (&&): 4, left-to-right
// // false && false => false, true || false => true

// f = (true || false) && false
// console.log(f) // false
// // Grouping (()): 18, n/a
// // (true || false) => (true), true && false => false => return value2
// f = true && false // false => return value2
// console.log(f) // false

// let g = 1 && 0 // truthy && falsy => false => return value2
// console.log(g) // 0
// g = 0 && [] // falsy && falsy => true => return value1
// console.log(g) // 0
// g = 1 && 2 // 1 && 2 => Disjoint sets(false) => return value2
// console.log(g) // 2
// g = [123] && 123 // Disjoint sets(false) => return value2
// console.log(g) // 123 
// g = 1 && '1' // Disjoint sets(false) => return value2
// console.log(g) // '1'

// g = (1 > 0) && (-1 < 0) // true && true => return value1
// console.log(g) // true


// first class
// let firstClass = function () {
//   console.log('firstClass')
// }
// firstClass() // firstClass

// let functions = {
//   sayHey: function (name) {
//     console.log(`Hey, ${name}`)
//   },
//   sayBey: function (name) {
//     console.log(`Bey , ${name}`)
//   }
// }
// functions.sayHey('Taro') // Hey, Taro
// functions.sayBey('Taro') // Bey, Taro
// let item = 'sayHey'
// functions[item]('Jiro') // Hey, Jiro

// let arr = [functions, function () { console.log('fn in arr') }]
// arr[0][item]('Saburo') // Hey, Saburo
// arr[1]() // fn in arr


// function add(a, b) {
//   return a + b
// }

// function doSomething(fn, num1, num2) {
//   return fn(num1, num2)
// }

// console.log(doSomething(add, 1, 2)) // 3

// let obj = {
//   myId: 1,
//   add: add,
//   objOwnMethod: function () {
//     console.log('objOwnMethod')
//   }
// }

// console.log(obj.hasOwnProperty('myId')) // true
// console.log(obj.hasOwnProperty('add')) // true
// console.log(obj.hasOwnProperty('objOwnMethod')) // true
// console.log(Object.getOwnPropertyNames(obj)) // [ 'myId', 'add', 'objOwnMethod' ]

// function demoForProperties(age) {
//   this.age = age
// }
// console.log(demoForProperties.hasOwnProperty('age')) // false
// console.log(Object.getOwnPropertyNames(demoForProperties))
// // [ 'length', 'name', 'arguments', 'caller', 'prototype' ]

// let demo = new demoForProperties(18)
// console.log(demo.hasOwnProperty('age')) // true
// console.log(Object.getOwnPropertyNames(demo)) // [ 'age' ]
// console.log(demo) // demoForProperties { age: 18 }

// function print(fn) {
//   fn()
// }

// print(function () {
//   console.log('Hello!')
// })
// // Hello!


// about this
// const obj = {
//   name: 'It is obj',
//   print: function () {
//     this.name = 'It is print fn'
//     console.log(this)

//     // function setNewName(newName) {
//     //   this.name = newName
//     //   console.log(this) // Object [global]
//     // }
//     const setNewName = (newName) => {
//       this.name = newName
//       console.log(this)
//     }

//     setNewName('It is newName fn')
//     console.log(this)
//   }
// }

// obj.print()
// { name: 'It is print fn', print: [Function: print] }
// Object [global] // create new property 'name' in global
// { name: 'It is print fn', print: [Function: print] }

// obj.print()
// { name: 'It is print fn', print: [Function: print] }
// { name: 'It is newName fn', print: [Function: print] }
// { name: 'It is newName fn', print: [Function: print] }


// const obj = {
//   name: 'It is obj',
//   print: function () {
//     const saveThis = this // *

//     this.name = 'It is print fn'
//     console.log(this)

//     function setNewName(newName) {
//       saveThis.name = newName  // *
//       console.log(this) // Object [global]
//     }

//     setNewName('It is newName fn')
//     console.log(this)
//   }
// }

// obj.print()
// // { name: 'It is print fn', print: [Function: print] }
// // Object [global]
// // { name: 'It is newName fn', print: [Function: print] }

// let a = []
// console.log(typeof a) // object
// console.log(Object.prototype.toString.call(a)) // [object Array]

// a = new Promise(resolve => { })
// console.log(typeof a) //object
// console.log(Object.prototype.toString.call(a)) // [object Promise]

// a = undefined
// console.log(typeof a) //undefined
// console.log(Object.prototype.toString.call(a)) // [object Undefined]

// a = null
// console.log(typeof a) //object
// console.log(Object.prototype.toString.call(a)) // [object Null


// functional programming
// let arr1 = [1, 2, 3]

// function mapItem(arr, fn) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(fn(arr[i]))
//   }
//   return newArr
// }

// let arr2 = mapItem(arr1, function (item) {
//   return item * 2
// })
// console.log(arr2) // [ 2, 4, 6 ]

// let arr3 = mapItem(arr2, (item) => item > 2)
// console.log(arr3) // [ false, true, true ]


// let checkLimiter = function (limiter, item) { // two parameters
//   return item < limiter
// }

// let arr4 = mapItem(arr1, checkLimiter)
// console.log(arr4) // [ false, false, false ]
// the second parameter 'item' is undefined


// by bind()
// let arr4 = mapItem(arr1, checkLimiter.bind(this, 3))
// console.log(arr4) // [ true, true, false ]

// let checkLimiterSimplified = (limiter) => {

//   return function (limiter, item) {
//     return item < limiter
//   }.bind(this, limiter)

// }

// let arr5 = mapItem(arr1, checkLimiterSimplified(3))
// console.log(arr5) // [ true, true, false ]


// by closure
// let checkLimiterSimplified = (limiter) => {

//   return function (item) {
//     return item < limiter
//   }

// }

// let arr6 = mapItem(arr1, checkLimiterSimplified(3))
// console.log(arr6) // [ true, true, false ]

function demoForProperties(age) {
  this.age = age
  console.log(this)
}
console.log(demoForProperties.hasOwnProperty('age')) // false
console.log(Object.getOwnPropertyNames(demoForProperties))
// [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
demoForProperties() // Object [global]