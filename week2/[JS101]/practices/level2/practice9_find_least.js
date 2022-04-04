function findMin(arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        result = arr[i]
        // console.log('i:', arr[i])
        // console.log('j:', arr[j])
      } else {
        result = arr[j]
        // console.log('i:', arr[i])
        // console.log('j:', arr[j])
      }
    }
    return result
  }
}

findMin([1, 2, 5, 6, 99, 4, 5])
findMin([1, 6, 0, 33, 44, 88, -10])
// console.log(findMin([1, 6, 0, 33, 44, 88, -10]))