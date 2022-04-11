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
  const n = Number(lines[0])
  if (n < 1 || n > 100) return
  const letterArr = lines.splice(1)
  // console.log(letterArr)

  let counterA = 0
  let counterB = 0
  letterArr.map(str => {
    if (str === 'A') {
      counterA++
    } else {
      counterB++
    }
  })
  // console.log(counterB)

  if (counterA === 0 || counterB === 0) {
    console.log('PEACE')
  } else if (counterA > counterB) {
    for (let i = 0; i < letterArr.length; i++) {
      if (letterArr[i] === 'B') {
        console.log(i + 1)
      }
    }
  } else if (counterA < counterB) {
    for (let i = 0; i < letterArr.length; i++) {
      if (letterArr[i] === 'A') {
        console.log(i + 1)
      }
    }
  } else {
    console.log('PEACE')
  }
}
