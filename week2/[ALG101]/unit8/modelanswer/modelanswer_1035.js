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
  let arr = []
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]))
  }
  // 3 5 (3-5=-2) => negative number: smaller to bigger
  // 5 3 (5-3=2) => positive number: bigger to smaller
  arr.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

solve(['5', '1', '7', '4', '9', '5'])
