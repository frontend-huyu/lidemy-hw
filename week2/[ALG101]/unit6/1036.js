const { listenerCount } = require('process');
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
  reverse(lines)
}

function reverse(arr) {
  let n = Number(lines[0])
  let numArr = lines.splice(1).map(str => Number(str))
  // console.log(numArr)
  let result = ''
  for (let i = n - 1; i >= 0; i--) {
    result = numArr[i]
    console.log(result)
  }
}