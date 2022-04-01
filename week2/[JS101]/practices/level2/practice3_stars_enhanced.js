function star(n) {
  let star = ''
  for (let i = 0; i < n; i++) {
    star += '*'
  }
  return star
}

// function stars2(n) {
//   let result = ''
//   for (let i = 0; i < n; i++) {
//     result += stars(i) + '\n'
//   }
//   for (let j = n; j <= 1; j--) {
//     result += stars(j) + '\n'
//   }
//   console.log(result)
// }

function stars2(n) {
  let result = ''
  for (let i = n; i <= 1; i--) {
    for (let j = 1; j < i; j++) {
      result += '*'
    }
    result += '*'
  }

  console.log(result)
}

stars2(5)


