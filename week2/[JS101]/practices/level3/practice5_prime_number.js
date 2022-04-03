// prime number has two factors, '1' and itself
function isPrime(n) {
  // exclude 1, 2
  if (n === 1) return false
  if (n === 2) return true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(5)) // true
console.log(isPrime(15)) // false
console.log(isPrime(21)) // false
console.log(isPrime(37)) // true
console.log(isPrime(47)) // true
console.log(isPrime(49)) // false