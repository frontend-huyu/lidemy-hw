// solution1
// function findSmallCount(arr, n) {
//   var counter = 0
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < n) counter++
//   }
//   return counter
// }
console.log(findSmallCount([1, 2, 3], 2)) // 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)) // 0
console.log(findSmallCount([1, 2, 3, 4], 100)) // 4


// solution2
function findSmallCount(arr, n) {
  return arr.filter(function (item) {
    return item < n
  }).length
}