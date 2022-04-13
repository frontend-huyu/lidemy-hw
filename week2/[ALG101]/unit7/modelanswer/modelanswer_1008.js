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
  let arr = []
  for (let i = 1; i <= 2 ** 31; i *= 2) {
    arr.push(i)
  }
  let sum = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= n) {
      n -= arr[i]
      sum++
    }
  }
  console.log(sum)
}

solve(['30'])

// console.log((30).toString(2)) // 11110

// function solve(lines) {
//   let n = Number(lines[0])
//   let sum = 0
//   let str = n.toString(2)
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '1') {
//       sum++
//     }
//   }
//   console.log(sum)
// }

function solve(lines) {
  let n = Number(lines[0])
  let sum = 0
  while (n > 0) {
    // last bit is 1, sum += 1; last bit is 0, sum += 0
    sum += n & 1
    n >>= 1
  }
  console.log(sum)
}