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
  const str = lines[0]
  const start = Number(lines[1])
  const end = Number(lines[2])
  slice(str, start, end)
}

function slice(str, beginIndex, endIndex) {
  if (str.length < 1 || str.length > 100) return
  if (beginIndex < 0 || beginIndex > str.length) return
  if (endIndex < beginIndex || endIndex > str.length) return

  let result = ''
  for (let i = beginIndex; i < endIndex; i++) {
    result += str[i]
  }
  console.log(result)
}