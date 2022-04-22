function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = -Infinity
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        index = j
      }
    }
    if (index !== -Infinity) {
      // console.log(i, arr, arr[i])
      arr.splice(index, 0, arr[i])
      // console.log(i, arr, arr[i])
      arr.splice(i + 1, 1)
    }
  }
  return arr
}

console.log(insertion([35, 42, 35, 41, 9, 20, 42, 21, 8, 31, 12, 44, 23, 26, 16]))
// console.log(insertion([35, 42, 35, 41, 9]))

// i 35 j 42
