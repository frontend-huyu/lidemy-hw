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
  let arr = lines[1].split(' ')

  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    let temp = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        temp++
        if (temp > counter) {
          counter = temp
        }
      }
    }
  }
  console.log(counter)
}