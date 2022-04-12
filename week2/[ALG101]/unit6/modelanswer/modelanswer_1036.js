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
  let numbers = []
  for (let i = 1; i < lines.length; i++) {
    numbers.push(lines[i])
  }

  let arr = reverse(numbers)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

solve(['3', '1', '2', '3'])

function reverse(arr) {
  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result
}