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

  for (let i = 1; i <= n; i++) {
    let stars = ''
    stars = '*'.repeat(i)
    console.log(stars)
  }

}
