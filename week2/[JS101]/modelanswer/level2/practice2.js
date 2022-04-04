function star(i) {
  var result = ''
  for (var j = 1; j <= i; j++) {
    result += '*'
  }
  return result
}

// solution1
// function makeStars(n) {
//   var result = ''
//   for (var i = 1; i <= n; i++) {
//     result += star(i)
//     if (i !== n) {
//       result += '\n'
//     }
//   }
//   console.log(result)
// }

// makeStars(1)
// makeStars(2)
// makeStars(5)

// solution2
// function makeStars(n) {
//   var arr = []
//   for (var i = 1; i <= n; i++) {
//     arr.push(star(i))
//   }
//   return arr.join('\n')
// }
console.log(makeStars(5))

// solution3
// console.log(Array(10).fill(0))
// [
//   0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0
// ]
function makeStars(n) {
  return Array(n).fill(0).map(function (value, index) {
    // console.log('value:', value) // element -> fill(0) -> 0
    // console.log('index:', index) // index
    return star(index + 1)
  }).join('\n')
}
