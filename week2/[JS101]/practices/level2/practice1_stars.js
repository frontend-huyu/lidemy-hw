function stars(n) {
  let result = ''
  for (let i = 1; i <= n; i++) {
    result += '*'
    console.log(result)
  }
}
stars(1)
stars(3)
stars(7)