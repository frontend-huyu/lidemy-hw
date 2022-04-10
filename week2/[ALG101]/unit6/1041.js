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
  trim(str)
}

function trim(str) {
  let result = ''
  let indexFront = 0
  let indexBack = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      indexFront = i
      break
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      indexBack = i
      break
    }
  }

  for (let i = indexFront; i <= indexBack; i++) {
    result += str[i]
  }
  console.log(result)
}

