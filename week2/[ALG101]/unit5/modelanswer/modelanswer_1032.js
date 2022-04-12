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
  let t = Number(lines[0])
  for (let i = 1; i <= t; i++) {
    let start = (i - 1) * 4 + 1
    let x1 = Number(lines[start])
    let y1 = Number(lines[start + 1])
    let x2 = Number(lines[start + 2])
    let y2 = Number(lines[start + 3])
    console.log(distance(x1, y1, x2, y2))
  }
}
solve(['1', '1', '1', '2', '2'])

function distance(x1, y1, x2, y2) {
  let dis = Math.sqrt(
    abs(x1 - x2) ** 2 +
    abs(y1 - y2) ** 2
  )
  return dis.toFixed(2)
}

function abs(n) {
  if (n < 0) {
    return -n
  }
  return n
}