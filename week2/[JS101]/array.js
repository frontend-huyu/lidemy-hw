let score = [1, 3, 5, 10, 100]
console.log(score.length) // 5
console.log(score[score.length]) // undefined // array's index start at 0
console.log(score[score.length - 1]) // 100

score[score.length] = 1000
console.log(score[score.length - 1]) // 1000

score.push(10000)
console.log(score.length) // 7
console.log(score[score.length - 1]) // 10000

score.push(0.3)
score.push(20)
console.log(score)
// [
//   1, 3, 5,
//   10, 100, 1000,
//   10000, 0.3, 20
// ]


let score2 = []
score2[10] = 100
score2.push(1000)
score2.push(0.3)
console.log(score2, score2.length)
// [ < 10 empty items >, 100, 1000, 0.3 ]13

