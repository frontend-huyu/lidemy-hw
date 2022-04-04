// solution1
function star(n) {
  var answer = ''
  for (var i = 1; i <= n; i++) {
    answer += '*'
  }
  console.log(answer)
}
star(7)


// repeat() function
// function star(str, n) {
//   var answer = ''
//   for (var i = 1; i <= n; i++) {
//     answer += str
//   }
//   console.log(answer)
// }
// star('!', 7)