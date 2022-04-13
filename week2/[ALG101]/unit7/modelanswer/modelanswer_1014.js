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
  let n = lines[0]
  console.log(parseInt(n, 9))
}

solve(['100'])

// binary
// 001 => 1
// 010 => 2
// 011 => 3
// 100 => 4

// base-N positional system
// n = 9
// 100 = 9**0 * 0 + 9**1 * 0 + 9**2 * 1 = 0 + 0 + 81

// base-ten(decimal) vs. base-nine
// 1-100 => 1~89: 9, 19, 29, 39, 49, 59, 69, 79, 89 (miss: 9)
//          90~100: 90-99 (miss: 10)
// 100 - 19 = 81