//arrow function
// function test(n) {
//   return n
// }

// const test = (n) => {
//   return n
// }
const test = n => { // one parameter
  return n
}

let arr = [1, 2, 3, 4, 5]
// console.log(
//   arr.filter(function (value) {
//     return value > 1
//   })
//     .map(function (value) {
//       return value * 2
//     })
// )
// [ 4, 6, 8, 10 ]

// console.log(
//   arr
//     .filter((value) => {
//       return value > 1
//     })
//     .map((value) => {
//       return value * 2
//     })
// )

// console.log(
//   arr
//     .filter(value => {
//       return value > 1
//     })
//     .map(value => {
//       return value * 2
//     })
// )

console.log(
  arr
    .filter(value => value > 1)
    .map(value => value * 2)
)

// note: it can be written by one-line, when function only return value
// memo: Reserved Word 'this'