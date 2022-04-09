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
  let str = lines[0].split('')
  let strFront = str.splice(0, (str.length / 2))
  let strBehind = str.reverse()
  // console.log(strFront)
  if (str.length < 1 || str.length > 100) return

  for (let i = 0; i < strFront.length; i++) {
    if (strFront[i] === strBehind[i]) {
      continue
    } else {
      console.log('False')
      return
    }
  }
  console.log('True')
}
