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
  let n = Number(lines[0])
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (isSquare(i)) {
      console.log(sum)
      sum += i

    }
  }
  console.log(sum)
}

solve(['30'])

function isSquare(n) {
  let r = Math.floor(Math.sqrt(n))
  return r * r === n
}
