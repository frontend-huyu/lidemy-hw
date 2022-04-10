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
  let str = lines[0]
  let target = lines[1]
  endsWith(str, target)
}

function endsWith(str, searchString) {
  if (str.length < 1 || str.length > 100) return
  if (searchString.length < 1 || searchString.length > 100) return

  for (let i = 0; i < searchString.length; i++) {
    if (searchString[searchString.length - 1 - i] === str[str.length - 1 - i]) {
      continue
    } else {
      console.log('false')
      return
    }
  }
  console.log('true')
}