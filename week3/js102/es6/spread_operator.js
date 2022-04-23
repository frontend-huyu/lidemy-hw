// spread operator
let arr = [1, 2, 3]
let arr2 = [4, 5, 6, arr]
console.log(arr2) // [ 4, 5, 6, [ 1, 2, 3 ] ]

let arr3 = [4, 5, 6, ...arr]
console.log(arr3) // [ 4, 5, 6, 1, 2, 3 ]
arr3 = [4, ...arr, 5, 6]
console.log(arr3) // [ 4, 1, 2, 3, 5, 6 ]

function add(a, b, c) {
  return a + b + c
}
console.log(add(arr)) // 1,2,3undefinedundefined
// note: a = arr, b = undefined, c = undefined

console.log(add(...arr)) // 6

let obj1 = {
  a: 1,
  b: 2
}
let obj2 = {
  d: 4
}
let obj3 = {
  ...obj1,
  c: 3,
  ...obj2
}
console.log(obj3) // { a: 1, b: 2, c: 3, d: 4 }


let obj4 = {
  a: 1,
  b: 2
}
// let obj5 = {
//   ...obj4,
//   b: 3
// }
// console.log(obj5) // { a: 1, b: 3 }
// note: when it's the same as the key, it will be replaced by latter

let obj5 = {
  b: 3,
  ...obj4
}
console.log(obj5) // { b: 2, a: 1 }


// copy an array
// let arr4 = [1, 2, 3]
// let arr5 = arr4
// console.log(arr4 === arr5) // true
// they refer to the same address, it wasn't a copy

let arr4 = [1, 2, 3]
let arr5 = [...arr4]
console.log(arr4 === arr5) // false
// because spread operator, arr5 take value from arr4, not address

let nestedArray = [4]
let arr6 = [1, 2, 3, nestedArray]
let arr7 = [...arr6]
console.log(arr6) // [ 1, 2, 3, [ 4 ] ]
console.log(arr7) // [ 1, 2, 3, [ 4 ] ]
console.log(arr6 === arr7) // false

// but if the element was an assigned array,
console.log(arr6[3] === arr7[3]) // true

// if we chang the value (by new address)
nestedArray = [7, 8, 9]
console.log(arr6) // [ 1, 2, 3, [ 4 ] ]
console.log(arr7) // [ 1, 2, 3, [ 4 ] ]
// at this time, nestedArray in arr6 & arr7 was still assigned by old address
// passing by sharing

// but if you reassign it 
arr6 = [1, 2, 3, nestedArray]
arr7 = [...arr6]
console.log(arr6) // [ 1, 2, 3, [ 7, 8, 9 ] ]
console.log(arr7) // [ 1, 2, 3, [ 7, 8, 9 ] ]

// copy an object
// let obj6 = {
//   a: 1,
//   b: 2
// }
// let obj7 = obj6
// console.log(obj6, obj7, obj6 === obj7)
// { a: 1, b: 2 } { a: 1, b: 2 } true

let obj6 = {
  a: 1,
  b: 2
}
let obj7 = {
  ...obj6
}
console.log(obj6, obj7, obj6 === obj7)
// { a: 1, b: 2 } { a: 1, b: 2 } false