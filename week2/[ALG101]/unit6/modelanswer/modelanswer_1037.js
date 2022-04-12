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
  let newArr = filter(arr, function (element) {
    return element !== target
  })
  // filter(arr, element => element !== target)
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i])
  }
}

solve(['3', '5', '1', '3', '3', '2', '8'])

function filter(arr, callback) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}