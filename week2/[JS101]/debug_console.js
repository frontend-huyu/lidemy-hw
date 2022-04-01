// function isPrime(num) {
//   if (num === 1) return false
//   if (num === 2) return true
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false
//     } else {
//       return true
//     }
//   }
// }

// console.log(isPrime(3)) // true
// console.log(isPrime(17)) // true
// console.log(isPrime(15)) // true // it is not a Prime number

// debug with console
// function isPrime(num) {
//   console.log('num:', num)
//   if (num === 1) return false
//   if (num === 2) return true
//   for (let i = 2; i < num; i++) {
//     console.log('i:', i)
//     if (num % i === 0) {
//       console.log('num & i === 0', 'num:', num, 'i:', i)
//       return false
//     } else {
//       console.log('else', 'num:', num, 'i:', i)
//       return true
//     }
//   }
// }

// console.log(isPrime(15)) // true // it is not a Prime number
// num: 15
// i: 2
// else num: 15 i: 2 // num % === 1 => else
// true

// Prime number has 2 divisors(factors) '1' and itself
// we want num to iterate itself from 2 to itself - 1
// it has some problem in 'else'

function isPrime(num) {
  console.log('num:', num)
  if (num === 1) return false
  if (num === 2) return true
  for (let i = 2; i < num; i++) {
    console.log('i:', i)
    if (num % i === 0) {
      console.log('num & i === 0', 'num:', num, 'i:', i)
      return false
    }
  }
  return true
}
console.log(isPrime(15))
// num: 15
// i: 2
// i: 3
// num & i === 0 num: 15 i: 3
// false
