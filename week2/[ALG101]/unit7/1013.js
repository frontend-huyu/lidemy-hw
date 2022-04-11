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
  if (n < 2 || n > 20) return

  if (n === 2) console.log(2)
  if (n === 3) console.log(3)

  let counter = 0

  if ((n - 1) % 2 === 0) {
    counter = 2 * (n - 1) + 1
  } else if ((n - 1) % 2 === 1) {
    counter += 1
    for (let i = 1; i < n - 3; i++) {
      counter += (n - 1) - i
    }
  }
  console.log(counter)

}
