function star(n) {
  let star = ''
  for (let i = 0; i < n; i++) {
    star += '*'
  }
  return star
}

function stars2(n) {
  let result = ''
  for (let i = 1; i <= n; i++) {
    result += star(i)
    if (i !== n) {
      result += '\n'
    }
  }
  for (let j = n; j > 1; j--) {
    result += '\n' + star(j - 1)
  }
  console.log(result)
}

stars2(1)
stars2(3)
stars2(5)