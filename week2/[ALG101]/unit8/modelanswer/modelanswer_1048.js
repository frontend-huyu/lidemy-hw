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
  let arr = []
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]))
  }

  let max = -Infinity
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0
      for (let k = i; k <= j; k++) {
        sum += arr[k]
      }
      if (sum > max) {
        max = sum
      }
    }
  }
  console.log(max)
}

solve(['5', '2', '-3', '5', '-3', '7'])
