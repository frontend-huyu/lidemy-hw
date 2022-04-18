// Number() & parseInt()
let a = 10
let b = '20'
console.log(a + b) // 1020
console.log(a + Number(b)) // 30
console.log(a + parseInt(b, 10)) // 30
console.log(a + parseInt(b, 12)) // 34


// parseFloat()
b = '20.35'
console.log(a + parseInt(b, 10)) // 30
console.log(a + parseFloat(b)) // 30.35


// toFixed() // String
b = '20.3586765'
console.log(parseFloat(b).toFixed(3)) // 20.359 // rounding // String
console.log(parseFloat(b).toFixed()) // 20 // String


// Number.MAX_VALUE
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308


// Math.PI // constant
console.log(Math.PI) // 3.141592653589793


// Math.ceil
console.log(Math.ceil(10.5)) // 11 // up to the ceil


// Math.floor
console.log(Math.floor(10.5)) // 10 // down to the floor


// Math.rounding
console.log(Math.round(10.4)) // 10
console.log(Math.round(10.5)) // 11


// Math.sqrt
console.log(Math.sqrt(9)) // 3


// Math.pow
console.log(Math.pow(2, 10)) // 1024


// Math.random
console.log(Math.random()) // random 0~0.9999.., inclusive of 0. but not 1
console.log(Math.random() * 10) // random 0~9.9999...
console.log(Math.random() * 10 + 1) // random 0~10.9999
console.log(Math.floor(Math.random() * 10 + 1)) // random 0~10

let x = 0.1
let y = 0.2
console.log(x + y) // 0.30000000000000004
console.log(Number((x + y).toFixed(1)) === 0.3) // true

console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991 // 2^53 -1