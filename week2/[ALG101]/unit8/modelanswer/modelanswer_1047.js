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
  let [n, m] = lines[0].split(' ') // ['5', '3']
  let arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = Number(lines[i + 1])
  }

  n = Number(n)

  for (let i = n + 1; i < lines.length; i++) {
    let q = Number(lines[i])
    console.log(search(arr, q))
  }
}

solve(['5 3', '1', '2', '3', '4', '5', '100', '3', '6'])

function search(arr, q) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === q) {
      return i
    }
  }
  return -1
}