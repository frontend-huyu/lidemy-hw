function findNthMin(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        continue
      } else if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  // console.log(arr)
  return arr[n - 1]
}
findNthMin([1, 2, 3, 4, 5], 1) // 1
findNthMin([1, 3, 5, 7, 9], 3) // 5
findNthMin([1, 1, 1, 1, 1], 2) // 1

// console.log(findNthMin([1, 2, 5, 1, 4, 3, 6, 5], 5))

// i = 1
// j = i = 1
// arr[i] = arr[j] => continue
// j++

// i = 1
// j = 2
// arr[i] = 2, arr[j] = 5 => continue
// j++

// i = 1
// j = 3
// arr[i] = 2, arr[j] = 1 => arr = [1, 1, 5, 2, 4, 3, 6, 5]
// j++
// // note: if arr[i] > arr[j], any of arr[i]~arr[j] > arr[j]
// // 2, 5, 1 -> 1, 5, 2


// i = 1
// j = 4
// arr[i] = 1, arr[j] = 4 => continue ...


