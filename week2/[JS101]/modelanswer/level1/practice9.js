// solution1
function findAllSmall(arr, n) {
  var answer = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      answer.push(arr[i])
    }
  }
  return answer
}

console.log(findAllSmall([1, 2, 3], 10)) // [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)) // [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)) // [1, 3, 2]

// filter practice
// function findAllSmall(arr, n) {
//   return arr.filter(function (item) {
//     return item < n
//   })
// }
