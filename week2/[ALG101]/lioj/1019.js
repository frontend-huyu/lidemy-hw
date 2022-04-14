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
  let arr = lines[0].split(' ')
  let width = Number(arr[0])
  let height = Number(arr[1])
  let dungeon = []
  for (let i = 1; i < lines.length; i++) {
    dungeon[i - 1] = lines[i].split('')
  }
  // console.log(dungeon)

  let counter = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (dungeon[i][j] === '.') {
        counter++
      }
    }
  }
  console.log(counter - 1)
}
