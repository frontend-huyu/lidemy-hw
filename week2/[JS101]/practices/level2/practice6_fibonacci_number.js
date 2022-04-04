// fib(0), fib(1) are special cases
let arr = [0, 1]

function fibonacci(n) {
  let sum = 0
  if (n === 0) return arr[0]
  if (n === 1) return arr[1]
  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      sum = arr[i - 1] + arr[i - 2]
      arr.push(sum)
    }
  }
  // console.log(arr)
  return arr[n]
}

// console.log(fibonacci(1)) // 1
// console.log(fibonacci(2)) // 1
console.log(fibonacci(8)) // 21