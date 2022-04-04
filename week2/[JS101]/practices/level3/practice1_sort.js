function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        continue
      } else {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  // console.log(arr)
  return arr
}

sort([6, 8, 3, 2])
sort([1, 2, 7, 5])

// sort([1, 2, 1, 2, 3, 6, 6, 3])

// 6
// 6832
// 3862
// 3826

// 8
// 3286
// 3268

// 6
// 3268

// 8
