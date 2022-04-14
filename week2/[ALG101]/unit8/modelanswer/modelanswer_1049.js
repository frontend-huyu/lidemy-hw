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
  let x = lines[1].split(' ').map(Number)
  let y = lines[2].split(' ').map(Number)
  let min = Infinity
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      let d = Math.abs(x[i] - y[j])
      if (d < min) {
        min = d
      }
    }
  }
  console.log(min)
}

solve(['5 5', '1 9 12 15 18', '3 6 10 11 12'])
