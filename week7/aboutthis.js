// default this context
// const myFunction = function () {
//   console.log(this)
// }
// myFunction()
// Object [global] === window
// this refers to window

// object literals
// const a = 1
// const myMethod = function () {
//   const a = 2
//   console.log(this.a)
//   console.log(this)
// }

// const myObject = {
//   a: 3,
//   myMethod: myMethod
// }
// myMethod()
// undefined
// Object [global] === window
// this refers to window
// note: there dose not exist a variable called 'a' in window object

// myObject.myMethod()
// 3
// { a: 3, myMethod: [Function: myMethod] } === myObject
// this refers to myObject

// multiple scopes
// const outerObject = {
//   name: 'Mick',
//   age: 20,
//   innerObject: {
//     name: 'Lucy',
//     age: 24,
//     fn: function () {
//       console.log(this.name, this.age)
//       console.log(this)
//     }
//   }
// }

// outerObject.innerObject.fn()
// Lucy 24
// { name: 'Lucy', age: 24, fn: [Function: fn] } === innerObject
// this refers to innerObject


// Explicit binding
// const myMethod = function (a, b, c) {
//   console.log(this)
//   console.log(a * b * c)
// }

// const myObject = {
//   myMethod: myMethod
// }

// myMethod() // Object [global] === window // NaN
// myMethod.call(myObject, 1, 2, 3) // myObject // 6
// myMethod.apply(myObject, [4, 5, 6]) // myObject // 120
// myMethod.call(null, 1, 2, 3) // Object [global] === window // 6
// myMethod.apply(null, [4, 5, 6]) // Object [global] === window // 120
// /* note:
// func.call([thisArg[, arg1, arg2, ...argN]])
// func.apply(thisArg, [argsArray])
// */

// // another example
// const DOMObject = {
//   length: 2,
//   0: 'first',
//   1: 'second'
// }

// console.log(Array.prototype.slice.call(DOMObject, 0, 2)) // [ 'first', 'second' ]
// console.log(Array.prototype.slice.apply(DOMObject, [0, 2])) // [ 'first', 'second' ]
// console.log([].slice.call(DOMObject, 0, 2)) // [ 'second' ]
// // note: [].slice.call(document.querySelectorAll('...'), arg1, arg2)
// console.log(Array.from(DOMObject)) // [ 'first', 'second' ]
// note: call(), apply() => function borrowing


// hard binding
// let myMethod = function () {
//   console.log(this.a)
//   console.log(this)
// }

// const obj1 = {
//   a: 2
// }

// const obj2 = {
//   a: 3
// }

// myMethod = myMethod.bind(obj1)
// myMethod()
// 2
// { a: 2 } === obj1
// this refers to obj1

// myMethod.call(obj2)
// 2
// { a: 2 } === obj1
// this still refers to obj1

// note: bind() -> function currying


// new instance
// function foo(something) {
//   this.name = 'foo'
//   this.a = something
//   console.log(this.name)
//   console.log(this.a)
//   console.log(this)
// }

// foo(2)
// foo
// 2
// Object [global] {..., name: 'foo', a: 2} === window
// this refers to window

// const f = new foo(5)
// foo
// 5
// foo { name: 'foo', a: 5 }
// this refers to foo itself

// console.log(f.name) // foo
// console.log(f.a) // 5

// 
// function foobar(something) {
//   this.a = something
//   console.log(this)
// }

// const obj = {}
// const fb = foobar.bind(obj)
// fb(2) // { a: 2 }
// console.log(obj.a) // 2

// note: it's similar to
// const obj = {}
// const { a } = obj
// obj.a = 2
// console.log(obj.a) // 2



// this in bind() & new
// function foo(something) {
//   this.a = something
// }

// const obj = {}
// const bar = foo.bind(obj)
// bar(2)
// console.log(obj.a) // 2

// const newBar = new bar(3)
// console.log(obj.a) // 2
// console.log(newBar.a) // 3


// arrow function as methods
// const myArrowMethod = () => {
//   console.log(this.name)
//   console.log(this)
// }

// const arrow = {
//   name: 'Luna',
//   myArrowMethod: myArrowMethod
// }
// myArrowMethod()
// undefined
// {} === window or Object [global]

// arrow.myArrowMethod()
// undefined
// {}

const arrow = {
  myArrowFunction: null,
  myArrowMethod: function () {
    this.myArrowFunction = () => {
      console.log(this)
    }
  }
}

// call `myArrowMethod` to initialize `myArrowFunction`
arrow.myArrowMethod()
// call `myArrowFunction` to print `this`
arrow.myArrowFunction()
// {
//   myArrowFunction: [Function(anonymous)],
//   myArrowMethod: [Function: myArrowMethod]
// }


const myArrowFunction = arrow.myArrowFunction
myArrowFunction()
// {
//   myArrowFunction: [Function(anonymous)],
//   myArrowMethod: [Function: myArrowMethod]
// }

// const myArrowFunction = () => {
//   console.log(this)
// }

// const myObject = {}

// myArrowFunction.call(myObject) // {} === window or Object [global]
// myArrowFunction.apply(myObject) // {} === window or Object [global]

// const myFunctionBound = myArrowFunction.bind(myObject)

// myFunctionBound() // {} === window or Object [global]

// const newFunction = new myArrowFunction()
// TypeError: myArrowFunction is not a constructor

// note: arrow functions can't be called as constructors, and the prototype property doesn't exist for arrow functions

// memo: function currying / borrowing, Closures