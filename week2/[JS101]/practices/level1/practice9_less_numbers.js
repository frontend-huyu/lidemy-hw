function findAllSmall(arr, n) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      result.push(arr[i])
    }
  }
  return result
}

console.log(findAllSmall([1, 2, 3], 10)) // [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)) // [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)) // [1, 3, 2]