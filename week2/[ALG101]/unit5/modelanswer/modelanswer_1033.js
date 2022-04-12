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
  let dots = []
  for (let i = 1; i < lines.length; i++) {
    let temp = lines[i].split(' ')
    // let x = Number(temp[0])
    // let y = Number(temp[1])

    dots.push({
      x: Number(temp[0]),
      y: Number(temp[1])
    })
  }
  // console.log(dots)

  let min = Infinity
  let ans = null
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let dis = distance(
        dots[i].x, dots[i].y, dots[j].x, dots[j].y
      )
      if (dis < min) {
        min = dis
        ans = {
          x1: dots[i].x,
          y1: dots[i].y,
          x2: dots[j].x,
          y2: dots[j].y
        }
      }
    }
  }

  if (ans.x1 > ans.x2) {
    console.log(ans.x2 + ' ' + ans.y2)
    console.log(ans.x1 + ' ' + ans.y1)
  } else if (ans.x1 < ans.x2) {
    console.log(ans.x1 + ' ' + ans.y1)
    console.log(ans.x2 + ' ' + ans.y2)
  } else {
    if (ans.y1 > ans.y2) {
      console.log(ans.x2 + ' ' + ans.y2)
      console.log(ans.x1 + ' ' + ans.y1)
    } else {
      console.log(ans.x1 + ' ' + ans.y1)
      console.log(ans.x2 + ' ' + ans.y2)
    }
  }
}

function distance(x1, y1, x2, y2) {
  let dis = Math.sqrt(
    abs(x1 - x2) ** 2 +
    abs(y1 - y2) ** 2
  )
  return dis.toFixed(2)
}

function abs(n) {
  if (n < 0) {
    return -n
  }
  return n
}