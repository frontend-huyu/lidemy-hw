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
  let line = lines[0].split(' ').map(str => str.split(''))
  let lifeArr = [].concat(...line).map(str => Number(str))
  // console.log(lifeArr)
  let total = 0
  for (let i = 0; i < lifeArr.length; i++) {
    total += lifeArr[i]
  }

  if (add(total) > 10) {
    console.log(add(add(total)))
  } else {
    console.log(add(total))
  }
}

function add(total) {
  let lifeNum = total.toString().split('')
  let result = 0
  for (let i = 0; i < lifeNum.length; i++) {
    result += Number(lifeNum[i])
  }
  return result
}