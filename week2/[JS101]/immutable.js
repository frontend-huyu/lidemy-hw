// Primitive values: immutable values
let a = 'hello'
// a.toUpperCase() // return String in a new address
// a.split('') // return Array in a new address
// console.log(a) // hello
// String can not be changed

// you can catch returned value by variable
// a = a.toUpperCase()
// console.log(a) // HELLO
//
let b = a.split(' ')
console.log(a) // hello
console.log(b) // [ 'hello' ]


// Object
// Accessor methods
// indexOf() (return a new array)
let arr = [1, 2, 3]
arr.indexOf(2)
console.log(arr) // [ 1, 2, 3 ]

arr = arr.indexOf(2)
console.log(arr) // 1


// Mutator methods
// push() (change original array)
let arr1 = [1, 2, 3]
arr1.push(4)
console.log(arr1) // [ 1, 2, 3, 4 ]

// if you write like this
arr1 = arr1.push(4)
console.log(arr1) // 5 // push is a function, you print the returned value(new length of the array)
// -> [ 1, 2, 3, 4, 4]
//
let arr2 = [0, 1, 2, 3, 4, 5, 6]
arr2 = arr2.push('fdsfe')
console.log(arr2) // 8
//


// reverse() (change original array, and return new array)
let arr3 = [1, 2, 3]
// arr3.reverse()
// console.log(arr3) // [ 3, 2, 1 ]
arr3 = arr3.reverse()
console.log(arr3) // [ 3, 2, 1 ]

// note: using Mutator methods should be mindful of the return value