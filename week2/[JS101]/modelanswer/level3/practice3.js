function tree(n) {
  if (n === 1) return console.log('*')
  printTreeTop(n)
  printTreeBottom(n)
}

function printTreeTop(n) {
  for (var i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1))
  }
}

function printTreeBottom(n) {
  for (var i = 1; i <= n; i++) {
    console.log(' '.repeat(n - 1) + '*')
  }
}

tree(5)