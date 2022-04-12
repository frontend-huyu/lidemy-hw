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
  let temp = lines[0].split(' ')
  let a = Number(temp[0])
  let b = Number(temp[2])

  if (temp[1] === '+') {
    console.log(a + b)
  } else if (temp[1] === '-') {
    console.log(a - b)
  } else if (temp[1] === '*') {
    console.log(a * b)
  } else {
    console.log(a / b)
  }
}

solve(['3 * 4'])

