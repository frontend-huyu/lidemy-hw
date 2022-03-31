// var i = 1 // start condition
// while (i <= 100) { // end condition
//   console.log(i)
//   //...
//   i++ // iteration
// }

// for (start; end; iteration) {}

for (var i = 1; i <= 10; i++) {
  console.log(i)
}

for (var i = 1; i <= 10; i *= 2) {
  if (i % 2) continue
  console.log(i)
}
// 2
// 4
// 8

var scores = [10, 24, 35, 48, 50]
var sum = 0
var i = 0
for (i = 0; i <= scores.length - 1; i++) {
  sum += scores[i] // sum = sum + scores[i]
}
console.log(sum) // 167

// while (i < scores.length) {
//   sum += scores[i]
//   i++
// }
// console.log(sum) // 167