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
  let arr = lines.map(str => Number(str))
  const n = arr[0]
  const m = arr[1]
  if (n < 1 || m > 30) return

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      console.log(`${i}*${j}=${i * j}`)
    }
  }
}
