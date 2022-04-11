// 判斷是否為等差數列
function isValid(arr) {
  if (arr.length <= 1) return true
  let d = arr[1] - arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== d) {
      return false
    }
  }
  return true
}

// function isValid(arr) {
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
//       return false
//     }
//   }
//   return true
// }

console.log(isValid([1, 3, 5, 7, 9])) // true
console.log(isValid([1, 1, 1])) // true
console.log(isValid([1, 2, 4])) // false
// edge cases
// be careful of invalid access
console.log(isValid([])) // true
console.log(isValid([3])) // true
