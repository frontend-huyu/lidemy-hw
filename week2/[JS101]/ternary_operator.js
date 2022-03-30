// condition ? A : B
// if condition is true, return A
// if not, return B

// console.log(10 > 5 ? 'bigger' : 'smaller') // bigger

// random 1~100
let score = Math.floor((Math.random() * 100)) + 1
console.log(score)
let message = score >= 60 ? 'pass' : 'fail'
console.log(message)

score = 100
// poor readability
message = score >= 60 ? (score === 100 ? 'No.1' : 'pass') : 'fail'
console.log(message) // No.1
// note: be careful of nested structure