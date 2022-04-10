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
  toLowerCase(str)
}

function toLowerCase(str) {
  if (str.length < 1 || str.length > 100) return
  // console.log('A'.charCodeAt()) // 65
  // console.log('Z'.charCodeAt()) // 90
  // console.log('a'.charCodeAt()) // 97
  // console.log('z'.charCodeAt()) // 122
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      result += String.fromCharCode(str[i].charCodeAt() + 32)
    } else {
      result += str[i]
    }
  }
  console.log(result)
}
