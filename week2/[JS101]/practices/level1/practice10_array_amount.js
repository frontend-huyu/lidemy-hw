function sum(arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([-1, 1, 2, -2, 3, -3])) // 0