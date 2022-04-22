function repeat(str, times) {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += str
  }
  return result
}

console.log(repeat('', 5))
console.log(repeat('abc', 0))
console.log(repeat([], 2))
console.log(repeat(null, 3)) // nullnullnull
console.log(typeof (repeat(null, 3))) // string