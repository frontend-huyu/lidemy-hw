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
  // left index and right index
  let L = 0
  let R = arr.length - 1

  // [...........]
  //  ^L   ^M   ^R
  // [...........]
  //  ^L^M^R
  while (L <= R) {
    let M = Math.floor((L + R) / 2)
    if (arr[M] === q) {
      return M
    } else if (arr[M] > q) {
      R = M - 1
    } else {
      L = M + 1
    }
  }
  return -1
}