// let a = 10
// let b = '20'
// console.log(a + b) // 1020

let a = '10'
let b = 20
console.log(a + b) // 1020
console.log(Number(a) + b) // 30

console.log(parseInt(a, 10) + b) // 30 // 10 + 20
console.log(parseInt(a, 2) + b) // 22 // 2 + 20

let c = 0.1 + 0.2
console.log(c == 0.3) //false
console.log(c) // 0.30000000000000004
// floating point number
