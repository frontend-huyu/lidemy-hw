// [
//   ['0', '1', '2'],
//   ['3', '4', '5'],
//   ['6', '7', '8']
// ]
// win1: 0, 1, 2 | 0, 3, 6 | 0, 4, 8
//  n+x, n+2x | n+y, n+2y |n+z, n+2z
//  start = 0, x = 1, y = 3, z = 4
//  i = 0, i++, i += 3, i += 4

// win: 2, 4, 6
//  n+t, n+2t
//  start = 2, t = 2
// i = 2, i += 2

console.log(winner([
  ['O', 'O', 'X'],
  ['O', 'X', 'X'],
  ['O', 'X', 'O']
]))

//   ['1', '2', '3', '4'],
//   ['5', '6', '7', '8'],
//   ['9', '10', '11', '12']
//   ['13', '14', '15', '16']

// square matrix + 1, y+1, z+1

// first: 0, 1, 2 | 3, 4, 5 | -> addOne
// second: 0, 3, 6 | 1, 4, 7 | -> addThree
// third: 2, 4, 6 | -> addTwo
// last: 2, 5, 8 | 6, 7, 8 | 0, 4, 8 | -> addOne, addThree, addFour
//       （縦）     （横）    （斜め）

// arr[0] -> addOne, addThree, addFour
// arr[1] -> addThree
// arr[2] -> addTwo,Three
// arr[3] -> addOne
// arr[6] -> addOne

// draw: 2, 4, 6 | 0, 4, 8

