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
  if (n < 2 || n > 100) return

  let numArr = []
  for (let i = 1; i < lines.length; i++) {
    numArr.push(lines[i].split(' ').map(str => Number(str)))
  }

  let distance = 0
  let coordinates = []
  let index = 0


  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i][0] < -100 || numArr[i][0] > 100) {
      console.log(numArr[i][0])
      return
    } else if (numArr[i][1] < -100 || numArr[i][1] > 100) {
      console.log(numArr[i][1])
      return
    }
  }

  for (let i = 0; i < numArr.length; i += 2) {
    let x = (numArr[i][0] - numArr[i + 1][0]) ** 2
    let y = (numArr[i][1] - numArr[i + 1][1]) ** 2
    distance = Math.sqrt(x + y).toFixed(2)
    coordinates.push(Number(distance))
  }

  for (let i = 0; i < coordinates.length - 1; i++) {
    if (coordinates[i] < coordinates[i + 1]) {
      index = i
    }
  }

  let first = numArr[2 * index]
  let second = numArr[2 * index + 1]
  compare(first, second)
}

function compare(first, second) {
  if (first[0] < second[0]) {
    console.log(first[0], first[1])
    console.log(second[0], second[1])
  } else if (first[0] === second[0]) {
    if (first[1] < second[1]) {
      console.log(first[0], first[1])
      console.log(second[0], second[1])
    } else {
      console.log(second[0], second[1])
      console.log(first[0], first[1])
    }
  } else {
    console.log(second[0], second[1])
    console.log(first[0], first[1])
  }
}