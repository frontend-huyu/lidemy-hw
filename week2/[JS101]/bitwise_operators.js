// a &(AND) b
// if first value is true, always return second value
// if first value is false, always return first value
// 1010 -> 10
// 1111 -> 15
// ----
// 1010 -> 10
// true false true false
console.log(10 & 15) // 10

// note1: a & 1 -> 1, means a is an odd number
// note2: a & 1 -> 0, means a is an even number

// note3: a % 2 -> 0, even number
// note4: a % 2 -> 1, odd number


// a |(OR) b
// always return first true or truthy value
// 1010 -> 10
// 1111 -> 15
// ----
// 1111 -> 15
console.log(10 | 15) // 15


// a ^(XOR) b
// if they're the same as each other, return 0
// if not, return 1

// 1010 -> 10
// 1111 -> 15
// ----
// 0101 -> 5
console.log(10 ^ 15) // 5

// ~(NOT)a
// 0 -> 1
// 1 -> 0

// 1111 -> 15
// ----
// 0000 -> -16
console.log(~15) // -16
