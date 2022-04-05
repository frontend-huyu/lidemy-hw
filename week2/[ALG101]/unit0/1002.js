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
  for (let i = 0; i < lines.length; i++) {
    let arr = lines[i].split(' ')
    let a = Number(arr[0])
    let b = Number(arr[1])

    if (a === 0 && b === 0) {
      return
    }
    if (a > b) {
      console.log(a)
    } else {
      console.log(b)
    }
  }
}

// solve(['1 1'])
// solve(['2 3'])
// solve(['0 0'])
