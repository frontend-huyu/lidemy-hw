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
  let m = Number(lines[n + 1])
  let str = ''
  let result = ''
  let numArr = []

  if (1 <= n && n <= 100) {
    for (let i = 1; i <= n; i++) {
      str += lines[i]
    }
  }

  if (1 <= m && m <= str.length) {
    for (let i = n + 2; i < lines.length; i++) {
      numArr.push(Number(lines[i]))
      // console.log(numArr)
    }
    for (let i = 0; i < numArr.length; i++) {
      result += str[numArr[i] - 1]
    }
  }
  console.log(result)
}


// output
// aoy