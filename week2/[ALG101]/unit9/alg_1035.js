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
  // faster: O(n log n) ex. sort(a,b)
  // lower: O(n^2)

  // counting sort
  let arr = []
  for (let i = 1; i <= 100; i++) {
    arr[i] = 0
  }
  // console.log(arr.length)
  for (let i = 1; i < lines.length; i++) {
    let n = Number(lines[i])
    // console.log(n)
    arr[n]++
    // console.log(arr)
  }

  for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      console.log(i)
    }
  }
}

solve(['5', '1', '7', '4', '4', '5'])