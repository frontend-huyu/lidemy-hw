// function repeat(str, times) {
//   console.log(times) // undefined
//   return str.repeat(times)
// }

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
const obj = {
  b: 2
}
// const { a, b } = obj
// console.log(a, b) // undefined 2

// const { a = 123, b } = obj
// console.log(a, b) // 123 2

const obj1 = {
  a: 1
}
const { a = 123, b = 'hello' } = obj1
console.log(a, b) // 1 hello

// note: when we use destructuring assignment which putted the default value inside, if the original object had value itself, it won't be changed.
// note: default value only show up when it was undefined state


// note: but you should be careful the original object didn't be changed
const obj2 = {
  d: 2
}
const { c = 123, d = 'hello' } = obj2
console.log(c, d) // 123 2
console.log(obj2) // { d: 2 }
console.log(obj2.c) // undefined
/*
if you try to access the default value, 
it is always undefined (for example, "c" didn't exist in obj2),
so default parameters are only a temporary value when we call.
"c" didn't exist, and we didn't assign any value to "c".
*/