// solution1
// function isSmallest(arr, number) {
//   return arr.filter(function (item) {
//     // console.log('item: ', item)
//     // console.log('number: ', number)
//     return item < number
//   }).length === 0
// }

// function findMin(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (isSmallest(arr, arr[i])) {
//       // console.log(i)
//       return arr[i]
//     }
//   }
// }
console.log(findMin([1, 6, 0, 33, 44, 88, -10]))
findMin([1, 2, 5, 6, 99, 4, 5])
findMin([1, 6, 0, 33, 44, 88, -10])

// solution2
function findMin(arr) {
  var min = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
  }
  return min
}
