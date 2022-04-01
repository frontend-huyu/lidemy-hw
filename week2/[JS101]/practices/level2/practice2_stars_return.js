function stars(n) {
  let stars = '*'
  for (let i = 0; i < n; i++) {
    stars += '*'
  }
  return stars
}

function makeStars(n) {
  let result = '*'
  for (let i = 1; i < n; i++) {
    result += '\n'
    for (let j = i; j < n; j++) {
      result += stars(j)
      break
    }
  }
  console.log(result)
}

makeStars(1)
makeStars(2)
makeStars(5)