// solution1
// function table(n) {
//   for (var i = 1; i <= 9; i++) {
//     console.log(n + '*' + i + '=' + n * i)
//   }
// }

// function table9to9() {
//   for (var i = 1; i <= 9; i++) {
//     table(i)
//   }
// }

// table9to9()

// solution2
// function table9to9() {
//   for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= 9; j++) {
//       console.log(i + '*' + j + '=' + i * j)
//     }
//   }
// }
// table9to9()

// solution3
function tableNtoN(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      console.log(i + '*' + j + '=' + i * j)
    }
  }
}
tableNtoN(3)
tableNtoN(12)