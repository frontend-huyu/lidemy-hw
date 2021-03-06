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
  if (n < 0 || n > 100) return
  let str = lines[1]
  if (str.length < 1 || str.length > 1000) return
  // console.log(str)
  // console.log('a'.charCodeAt()) // 97
  // console.log('z'.charCodeAt()) // 122

  let result = ''
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i].charCodeAt())
    // console.log(lowerCode(str[i].charCodeAt(), n))
    result += String.fromCharCode(97 + lowerCode(str[i].charCodeAt(), n))
  }
  console.log(result)
}

function lowerCode(char, n) {
  let result = 0
  if (char + n > 122) {
    result = (char + n - 97) % 26
  } else {
    result = char + n - 97
  }
  return result
}
