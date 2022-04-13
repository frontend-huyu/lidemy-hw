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
  const n = Number(lines[0])
  const numArr = lines.splice(1).map(str => Number(str))
  numArr.sort((a, b) => a - b)
  // console.log(numArr)
  for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i])
  }
}


