// arr[0], [3], [6]
// arrOne
function addOne(arr, n) {
  // x = 1, check 0, 1, 2 | 3, 4, 5 | 6, 7, 8 |
  let counter = 0
  for (let i = 0; i < 2; i++) {
    if (arr[n] === arr[n + 1]) {
      counter++
      n += 1
    }
  }
  return counter
}

// arr[0], [1], [2]
// addThree
function addThree(arr, n) {
  // y = 3, check 0, 3, 6 | 1, 4, 7 | 2, 5, 8 |
  let counter = 0
  for (let i = 0; i < 2; i++) {
    if (arr[n] === arr[n + 3]) {
      counter++
      n += 3
    }
  }
  return counter
}

// arr[2]
// addTwo
function addTwo(arr, n) {
  let counter = 0
  for (let i = 0; i < 2; i++) {
    if (arr[n] === arr[n + 2]) {
      counter++
      n += 2
    }
  }
  return counter
}

// arr[0]
// addFour
function addFour(arr, n) {
  // z = 4, check 0, 4, 7
  let counter = 0
  for (let i = 0; i < 2; i++) {
    if (arr[n] === arr[n + 4]) {
      counter++
      n += 4
    }
  }
  return counter
}

function indexZero(arr) {
  if (arr[0] === 'O') {
    if (addOne(arr, index[0]) >= 2 ||
      addThree(arr, index[0]) >= 2 ||
      addFour(arr, index[0]) >= 2) {
      return 'winner is O'
    }
  } else if (arr[0] === 'X') {
    if (addOne(arr, index[0]) >= 2 ||
      addThree(arr, index[0]) >= 2 ||
      addFour(arr, index[0]) >= 2) {
      return 'winner is X'
    }
  }
}

function indexOne(arr) {
  if (arr[1] === 'O') {
    if (addThree(arr, index[1]) >= 2) {
      return 'winner is O'
    }
  } else if (arr[1] === 'X') {
    if (addThree(arr, index[1]) >= 2) {
      return 'winner is X'
    }
  }
}

function indexTwo(arr) {
  if (arr[2] === 'O') {
    if (addTwo(arr, index[2]) >= 2 ||
      addThree(arr, index[2]) >= 2) {
      return 'winner is O'
    }
  } else if (arr[2] === 'X') {
    if (addTwo(arr, index[2]) >= 2 ||
      addThree(arr, index[2]) >= 2) {
      return 'winner is X'
    }
  }
}

function indexThree(arr) {
  if (arr[3] === 'O') {
    if (addOne(arr, index[3]) >= 2) {
      return 'winner is O'
    }
  } else if (arr[3] === 'X') {
    if (addOne(arr, index[3]) >= 2) {
      return 'winner is X'
    }
  }
}

function indexSix(arr) {
  if (arr[6] === 'O') {
    if (addOne(arr, index[6]) >= 2) {
      return 'winner is O'
    }
  } else if (arr[6] === 'X') {
    if (addOne(arr, index[6]) >= 2) {
      return 'winner is X'
    }
  }
}

let index = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8
]

function winner(arr) {
  let newArr = [].concat(...arr)
  console.log(newArr)

  if (newArr.length > 0) {
    if ((indexZero(newArr) || indexOne(newArr) ||
      indexTwo(newArr) || indexThree(newArr) ||
      indexSix(newArr)) === undefined) {
      return 'draw'
    } else {
      return indexZero(newArr) || indexOne(newArr) ||
        indexTwo(newArr) || indexThree(newArr) ||
        indexSix(newArr)
    }
  } else {
    return 'draw'
  }
}

//
console.log(winner([
  ['O', 'X', 'O']
])) // draw
console.log(winner([
  ['O', 'O', ''],
  ['X', 'X', 'X']
])) // winner is X
console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'X', '']
])) // draw
//
console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
  ['O', 'X', 'O']
])) // winner is O
console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
  ['X', 'X', 'O']
])) // winner is X
console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'O', 'X'],
  ['X', 'X', '']
])) // draw