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
  console.log(toLowerCase(lines[0]))
}

solve(['AbC!!'])

function toLowerCase(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      let code = str.charCodeAt(i)
      result += String.fromCharCode(code + 32)
    } else {
      result += str[i]
    }
  }
  return result
}
