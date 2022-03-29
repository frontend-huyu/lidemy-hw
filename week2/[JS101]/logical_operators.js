// +, -, *, /, %(剰余)
// ||(or), &&(and), !(not)

// ||(or)
console.log(true || true) // true
console.log(false || true) // true
console.log(10 || 20) // 10
console.log(0 || 20) // 20 // 0 is falsy value
// always return first true or truthy value


// &&(and)
console.log(true && 1) // 1
console.log(true && false) // false
console.log(10 && 20) // 20
console.log(false && 10) // false
console.log(0 && false) // 0
// if first value is true, always return second value
// if first value is false, always return first value


// !(not)
console.log(!true) // false
console.log(!false) // true


// // false
// false

// // falsy value
// 0
// -0
// 0n (BigInt)
// ''
// null
// undefined
// NaN

// if it's not false or falsy value, it would be true or truthy value