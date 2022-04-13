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
  let arr = lines[0].split(' ').map(str => Number(str))
  let xArr = lines[1].split(' ').map(str => Number(str))
  let yArr = lines[2].split(' ').map(str => Number(str))
  // console.log(xArr)

  let temp = Infinity
  for (let i = 0; i < xArr.length; i++) {
    for (let j = 0; j < yArr.length; j++) {
      if (abs(xArr[i] - yArr[j]) < temp) {
        temp = abs(xArr[i] - yArr[j])
      }
    }
  }
  console.log(temp)
}

function abs(n) {
  if (n < 0) {
    return n * -1
  }
  return n
}