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
  // console.log(lines)
  for (let i = 0; i < 3; i++) {
    if (lines[i][0] === lines[i][1] && lines[i][1] === lines[i][2]) {
      console.log(lines[i][0])
      return
    } else if (lines[0][i] === lines[1][i] && lines[1][i] === lines[2][i]) {
      console.log(lines[0][i])
      return
    } else if (lines[0][2] === lines[1][1] && lines[1][1] === lines[2][0]) {
      console.log(lines[0][2])
      return
    } else if (lines[0][0] === lines[1][1] && lines[1][1] === lines[2][2]) {
      console.log(lines[0][0])
      return
    } else {
      console.log('DRAW')
      return
    }
  }

}
