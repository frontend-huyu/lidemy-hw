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
  const target = Number(lines[0])
  const n = Number(lines[1])
  const numArr = lines.slice(2).map(str => Number(str))
  // console.log(numArr)
  if (target < 1 || target > 1000) return
  if (n < 1 || n > 100) return

  indexOf(numArr, target)
}

function indexOf(arr, searchElement) {
  let result = 0
  let index = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      result = arr[i]
      index = i
      break
    }
  }
  console.log(index)
}