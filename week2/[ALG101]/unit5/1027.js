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
  let line = lines[0].split('-').map(str => str.split(''))
  let cardNum = [].concat(...(line)).map(str => Number(str))
  // console.log(cardNum)

  let total = 0
  for (let i = 0; i < cardNum.length; i += 2) {
    if (cardNum[i] * 2 >= 10) {
      let subtract = cardNum[i] * 2 - 9
      total += subtract
    } else {
      total += cardNum[i] * 2
    }
  }

  for (let i = 1; i < cardNum.length - 1; i += 2) {
    total += cardNum[i]
  }
  // console.log(total)

  if (10 - (total % 10) === cardNum[15]) {
    if (cardNum[0] === 5) {
      console.log('MASTER_CARD')
    } else if (cardNum[0] === 4) {
      console.log('VISA')
    }
  } else {
    console.log('INVALID')
  }
}

