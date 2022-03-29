//arrow function can use var, const, let to declare
var add1 = function (a, b) {
  return a + b
}
console.log(add1(1, 2))

const add2 = (a, b) => {
  return a + b
}
console.log(add2(1, 2))


// if function just return value in one-line
const arr = [1, 2, 3, 4, 5]
console.log(
  arr.map((n) => n * n)
)

// more simply
// console.log(
//   arr.map(n => n*n)
// )
