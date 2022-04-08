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
  if (n < 1 || n > 30) return

  let leaves = ''
  for (let i = 1; i <= n; i++) {
    leaves = ' '.repeat(n - i) + '*'.repeat(2 * i - 1)
    console.log(leaves)
  }
  trunk(n)
}

function trunk(n) {
  let result = ''
  for (let i = 1; i < n; i++) {
    result = ' '.repeat(n - 1) + '|'
    console.log(result)
  }
}