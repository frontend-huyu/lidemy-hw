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
// renew
function solve(lines) {
  let n = Number(lines[0])
  let coordinateArr = []

  for (let i = 1; i < lines.length; i++) {
    let temp = lines[i].split(' ')
    coordinateArr.push({
      x: Number(temp[0]),
      y: Number(temp[1])
    })
  }
  // console.log(coordinateArr)

  compare(coordinateArr)
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(
    (x1 - x2) ** 2 +
    (y1 - y2) ** 2
  )
}

function compare(arr) {
  // compare({}), result = {} => undefined (invalid access)
  let result = null
  // min is a value to be renewed
  let min = Infinity

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = distance(arr[i].x, arr[i].y, arr[j].x, arr[j].y)
      if (temp < min) {
        min = temp
        result = {
          x1: arr[i].x,
          y1: arr[i].y,
          x2: arr[j].x,
          y2: arr[j].y
        }
      }
    }
  }

  if (result.x1 < result.x2) {
    console.log(result.x1 + ' ' + result.y1)
    console.log(result.x2 + ' ' + result.y2)
  } else if (result.x1 > result.x2) {
    console.log(result.x2 + ' ' + result.y2)
    console.log(result.x1 + ' ' + result.y1)
  } else {
    if (result.y1 < result.y2) {
      console.log(result.x1 + ' ' + result.y1)
      console.log(result.x2 + ' ' + result.y2)
    } else {
      console.log(result.x2 + ' ' + result.y2)
      console.log(result.x1 + ' ' + result.y1)
    }
  }
}
