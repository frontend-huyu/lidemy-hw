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
  let priceOne = Number(lines[0])
  let priceTwo = Number(lines[1])

  let maxPrice = 0
  if (priceOne > priceTwo) {
    maxPrice = priceOne * 2
  } else {
    maxPrice = priceTwo * 2
  }
  console.log(maxPrice)
  console.log(maxPrice - (priceOne + priceTwo))
}

