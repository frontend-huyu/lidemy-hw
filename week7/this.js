// default this context
const myFunction = function () {
  console.log(this)
}
// myFunction() // Object [global]
// this refers to window

// object literals
// const a = 1
// const myMethod = function () {
//   const a = 2
//   console.log(this.a)
// }

// const myObject = {
//   a: 3,
//   myMethod: myMethod
// }
// myMethod() // undefined
// // this refers to window
// // note: there dose not exist a variable called 'a' in window object

// myObject.myMethod() // 3
// // this refers to myObject


// Explicit binding
const myMethod = function (a, b, c) {
  console.log(this)
  console.log(a * b * c)
}

const myObject = {
  myMethod: myMethod
}

myMethod() // window // NaN
myMethod.call(myObject, 1, 2, 3) // myObject // 6
myMethod.apply(myObject, [4, 5, 6]) // myObject // 120

// another example
const DOMObject = {
  length: 2,
  0: 'fisrt',
  1: 'second'
}
