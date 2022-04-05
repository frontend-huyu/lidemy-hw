function isPrime(n) {
  if (n === 1) return console.log(false)
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // return false
      console.log(false)
    }
  }
  // return true
  console.log(true)
}

// for (var i = 1; i <= 30; i++) {
//   console.log(i + ' ' + isPrime(i))
// }

isPrime(1) // false
isPrime(5) // true
isPrime(37) // true