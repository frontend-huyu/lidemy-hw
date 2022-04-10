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
  let length = Number(lines[1])
  let padString = lines[2]
  padEnd(str, length, padString)
}

function padEnd(str, targetLength, padString) {
  if (str.length < 1 || str.length > 100) return
  if (targetLength < 1 || targetLength > 100) return
  if (padString.length < 1 || padString > 100) return

  let result = ''
  let repeat = ''
  let counter = targetLength - str.length

  for (let i = 0; i < counter; i++) {
    repeat += padString[i % padString.length]
  }
  result = str + repeat
  console.log(result)
}