// join() // String
let arr = [1, 2, 3]
console.log(arr.join('!')) // 1!2!3 // String
console.log(arr.join('')) // 123


// map() // iterate object with function
function double(x) {
  return x * 2
}
console.log(arr.map(double)) // [ 2, 4, 6 ]

function negative(x) {
  return x * -1
}
console.log(arr.map(negative)) // [ -1, -2, -3 ]

// anonymous
console.log(arr
  .map(x => x * -1)
  .map(x => x * 2)
) // [ -2, -4, -6 ]



// filter() // iterate object with function
arr = [0, 2, 3, -1, -5]
console.log(arr
  .map(x => x * 2)
  .filter(x => x > 0)
) // [ 4, 6 ]


// slice(begin, end) (end not included) // return a new array
arr = [0, 1, 2, 3, 4, 5, 6]
console.log(arr.slice(3)) // [ 3, 4, 5, 6 ]
console.log(arr.slice(3, 1)) // [] // doesn't exist
console.log(arr.slice(3, 4)) // [ 3 ] // from [first_i] to [second_i]
console.log(arr.slice(3, -1)) // [ 3, 4, 5 ] // through the second-to-last element
// or you can say through the end, but end is not included
console.log(arr)
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]


// splice(start, deleteCount, item) // change original array
let months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb')
console.log(months)
// [ 'Jan', 'Feb', 'March', 'April', 'June' ]
// delete 0, means to insert item to index[1]

months.splice(4, 1, 'May')
console.log(months)
// [ 'Jan', 'Feb', 'March', 'April', 'May' ]
// delete 1 in index[4], and inset item to index[4]


// sort() // change original array
months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)
// [ 'Dec', 'Feb', 'Jan', 'March' ]
// sorting by alphabetical order
//
let arrNum = [1, 30, 4, 21]
arrNum.sort()
console.log(arrNum) // [ 1, 21, 30, 4 ]
//
// use sort(compareFunction)
// small to big
arrNum = [1, 30, 4, 21]
arrNum.sort(function (a, b) {
  if (a === b) return 0 // do nothing
  if (b > a) return -1 // change index
  return 1
})
console.log(arrNum) // [ 1, 4, 21, 30 ]
//
// big to small
arrNum = [1, 30, 4, 21]
arrNum.sort(function (a, b) {
  if (a === b) return 0
  return a > b ? -1 : 1
})
console.log(arrNum) // [ 30, 21, 4, 1 ]
// note: if it was string or floating point, it would be more complicated
//
// other sorts: small to big
arrNum = [1, 30, 4, 21]
arrNum.sort(function (a, b) {
  if (a === b) return 0
  return (b - a) > 0 ? -1 : 1
})
console.log(arrNum)