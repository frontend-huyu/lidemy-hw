// solution1
// callback itself => recursion
// function fib(n) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   return fib(n - 2) + fib(n - 1)
// }

// console.log(fib(8))

// solution2
function fib(n) {
  var fib = [0, 1]
  for (var i = 2; i <= 8; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
    // it doesn't have to use push()...
  }
  return fib[n]
}

console.log(fib(8))