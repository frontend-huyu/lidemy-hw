// slice(start, end)
console.log('hello world'.slice(1)) // ello world
console.log('hello world'.slice(1, 5)) // ello
// use negative index => start at the end, back to the start
console.log('hello world'.slice(1, -1)) // ello worl
console.log('hello world'.slice(-1)) // d
console.log('hello world'.slice(-1, -2)) // *empty*
console.log('hello world'.slice(-2, -1)) // l

// use slice() in an array
console.log(['zero', 'one', 'two', 'three'].slice(-2, -1)) // [ 'two' ]
// return a new array, not change original array


// splice(start, deleteCount, replaceItem1, replaceItem2...)
// only use in array, change original array
// insert
const arr = ['zero', 'one', 'two', 'three']
arr.splice(1, 0, 'hello')
console.log(arr) // [ 'zero', 'hello', 'one', 'two', 'three' ]

// delete
arr.splice(1, 2) // start index 1, delete 2 elements
console.log(arr) // [ 'zero', 'two', 'three' ]

// replace
arr.splice(0, 1, 'world') // start index 0, delete 1 element, replace with 'world'
console.log(arr) // [ 'world', 'two', 'three' ]

arr.splice(1, 2, 'world') // delete 2 elements, replace 1 element
console.log(arr) // [ 'world', 'world' ]

arr.splice(1, 2, 'hello', 'world') // delete 1 element, replace 2 elements
console.log(arr) // [ 'world', 'hello', 'world' ]