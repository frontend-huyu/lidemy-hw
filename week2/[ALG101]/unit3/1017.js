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
  let c = Number(lines[0])
  let n = Number(lines[1])
  if (c < 0 || c > 1000) return
  if (n < 1 || n > 1000) return

  let arr = []
  for (let i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]))
  }
  // console.log(arr)


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1 || arr[i] > 10 ** 5) {
      arr.splice(i, 1)
    }
  }
  arr = sort(arr)
  // console.log(arr)

  let result = 0
  for (let i = 0; i < c; i++) {
    result += arr[i]
  }
  console.log(result)
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
