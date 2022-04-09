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
  let str = lines[0].split(' ')
  // console.log(str)
  let num1 = Number(str[0])
  let num2 = Number(str[2])
  if (num1 < 0 || num1 > 10 ** 4) return
  if (num2 < 0 || num2 > 10 ** 4) return

  let result = 0
  if (str[1] === '+') {
    result = num1 + num2
  } else if (str[1] === '-') {
    result = num1 - num2
  } else if (str[1] === '*') {
    result = num1 * num2
  } else {
    result = num1 / num2
  }
  console.log(result)
}
