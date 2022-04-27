// rest parameters

// difference between spread operator
// Array
let arr = [1, 2, 3]
let arr2 = [...arr, 4] // spread operator
console.log(arr2) // [ 1, 2, 3, 4 ]

// rest parameters (with destructuring assignment)
let arr3 = [1, 2, 3, 4, 5]
let [first, ...rest] = arr3
console.log(first) // 1
console.log(rest) // [ 2, 3, 4, 5 ]
console.log(arr3) // [ 1, 2, 3, 4, 5 ]
// put the rest of elements in arr3 into variable "rest"

// let [one, ...rest, last] = arr3
// console.log(rest) // SyntaxError: Rest element must be last element


// Object
// let obj1 = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// let { a, ...obj2 } = obj1
// console.log(a, obj2) // 1 { b: 2, c: 3 }

let obj3 = {
  a: 1,
  b: 2
}
let obj4 = {
  ...obj3, // spread operator
  c: 3
}
let { a, ...restObject } = obj4
console.log(a, restObject) // 1 { b: 2, c: 3 }
console.log(obj4) // { a: 1, b: 2, c: 3 }

let { ...restAll } = obj4
console.log(restAll) // { a: 1, b: 2, c: 3 }
console.log(obj4)  // { a: 1, b: 2, c: 3 }

// function
function add(...args) { // args is array
  console.log(typeof args) // object
  console.log(args) // [ 1, 2 ]
  console.log(arguments) // [Arguments] { '0': 1, '1': 2 }
  console.log(arguments[0], arguments[1]) // 1 2
  return args[0] + args[1]
}
console.log(add(1, 2)) // 3
/*
note: "args" looks like arguments, the difference is
arguments is an array-like object, then "...args" is a real array
*/