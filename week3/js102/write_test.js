function repeat(str, times) {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += str
  }
  return result
}

console.log(repeat('a', 5) === 'aaaaa') // true
console.log(repeat('abc', 1) === 'abc') // true
console.log(repeat('z!Z!Z!', 3) === 'z!Z!Z!z!Z!Z!z!Z!Z!') // true
console.log(repeat('', 5) === '') // true
console.log(repeat('abc', 0) === '') // true