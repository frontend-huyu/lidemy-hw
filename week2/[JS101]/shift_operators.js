// binary bits
// 0100 = 2^2 = 4
// 1000 = 2^3 = 8
// 1001 = 2^3 + 2^0 = 9

// <<(left shift) -> *2
console.log(10 << 1) // 20
console.log(10 << 3) // 80
console.log(1 << 10) // 1024
console.log(1 << 31 - 1) // 1073741824
console.log(1 << 30) // 1073741824


// >>(right shift) -> /2
console.log(1024 >> 1) // 512
console.log(512 >> 3) // 64
console.log(80 >> 3) // 10

// rounding

console.log(9 >> 1) // 4
console.log(13 >> 1) // 6


// note: compare with *2 and /2, shift operators is lower performance logically 