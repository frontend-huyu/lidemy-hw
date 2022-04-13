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
  console.log(slice(lines[0], Number(lines[1]), Number(lines[2])))
}

solve(['abcde', '0', '8'])

function slice(str, beginIndex, endIndex) {
  let result = ''

  if (endIndex > str.length - 1) {
    endIndex = str.length
  }

  for (let i = beginIndex; i < endIndex; i++) {
    result += str[i]
  }
  return result
}