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
  // console.log(arr)
  let n = arr[0]
  let m = arr[1]
  if (n < 1 || n > m) return
  if (m < n || m > 10 ** 6) return

  for (let i = n; i <= m; i++) {
    let str = i.toString()
    let digit = str.length
    if (narcissistic(str, digit) === i) {
      console.log(i)
    }
  }
}

function narcissistic(str, digit) {
  let total = 0
  for (let i = 0; i < digit; i++) {
    total += Number(str[i]) ** digit
  }
  return total
}