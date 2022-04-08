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
  let arr = lines.slice(1).map(str => Number(str))
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) console.log('Composite')
    if (arr[i] === 2) console.log('Prime')

    if (arr[i] > 2 && arr[i] <= 10 ** 5) {
      if (composite(arr[i]) === true) {
        console.log('Composite')
      } else {
        console.log('Prime')
      }
    }
  }
}

function composite(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return true
    }
  }
}
