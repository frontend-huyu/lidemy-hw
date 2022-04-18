// concept
// var i = 1

// label:
// console.log(i)
// i++
// if (i <= 100) {
//   goto label
// }

// console.log('i=', i)


// do while
var i = 1

do {
  console.log(i) // 9 // 10
  i++
  console.log(i) // 10 // 11
  if (i % 2 === 1) { // if it is odd number
    continue // get back to while(i <= 10)
  }
  console.log('i++', i) // 10
} while (i <= 10) // 10 <= 10 is true // 11 <= 10 is false


console.log('i=', i) // 11

