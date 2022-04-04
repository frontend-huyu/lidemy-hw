function star(i) {
  var result = ''
  for (var j = 1; j <= i; j++) {
    result += '*'
  }
  return result
}

function stars2(n) {
  for (var i = 1; i <= n; i++) {
    console.log(star(i))
  }

  for (var i = n - 1; i > 0; i--) {
    console.log(star(i))
  }
}

stars2(5)