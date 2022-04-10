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
  const str = lines[0]
  const arr = lines.splice(2)
  // console.log(arr)
  join(arr, str)
}

function join(arr, separator) {
  let result = ''
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] + separator
  }
  result += arr[arr.length - 1]
  console.log(result)
}