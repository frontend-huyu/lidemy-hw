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
  let arr = []
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]))
  }
  // console.log(arr)
  let max = -Infinity
  let currentSum = 0
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + currentSum > arr[i]) {
      currentSum += arr[i]
      newArr.push(arr[i])
      // console.log(newArr)
    } else {
      currentSum = arr[i]
      newArr = [arr[i]]
    }
    if (currentSum > max) {
      max = currentSum
    }
  }
  console.log(max)
  // console.log(newArr)
}

solve(['5', '2', '-3', '5', '-3', '7'])

// [2, -3, 4, 10, -4, 7, 2, -5]

// [2] 2
// [2, -3] -1 (-1 > -3) o
// [2, -3, 4] 3 (3 < 4) x
// [4] 4 (4 > 3) o
// [4, 10] 14 (14 > 10) o
// [4, 10, -4] 10 (10 > -4) o
// [4, 10, -4, 10, 7] 17 (17 > 7) o
// [4, 10, -4, 10, 7, 2] 19 (19 > 2) o
// [4, 10, -4, 10, 7, 2, -5] 14 (14 > -5, 14 < 19) x

