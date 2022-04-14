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
  let arr = lines[0].split(' ')
  let n = Number(arr[0])
  let target = Number(arr[1])
  let numArr = lines[1].split(' ').map(str => Number(str))
  // console.log(arr)

  let index = {}
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === target) {
        index = {
          i: i,
          j: j
        }
        if (index.i < index.j) {
          console.log(index.i + ' ' + index.j)
        } else {
          console.log(index.j + ' ' + index.i)
        }
        return
      }
    }
  }
}
