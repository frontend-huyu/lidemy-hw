// y = 1 + 2x
// x = 0, y = 1, x = 1, y = 3, x = 2, y = 5
function stars(n) {
  let stars = ''
  stars += '*' + '*'.repeat(n * 2) + '\n'
  return stars
}
// console.log(stars(5))

function spaceWithStar(n) {
  let space = ''
  for (let i = n; i >= 1; i--) {
    // space: 5, 4, 3, 2, 1
    // stars: 0, 1, 2, 3, 4
    space += '_'.repeat(i - 1)
    space += stars(n - i)
    // console.log(space)
    // console.log('n:', n)
    // console.log('i', i)
  }
  return space
}
// console.log(spaceWithStar(5))

function trunk(n) {
  let trunk = ''
  for (let i = 0; i < n; i++) {
    trunk += '_'.repeat(n - 1)
    for (let j = 0; j < 1; j++) {
      trunk += '*'
    }
    trunk += '\n'
  }
  return trunk
}
// console.log(trunk(1))

function tree(n) {
  let result = ''
  result += spaceWithStar(n)
  result += trunk(n)
  return result
}

// console.log(tree(1))
// console.log(tree(2))
// console.log(tree(5))
// console.log(tree(7))
// console.log(tree(9))