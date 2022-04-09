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
  let arr = lines[1].split(' ').map(str => Number(str))
  // console.log(arr, n)
  if (n < 2 || n > 100) return

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= -10000 && arr[i] <= 10000) {
      for (let j = 1; j < arr.length - 1; j++) {
        let num1 = arr[j + 1]
        let num2 = arr[j]
        let num3 = arr[j - 1]

        if (geometric(num1, num2, num3) !== true) {
          console.log('No')
          return
        }
      }
    }
  }
  console.log('Yes')
}

function geometric(num1, num2, num3) {
  // console.log(num1, num2, num3)
  if ((num1 / num2) === (num2 / num3)) {
    // console.log(Math.abs(num1 / num2), Math.abs(num2 / num3))
    return true
  } else if ((num2 / num1) === (num3 / num2)) {
    // console.log(Math.abs(num2 / num1), Math.abs(num3 / num2))
    return true
  } else if ((num3 / num2) === (num1 / num2)) {
    // console.log(Math.abs(num3 / num2), Math.abs(num1 / num2))
    return true
  } else {
    return false
  }
}
