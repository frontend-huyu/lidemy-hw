// 1234 => 1+2+3+4 => 10
// solution1
function addDigits(n) {
  if (n < 0) {
    n = n * -1
  }
  let sum = 0
  while (n != 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

console.log(addDigits(1)) // 1
console.log(addDigits(0)) // 0
console.log(addDigits(10)) // 1
console.log(addDigits(99)) // 18
console.log(addDigits(3412)) // 10
console.log(addDigits(5566)) // 22
// edge case
console.log(addDigits(-34)) // 7

// solution2
// function addDigits(n) {
//   n = n + '' // '3412'
//   let sum = 0
//   for (let i = 0; i < n.length; i++) {
//     sum += Number(n[i])
//   }
//   return sum
// }