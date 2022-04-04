// solution1
// function printStar(n) {
//   var result = ''
//   for (var i = 1; i <= n; i++) {
//     result += '*'
//   }
//   console.log(result)
// }

// function stars(n) {
//   for (var i = 1; i <= n; i++) {
//     printStar(i)
//   }
// }

stars(5)

// solution2
function stars(n) {
  for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= i; j++) {
      result += '*'
    }
    console.log(result)
  }
}