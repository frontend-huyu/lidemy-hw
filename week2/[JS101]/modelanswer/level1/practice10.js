// solution1
// function sum(arr, n) {
//   var answer = 0
//   for (var i = 0; i < arr.length; i++) {
//     answer += arr[i]
//   }
//   return answer
// }

// console.log(sum([1, 2, 3])) // 6
// console.log(sum([-1, 1, 2, -2, 3, -3])) // 0

// solution2 reduce
// function sum(arr, n) {
//   return arr.reduce(function (accumulator, value) {
//     return accumulator + value
//   })
//   // reduce()'s seconde parameter can put anything as a base
// }

// solution3 map
// function sum(arr, n) {
//   var ans = 0
//   arr.map(function (value) {
//     ans = ans + value
//     // return ans
//   })
//   return ans
// }

// solution4 forEach
// function sum(arr, n) {
//   var ans = 0
//   arr.forEach(function (value) {
//     ans = ans + value
//   });
//   return ans
// }

// about reduce()
// console.log(
//   [1, 2, 3].reduce(
//     function (obj, value) {
//       console.log('obj:', obj)
//       console.log('value:', value)
//       obj['a' + value] = value
//       return obj
//     }, {}
//   )
// )

// obj: { }
// value: 1
// obj: { a1: 1 }
// value: 2
// obj: { a1: 1, a2: 2 }
// value: 3
// { a1: 1, a2: 2, a3: 3 }

// {} is base, obj is a template variable to catch value

console.log(
  [1, 2, 3, 4, 5, 10, 20].reduce(
    function (count, value) {
      if (value < 5) {
        // console.log(count)
        // console.log(value)
        return count + 1
      }
      return count
    }, 0
  )
)
// 4