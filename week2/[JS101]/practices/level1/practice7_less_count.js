function findSmallCount(arr, n) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      result++
    }
  }
  return result
}

console.log(findSmallCount([1, 2, 3], 2)) // 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)) // 0
console.log(findSmallCount([1, 2, 3, 4], 100)) // 4