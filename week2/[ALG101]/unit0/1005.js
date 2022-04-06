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
  let m = lines.length
  let result = 0
  if (m < 1 || m > 100) return
  for (let i = 0; i < lines.length; i++) {
    let num = Number(lines[i])
    if (num === 0) return
    if (num >= 2 && num <= 100000) {
      result = factorTotal(num)
      if (factorTotal(result) === num) {
        console.log(factorTotal(num))
      } else {
        console.log('QQ')
      }
    }
  }
}

function factorTotal(n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      sum += i
    }
  }
  return sum
}
