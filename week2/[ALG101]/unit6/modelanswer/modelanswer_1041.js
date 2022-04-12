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
  console.log(trim(lines[0]))
}

solve(['      a b c'])
solve(['  abc  '])

function trim(str) {
  let result = ''
  let isFrontWhiteSpaceEnd = false
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ' || isFrontWhiteSpaceEnd) {
      isFrontWhiteSpaceEnd = true
      result += str[i]
    }
  }

  let ret = ''
  let isBackWhiteSpaceEnd = false
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] !== ' ' || isBackWhiteSpaceEnd) {
      isBackWhiteSpaceEnd = true
      ret = result[i] + ret
      // ret += result[i]
      // ret = ret + result[i]
    }
  }
  return ret
}
