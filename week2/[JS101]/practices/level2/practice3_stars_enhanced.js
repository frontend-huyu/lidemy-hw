function star(n) {
  let star = ''
  for (let i = 0; i < n; i++) {
    star += '*'
  }
  return star
}

function stars2(n) {
  let result = ''
  console.log(result)
  for (let i = 1; i < n; i++) {
    result += star(i) + '\n'
  }
  for (let i = n; i >= 1; i--) {

    result += star(i) + '\n'
  }
  console.log(result)
}

stars2(1)
stars2(3)
stars2(5)

