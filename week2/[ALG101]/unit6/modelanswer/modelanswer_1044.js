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
  console.log(
    padEnd(lines[0], Number(lines[1]), lines[2])
  )
}

solve(['abcaa', '10', 'xyz'])

// function padEnd(str, targetLength, padString) {
//   if (str.length >= targetLength) {
//     return str
//   }

//   let result = str
//   while (result.length < targetLength) {
//     result += padString
//   }

//   let newResult = ''
//   for (let i = 0; i < targetLength; i++) {
//     newResult += result[i]
//   }
// }


function padEnd(str, targetLength, padString) {
  if (str.length >= targetLength) {
    return str
  }

  let result = str
  let n = 0
  while (result.length < targetLength) {
    result += padString[n]
    n++
    if (n === padString.length) {
      n = 0
    }
  }
  return result
}