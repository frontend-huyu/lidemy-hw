var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// put into lines
rl.on('line', function (line) {
  lines.push(line)
});

// end = ctrl + d, and callback solve()
rl.on('close', function () {
  solve(lines)
})

// write your solution in here, and remember lines is an array
function solve(lines) {
  let card = removeDash(lines[0])
  // console.log(card)
  let sum = evenDigitsCount(card) + oddDigitsCount(card)
  let p = sum % 10
  if (p !== 0) {
    p = 10 - p
  }

  if (p !== Number(card[15])) {
    console.log('INVALID')
  } else {
    if (card[0] === '5') {
      console.log('MASTER_CARD')
    } else {
      console.log('VISA')
    }
  }
}

solve(['5412-3456-7890-1232'])

function removeDash(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '-') {
      result += str[i]
    }
  }
  return result
}

function evenDigitsCount(card) {
  let sum = 0
  for (let i = 1; i <= 13; i += 2) {
    sum += Number(card[i])
  }
  return sum
}

function oddDigitsCount(card) {
  let sum = 0
  for (let i = 0; i <= 15; i += 2) {
    let p = Number(card[i]) * 2
    if (p >= 10) {
      p -= 9
    }
    sum += p
  }
  return sum
}