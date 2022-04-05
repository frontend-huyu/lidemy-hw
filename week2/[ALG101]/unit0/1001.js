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
  let line = lines[0]
  let temp = line.split(' ')
  console.log(Number(temp[0]) + Number(temp[1]))
}

// input
// 1 2

// output
// 3