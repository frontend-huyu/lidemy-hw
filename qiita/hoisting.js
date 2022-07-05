// var hoisting example1
// foo()

// function foo() {
//   a = 3  // run-time
//   console.log(a) // 3
//   var a // compile-time
// }


// console.log(a) // undefined
// // undefined means no value
// // we declared it but we don't assign any value

// var a // compile-time

// a = 2 // run-time

// console.log(a) // 2

// var hoisting example2
foo() // undefined

function foo() {
  console.log(a)
}

console.log(a) // undefined

var a // compile-time

foo() // undefined

a = 1 // run-time

console.log(a) // 1

foo() // 1

// Variable can't be hoisted in function scope?
// function outer() {
//   console.log(a) // undefined
//   var a
//   console.log(a) // undefined
//   a = 2
//   console.log(a) // 2
// }

// outer()

function outer() {
  test1() // I am test1
  // test2() // TypeError: test2 is not a function

  function test1() {
    console.log('I am test1')
  }

  var test2 = function () {
    console.log('I am test2')
  }

  test2() // I am test2
}

outer()


// hoisting - const/let
// const b // SyntaxError: Missing initializer in const declaration


// console.log(c) // ReferenceError: Cannot access 'c' before initialization
// TDZ(Temporal Dead Zone) 

// x // ReferenceError: Cannot access 'x' before initialization

let x
console.log(x) // undefined

x = 3
console.log(x) // 3

