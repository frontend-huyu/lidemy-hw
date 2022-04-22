
// const/let: global scope & block scope
// var: global scope & function scope

// global scope
var a = 10
let b = 20
const c = 30
function test() {
  console.log(a, b, c)  // 10 20 30
}
test()
console.log(a, b, c)  // 10 20 30

// note: if variable can't be found in func, it will go up


// function scope
// var a = 20
// function test1() {
//   var a = 10
//   console.log(a) // 10
// }
// test1()

//

// function test2() {
//   var a = 10
//   console.log(a) // 10
// }
// test2()
// console.log(a) // ReferenceError: a is not defined

// note: when variable can't be found, it always go up, never go down

//

function test3() {
  if (10 > 5) {
    var a = 10
  }
  console.log(a) // 10
}
test3()

function test4() {
  if (10 > 5) {
    let a = 1
    const b = 2
    console.log(a, b) // 1 2
  }
  // console.log(a, b) // ReferenceError: a is not defined
}
test4()

// note: var exist in function scope
// note: const/let exist in {} (block scope)