// let a = 0
// a += 1 // a = a +1
// console.log(a) // 1
// a++
// console.log(a) // 2
// a -= 1
// console.log(a) // 1
// a--
// console.log(a) // 0
// // ..., etc.

// a++ vs. ++a
let a = 0
// console.log(a++ && 10) // 0
// // after execution, a = a + 1
// console.log('a:', a) // a: 1

console.log(++a && 10) // 10
// before execution, a = a + 1
console.log('a:', a) // a: 1
