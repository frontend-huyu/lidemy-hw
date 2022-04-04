function star(n) {
  var answer = ''
  for (let i = 1; i <= n; i++) {
    answer += '*'
  }
  return answer
}
console.log(star(7))