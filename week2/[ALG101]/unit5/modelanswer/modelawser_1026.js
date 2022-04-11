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
  let arr = lines[1].split(' ') // ['3', '9', '27']
  if (isValid(arr)) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
solve(['3', '3 9 27'])

function isValid(arr) {
  // use / also can change type to number
  let d = arr[1] / arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== d) {
      return false
    }
  }
  return true
}
