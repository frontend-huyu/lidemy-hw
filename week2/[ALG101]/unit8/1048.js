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
  let numArr = lines.slice(1).map(str => Number(str))
  // console.log(numArr)

  let temp = -Infinity

  for (let i = 0; i < numArr.length; i++) {
    let result = 0
    for (let j = i; j < numArr.length; j++) {
      result += numArr[j]
      if (result > temp) {
        temp = result
      }
    }
  }
  console.log(temp)
}

