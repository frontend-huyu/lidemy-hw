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
  let t = Number(lines[0])
  let numArr = lines.slice(1).map(str => Number(str))
  // console.log(numArr)
  if (t < 1 || t > 100) return

  let coordinates = []
  for (let i = 0; i < t; i++) {
    coordinates.push(numArr.slice(4 * i, 4 * (i + 1)))
  }

  let distance = 0
  for (let i = 0; i < coordinates.length; i++) {
    let x = (coordinates[i][0] - coordinates[i][2]) ** 2
    let y = (coordinates[i][1] - coordinates[i][3]) ** 2
    distance = Math.sqrt(x + y).toFixed(2)
    console.log(distance)
  }
}
