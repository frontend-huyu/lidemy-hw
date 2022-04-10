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
  let target = Number(lines[0])
  let n = Number(lines[1])
  if (n < 1 || n > 100) return

  // let numArr = lines.splice(2).map(str => Number(str))
  // console.log(numArr)
  filter(target, makeNumArr(lines.slice(2)))

}

function filter(target, callback) {
  for (let i = 0; i < callback.length; i++) {
    if (callback[i] === target) {
      continue
    } else {
      console.log(callback[i])
    }
  }
}

function makeNumArr(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(Number(arr[i]))
  }
  return result
}