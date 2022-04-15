// function search(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === n) {
//       return i
//     }
//   }
//   return -1
// }

console.log(search([1, 3, 10, 14, 39], 14))
// console.log(search([1, 3, 10, 14, 39], 299))

function search(arr, n) {
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (arr[mid] === n) {
      return mid
    } else if (arr[mid] > n) {
      max = mid - 1
    } else {
      min = mid + 1
    }
  }
  return -1
}