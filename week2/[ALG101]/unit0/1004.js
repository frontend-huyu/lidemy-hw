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
  let m = Number(lines[0])

  if (m >= 1 && m <= 50) {
    let arr = []
    let raceArr = []

    for (let i = 1; i < lines.length; i++) {
      arr.push(lines[i])
      // console.log(arr)
      raceArr.push(arr[i - 1].split(' '))
      // console.log(raceArr)
    }

    for (let i = 0; i < raceArr.length; i++) {
      let a = raceArr[i][0]
      let b = raceArr[i][1]

      if (Number(raceArr[i][2]) === 1) {
        if (a.length > b.length) {
          console.log('A')
        } else if (b.length > a.length) {
          console.log('B')
        } else {
          console.log(higherNum(a, b))
        }
      } else if (Number(raceArr[i][2]) === -1) {
        if (a.length < b.length) {
          console.log('A')
        } else if (b.length < a.length) {
          console.log('B')
        } else {
          if (higherNum(a, b) === 'A') {
            console.log('B')
          } else if (higherNum(a, b) === 'B') {
            console.log('A')
          } else {
            console.log('DRAW')
          }
        }
      }
    }
  }


}

function higherNum(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (Number(a[i]) > Number(b[i])) {
      return 'A'
    } else if (Number(b[i]) > Number(a[i])) {
      return 'B'
    } else {
      continue
    }
  }
  return 'DRAW'
}

// output
// B
// A
// DRAW