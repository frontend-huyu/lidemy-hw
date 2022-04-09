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
  if (n < 1 || n >= 10 ** 6) return

  let total = 0
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (i ** 2 < n) {
      total += i ** 2
    }
  }
  console.log(total)
}
