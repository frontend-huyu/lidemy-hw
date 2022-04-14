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
  let m = Number(lines[0])
  let numArr = lines[1].split(' ').map(str => Number(str))

  let average = 0
  for (let i = 0; i < numArr.length; i++) {
    average += numArr[i] - 183
  }
  if (average / m >= 0) {
    console.log('real')
  } else {
    console.log('fake')
  }
}
