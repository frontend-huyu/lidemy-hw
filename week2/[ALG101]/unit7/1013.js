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
  console.log(fib(n))
}

solve(['5'])

function fib(n) {
  if (n === 2) return 1
  if (n === 3) return 2
  return fib(n - 1) + fib(n - 2)
}

// 1->2: 1
// 2->3: 2 (1, 1 / 2)
// 3->4: 3 (1, 1, 1 / 2, 1 / 1, 2)
// 4->5: 5 (1, 1, 1, 1, 1 / 2, 2 / 2, 1, 1 / 1, 2, 1 / 1, 1, 2)
// [0, 1, 1, 2, 3, 5, 8, 13, 21...]
