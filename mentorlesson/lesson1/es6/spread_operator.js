const { array } = require("yargs")

const obj = {
  name: 'Peter',
  score: 60,
  location: 'Japan',
  city: 'Tokyo'
}

// spread_operator: put remainder into variable
const { name, score, ...rest } = obj
console.log(rest) // { location: 'Japan', city: 'Tokyo' }


// Array
// const arr = [1, 2, 3, 4, 5]
// const [first, ...r] = arr

// console.log(first) // 1
// console.log(r) // [2, 3, 4, 5] // it return an array


// but can not write like this
// const arr = [1, 2, 3, 4, 5]
// const [...r, last] = arr
// console.log(r) // SyntaxError: Rest element must be last element


// spread_operator always should be rearmost


// use spread_operator to fold and spread itself
// let num = []
// const numberStore = [0, 1, 2];
// const newNumber = 12;
// num = [...numberStore, newNumber];
// console.log(numberStore) // [ 0, 1, 2 ]
// console.log(num) // [ 0, 1, 2, 12 ]


// // it's different from this
// const numberStore = [0, 1, 2];
// const newNumber = 12;
// num = [numberStore, newNumber];
// console.log(numberStore) // [ 0, 1, 2 ]
// console.log(num) // [ [ 0, 1, 2 ], 12 ] // array in another array

// note1: spread_operator is shallow copy, it won't affect original array

// note2: spread_operator to fold and spread value, it cause some problem doesn't be solved
