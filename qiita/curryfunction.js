const add = function (x) {
  console.log(x)
  return function (y) {
    console.log(x, y)
    return x + y
  }
}

let increment = add(1)
let addTen = add(10)

console.log(increment(2)) // 3
console.log(addTen(2)) // 12

// 1 // increment = add(1), log x
// 10 // addTen = add(10), log x

// 1 2 // increment(2), log x, y
// 3 // increment(2), log x + y

// 10 2 // addTen(2), log x, y
// 12 // addTen(2), log x + y

// note: 'add' accepts one params and return function
// note: return value will save in the closure and keep 'add's first params

// compare
console.log(add(1)(2)) // 3
console.log(add(10)(2)) // 12

// 1 // add(1)(2), log x
// 1 2 // add(1)(2), log x, y
// 3 // add(1)(2), log x + y

// 10 // add(10)(2), log x
// 10 2 // add(10)(2), log x, y
// 12 // add(10)(2), log x + y


// Non-curried version
const addNum = (a, b, c) => {
  return a + b + c
}
// console.log(addNum(2, 3, 5)) // 10

// Curried version
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}
// console.log(addCurry(2)(3)(5)) // 10

const addFirstArgument = addCurry(2)
console.log(addFirstArgument(3)(5)) // 10
const addSecondArgument = addFirstArgument(3)
console.log(addSecondArgument(5)) // 10


const saveOneArgument = addCurry(10)
console.log(saveOneArgument(20)(30)) // 60


// Basic curring example
const obj = {
  greeting: ['Hi', 'Hello', 'Hey'],
  guest: ['Mary', 'Mick', 'Lucy', 'Daisy'],
  message: 'Welcome to the internet!'
}

const greetings = obj.greeting
const guests = obj.guest

function radom(range) {
  return Math.floor(Math.random() * range)
}

// function Welcome(greet) {
//   return function (name) {
//     return function (message) {
//       return `${greet} ${name}, ${message}`
//     }
//   }
// }

// Modern currying with ES6
const Welcome = greet => name => message =>
  `${greet} ${name} ${message}`

// console.log(Welcome(greetings[radom(greetings.length)])(guests[radom(guests.length)])(obj.message))

const sendGreet = Welcome(greetings[radom(greetings.length)])
const sendName = sendGreet(guests[radom(guests.length)])
const sendMessage = sendName(obj.message)
console.log(sendMessage)


// Non-curried version
// function fetchData(path, handler) {
//   const xmlHttp = new XMLHttpRequest()
//   const result = {}

//   xmlHttp.open("GET", path, false)
//   xmlHttp.send(null)
//   result = JSON.parse(xmlHttp.responseText)
//   handler(result.data)
// }

// function showResult(result) {
//   console.log('The result is: ' + result)
// }

// const path = 'http://www.json-generator.com/api/json/get/bPQMSaHjsi?indent=2'
// fetchData(path, showResult)

// Curried version
// function curriedFetchData(path) {
//   const xmlHttp = new XMLHttpRequest()
//   const result = {}

//   // get and parse Data
//   xmlHttp.open('GET', path, false)
//   xmlHttp.send(null)
//   result = JSON.parse(xmlHttp.responseText)

//   // handle data by function and return
//   return function (_callback) {
//     _callback(result.data)
//   }
// }

// function showResult(result) {
//   console.log('The result is: ' + result)
// }

// const path = 'http://www.json-generator.com/api/json/get/bPQMSaHjsi?indent=2'

// const getData = curriedFetchData(path)
// getData(showResult)


// Currying vs. partial application
const addPartial = (x, y, z) => {
  console.log(x, y, z)
  return x + y + z
}

const partialFunc = addPartial.bind(this, 2, 3)
console.log(partialFunc())
// 2 3 undefined
// NaN
console.log(partialFunc(5))
// 2 3 5
// 10


// Closure
// const closureFunction = someVariable => {
//   let scopedVariable = someVariable

//   const closure = () => {
//     scopedVariable++
//     console.log(scopedVariable)
//   }

//   return closure
// }

// let testOne = closureFunction(1)
// testOne() // 2
// testOne() // 3

// let testTwo = closureFunction(10)
// testTwo() // 11
// testTwo() // 12

// testOne() // 4

let scopedVariable = 0

const closureTest = function closure() {
  scopedVariable++
  console.log(scopedVariable)
}

closureTest() // 2
closureTest() // 3

scopedVariable = 10
closureTest() // 11
closureTest() // 12



// function outerFn() {
//   var a = 1
//   function innerFn() {
//     var b = 2
//     console.log('a:', a, 'b:', b, 'a+b:', a + b)
//   }
//   innerFn()
// }

// outerFn() // a: 1 b: 2 a+b: 3


// function outerFn(a) {
//   const b = a * 2
//   function innerFn(c) {
//     console.log('innerFn a:', a) // innerFn a: 5
//     console.log('innerFn b:', b) // innerFn b: 10
//     console.log('innerFn c:', c) // innerFn c: 30
//   }
//   innerFn(b * 3)
//   console.log('outerFn a:', a) // outerFn a: 5
//   console.log('outerFn b:', b) // outerFn b: 10
//   console.log('outerFn c:', c) // ReferenceError: c is not defined
// }

// outerFn(5)
// innerFn a: 5
// innerFn b: 10
// innerFn c: 30
// outerFn a: 5
// outerFn b: 10
// ReferenceError: c is not defined


// function outerFn(a) {
//   const b = a * 2
//   console.log('outerFn a:', a) // innerFn a: 3
//   console.log('outerFn b:', b) // innerFn b: 6
//   function innerFn(c) {
//     const b = a * 10
//     console.log('innerFn a:', a) // innerFn a: 3
//     console.log('innerFn b:', b) // innerFn b: 30
//   }
//   innerFn(b * 3)
// }

// outerFn(3)


function outerFn() {
  const a = 1
  return function innerFn() {
    console.log('innerFn a:', a)
  }
}

const test = outerFn()
test()
