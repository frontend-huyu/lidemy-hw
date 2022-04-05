// arr[0][0], arr[0][1], arr[0][2],
// arr[1][0], arr[1][1], arr[1][2],
// arr[2][0], arr[2][1], arr[2][2]

function winner(arr) {
  for (var i = 0; i < 3; i++) {
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      return arr[i][0]
    }
  }
  for (var i = 0; i < 3; i++) {
    if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
      return arr[0][i]
    }
  }

  if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
    return arr[0][0]
  }

  if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
    return arr[1][1]
  }
  return 'draw'
}

console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
  ['O', 'X', 'O']
])) // O
console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
  ['X', 'X', 'O']
])) // X
console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'O', 'X'],
  ['X', 'X', '']
])) // draw