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
  let m = Number(lines[1])
  if (n < 2 || n > 30) return
  if (m >= 0 && m <= n) {
    let numArr = []
    for (let i = 2; i < lines.length; i++) {
      numArr.push(Number(lines[i]))
    }
    numArr.sort((a, b) => a - b)
    // console.log(numArr)

      let seat = seats(n)
      let counter = 3 * n / 2 - 2

      for (let i = 0; i < numArr.length; i++) {
        let a = numArr[i]

        for (let j = 0; j < n / 2; j++) {
          if (a === seat[j][0] || a === seat[j][1]) {
            counter--
          }

          if (numArr[i] === seat[j][0] && numArr[i + 1] === seat[j][1]) {
            counter++
          }
        }
        for (let j = 1; j < n / 2; j++) {
          if (a === seat[j - 1][0] || a === seat[j][0]) {
            counter--
          } else if (a === seat[j - 1][1] || a === seat[j][1]) {
            counter--
          }

          if (numArr[i] === seat[j - 1][0] && numArr[i + 2] === seat[j][0]) {
            counter++
          }
          if (numArr[i] === seat[j - 1][1] && numArr[i + 2] === seat[j][1]) {
            counter++
          }
        }
      }
      console.log(counter)
  }
}
function seats(n) {
  let arr = []
  let seatArr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  for (let i = 0; i < n / 2; i++) {
    seatArr.push(arr.splice(0, 2))
  }
  return seatArr
}
