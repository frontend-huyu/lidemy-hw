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
  let target = Number(lines[0])
  let arr = []
  for (let i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]))
  }
  let newArr = fill(arr, target)
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i])
  }
}

solve(['10', '3', '1', '2', '3'])

function fill(arr, value) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[i] = value
  }
  return result
}