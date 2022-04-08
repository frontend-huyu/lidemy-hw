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
  let arr = [].concat(lines[0].split(' '))
  // console.log(arr)

  if (arr[0].length === arr[1].length) {
    if (trueOrFalse(arr[0], arr[1]) === true) {
      console.log('Yes')
    } else {
      console.log('No')
    }
  }
}

function trueOrFalse(str1, str2) {
  let result = ''
  for (let i = 0; i < str1.length; i++) {
    if (Number(str1[i]) === Number(str2[i])) {
      result += str1[i]
    } else {
      return false
    }
  }
  if (result === str1) return true
}
