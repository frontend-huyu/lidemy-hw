// different between let and const
// declared by const means variable can not be changed or covered
const a = 1
// a = 2
console.log(a)
// TypeError: Assignment to constant variable.

// declared by let means variable can be changed or covered
let b = 1
b = 2
console.log(b) // 2

// compare with var
// var has function scope and global scope
// global scope
var score1 = 60
if (score1 >= 60) {
  console.log('pass') // pass
}

// function scope? "if...else" is not function
// it doesn't work
if (score2 >= 60) { // 1. can not find "score", break out
  var score2 = 60
  console.log('pass')
}
console.log(score2) // undefined // "if...else" doesn't execute


// but it also work like this
score3 = 60 // 1. if we don't declare, it would be global variable
if (score3 >= 60) { // 2.
  // var score3 // it's not related to be declared by var or not
  console.log('pass') // pass // 3.
}

// doesn't work
// var score // 1.
// if (score >= 60) { // 2. score didn't assign any value, break out
//   score = 60
//   console.log('pass')
// }


// const and let only have "block scope"
// block scope in global, it can be accessed from any scope
const score4 = 60
if (score4 >= 60) {
  console.log(score4) // 60 
}
console.log(score4) // 60

// block scope in {}, it only exist its {}
const score5 = 60
if (score5 >= 60) {
  let text = '合格'
  console.log(text) // 合格
}
// console.log(text) // ReferenceError: text is not defined


// var
const score6 = 60
if (score6 >= 60) {
  var text = '合格' // "if...else" is not function, so it's a global variable declaration
  console.log(text) // 合格
}
console.log(text) // 合格
