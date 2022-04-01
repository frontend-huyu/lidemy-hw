function star(n) {
  let result = ''
  for (let i = 1; i <= n; i++) {
    result += '*'
  }
  return result
}

console.log(star(5))
