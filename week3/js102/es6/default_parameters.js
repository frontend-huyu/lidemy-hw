// function repeat(str, times) {
//   console.log(times) // undefined
//   return str.repeat(times)
// }

const { objectMethod } = require("@babel/types")
const { time } = require("console")

// console.log(repeat('abc')) // *empty string*

// if we don't give any value to parameters, it will be undefined
// "undefined" means it should be a value but can't be found
// "null" means this value doesn't exist

// use default parameters
function repeat1(str, times = 5) {
  console.log(times) // 5
  return str.repeat(times)
}

console.log(repeat1('abc')) // abcabcabcabcabc
// even though we didn't give any value as an argument, it always keep default value itself

function repeat2(str = 'hello', times = 5) {
  return str.repeat(times)
}
console.log(repeat2()) // hellohellohellohellohello


// use with destructuring assignment
// const obj = {
//   b: 2
// }
// const { a, b } = obj
// console.log(a, b) // undefined 2

// const { a = 123, b } = obj
// console.log(a, b) // 123 2

// const obj = {
//   a: 1
// }
// const { a = 123, b = 'hello' } = obj
// console.log(a, b) // 1 hello

// note: when we use destructuring assignment which putted the default value inside, if the original object had value itself, it won't be changed.
// note: default value only show up when it was undefined state


// note: but you should be careful the original object didn't be changed
const obj = {
  b: 2
}
const { a = 123, b = 'hello' } = obj
console.log(a, b) // 123 2
console.log(obj) // { b: 2 }
console.log(obj.a) // undefined
/*
if you try to access the default value, 
it always undefined (for example, "a" didn't exist in obj),
so default parameters only as a temporary value when we call.
"a" didn't exist, and we didn't assign any value to "a".
*/