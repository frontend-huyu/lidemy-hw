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
  console.log(endsWith(lines[0], lines[1]) ? 'true' : 'false')
}

solve(['abcde', 'f']) // false

/*
  abcdef <-
     def <-

  abcdef
     aef
*/

function endsWith(str, searchString) {
  if (searchString.length > str.length) {
    return false
  }
  let strIndex = str.length - 1
  let searchStrIndex = searchString.length - 1

  while (searchStrIndex >= 0) {
    if (str[strIndex] !== searchString[searchStrIndex]) {
      return false
    }
    strIndex--
    searchStrIndex--
  }
  return true
}