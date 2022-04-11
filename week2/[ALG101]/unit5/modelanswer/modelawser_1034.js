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
  let n = Number(lines[0])
  let str = lines[1]
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result += ceaserCipher(n, str[i])
  }
  console.log(result)
}

solve(['10', 'xray'])

function ceaserCipher(n, str) {
  let code = str.charCodeAt(0) - 97
  let newCode = (code + n) % 26
  return String.fromCharCode(newCode + 97)
}
