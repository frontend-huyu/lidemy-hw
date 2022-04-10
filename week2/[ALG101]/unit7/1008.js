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
  let m = Number(lines[0])
  if (m < 1 || m > (2 ** 31 - 1)) return

  let counter = 0
  let temp = m

  for (let i = 30; i >= 0; i--) {
    if ((temp - (2 ** i)) > 0) {
      // console.log(i)
      counter++
      temp = temp - (2 ** i)
    } else if ((temp - (2 ** i)) === 0) {
      counter++
      temp = temp - (2 ** i)
    }
  }
  console.log(counter)
}
