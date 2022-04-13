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
  // console.log(lines[0].split('').reverse().join(''))
  let str = lines[0]
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  console.log(result)
}




