// write your solution in here, and remember lines is an array
function solve(lines) {
  let n = Number(lines[0])

  let stars = ''

  for (let i = 1; i <= n; i++) {
    stars = repeat('*', i)
    console.log(stars)
  }
}

function repeat(str, n) {
  let result = ''
  for (let i = 0; i < n; i++) {
    result += str
  }
  return result
}

// solve(['5'])
// *
// **
// ***
// ****
// *****