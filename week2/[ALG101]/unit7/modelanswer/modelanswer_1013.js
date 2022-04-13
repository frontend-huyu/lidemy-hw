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
  console.log(f(n))
}

function f(n) {
  if (n === 2) return 1
  if (n === 3) return 2
  return f(n - 1) + f(n - 2)
}

// recursion
// f(4) => f(3) + f(2)
// f(3) => 2
// f(2) => 1

// function solveArr(arr) {
//   let arr = [0, 1, 1, 2]
//   // arr[n]
//   for (let i = 4; i <= 15; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2]
//   }
//   let n = Number(lines[0])
//   console.log(arr[n])
// }

solve(['5'])

// 1->2: 1
// 2->3: 2
// 3->4: 1+2 = 3
// 4->5: 2+3 = 5
// 5->6: 3+5 = 8
// f(n) = f(n-1) + f(n-2)
