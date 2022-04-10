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
  const target = lines[0]
  const n = lines[1]
  if (target < 1 || target > 1000) return
  if (n < 1 || n > 100) return
  const numArr = lines.splice(2).map(str => Number(str))
  fill(numArr, target)
}

function fill(arr, value) {
  let fillArr = []
  for (let i = 0; i < arr.length; i++) {
    fillArr.push(value)
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(fillArr[i])
  }
}
