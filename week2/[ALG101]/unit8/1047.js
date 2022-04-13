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
  // console.log(arr)
  let n = Number(arr[0])
  let m = Number(arr[1])
  let element = lines.slice(1, n + 1)
  let target = lines.slice(n + 1, n + m + 1)
  // console.log(target)

  for (let i = 0; i < target.length; i++) {
    console.log(element.indexOf(target[i]))
  }

}
