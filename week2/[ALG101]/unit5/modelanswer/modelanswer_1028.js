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
  let temp = lines[0].split(' ')
  // 19911117

  let num = Number(temp[0] + temp[1] + temp[2])
  let p = addDigits(num) // p: 29
  while (p >= 10) {
    p = addDigits(p)
  }
  console.log(p)
}

solve(['1991 11 7'])

function addDigits(n) {
  let sum = 0
  while (n != 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}
