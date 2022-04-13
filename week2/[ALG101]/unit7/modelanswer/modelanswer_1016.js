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
  let aCount = 0
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === 'A') {
      aCount++
    }
  }
  let bCount = n - aCount
  if (aCount === bCount || aCount === 0 || bCount === 0) {
    console.log('PEACE')
  } else {
    // let aLose = aCount < bCount
    let whoLose = aCount < bCount ? 'A' : 'B'
    for (let i = 1; i < lines.length; i++) {
      // if (aLose && lines[i] === 'A') {
      //   console.log(i)
      // } else if (!aLose && lines[i] === 'B') {
      //   console.log(i)
      // }
      if (whoLose === lines[i]) {
        console.log(i)
      }
    }
  }
}

solve(['5', 'A', 'B', 'B', 'A', 'B'])
