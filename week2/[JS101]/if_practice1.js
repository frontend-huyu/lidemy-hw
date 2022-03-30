// random 1~100
let score = Math.floor((Math.random() * 100)) + 1
console.log(score)

// solution 1
if (score === 100) {
  console.log('you are no1')
} else if (score >= 60) {
  console.log('pass')
} else {
  console.log('fail')
}

// ternary operator
score = 100
// score = 60
// score = 50

// solution 2
let message = score >= 60 ? (score === 100 ? 'you are no1' : 'pass') : 'fail'
console.log(message) // you are no1
// note: poor readability