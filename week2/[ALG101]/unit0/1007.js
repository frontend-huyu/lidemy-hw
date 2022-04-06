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
  if (m < 1 || m > 50) return

  let arr = []
  let nameLikeArr = []
  for (let i = 1; i < lines.length; i++) {
    arr.push(lines[i])
    nameLikeArr.push(arr[i - 1].split(' '))
  }

  let result = []
  let temp = 0

  for (let i = 0; i < nameLikeArr.length; i++) {
    let name = nameLikeArr[i][0]
    let like = Number(nameLikeArr[i][1])
    if (name.length > 1 && name.length < 20) {
      if (checkStr(name) === true) {
        if (checkTotal(like) === true) {
          if (temp < like) {
            temp = like
            result.push(nameLikeArr[i][0])
          } else if (like === temp) {
            result.push(nameLikeArr[i][0])
          }
        }
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
  }
}

// function checkStr(str) {
//   for (let i = 0; i < str.length; i++) {
//     if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z')) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

function checkStr(str) {
  if (str[0] >= 'A' && str[0] <= 'Z') {
    for (let i = 1; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z') {
        continue
      } else {
        return false
      }
    }
  } else {
    return false
  }
  return true
}


function checkTotal(num) {
  if (num >= 0 && num <= 100) {
    return true
  } else {
    return false
  }
}