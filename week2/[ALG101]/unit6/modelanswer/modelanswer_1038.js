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
  console.log(indexOf(arr, target))
}

solve(['3', '5', '1', '2', '3', '3', '3'])

function indexOf(arr, searchElement) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return i
    }
  }
  return -1
}