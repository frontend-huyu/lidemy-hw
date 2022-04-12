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
  let str = lines[0]
  let arr = []
  for (let i = 2; i < lines.length; i++) {
    arr.push(lines[i])
  }
  console.log(join(arr, str))
}

solve([',', '3', '1', '2', '3'])

function join(arr, separator) {
  // let result = ''
  let result = arr[0]
  for (let i = 1; i < arr.length; i++) {
    // if (i === arr.length - 1) {
    //   result += arr[i]
    // } else {
    //   result += arr[i] + separator
    // }
    result += separator + arr[i]
  }
  return result
}

// function join(arr, separator) {
//   let result = ''
//   for (let i = 0; i < arr.length - 1; i++) {
//     result += arr[i] + separator
//   }
//   return result + arr[arr.length - 1]
// }