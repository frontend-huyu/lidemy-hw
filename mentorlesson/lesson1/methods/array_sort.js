// sort()
// default sort is ascending order(昇べき), change original array
// judged by element's opening
const arr = [1, 50, 1000, 4, 3000]
console.log(arr.sort()) // [ 1, 1000, 3000, 4, 50 ]
console.log(arr) // [ 1, 1000, 3000, 4, 50 ]

// letter is judged by alphabetical order
const months = ['March', 'Jan', 'Feb', 'Dec']
console.log(months.sort()) // [ 'Dec', 'Feb', 'Jan', 'March' ]
console.log(months) // [ 'Dec', 'Feb', 'Jan', 'March' ]

// sort(compareFunction)
// make a sort function to judge
let numArr = [1, 50, 1000, 4, 3000]

// numArr.sort(function compareFunction(a, b) {
//   if (a < b) return -1
// })
// console.log(numArr) // [ 1, 4, 50, 1000, 3000 ]

// write like this way, it also can make ascending order array
// because they both mean if (a < b) return negative number
// 1 - 4 = -3, 4 - 50 = -46..., etc.
numArr.sort((a, b) => a - b)
console.log(numArr) // [ 1, 4, 50, 1000, 3000 ]

// so when we write like this, it will make descending order array
// if (a > b) return positive number
// 3000 - 1000 = 2000, 1000 - 50 = 950..., etc.
numArr.sort((a, b) => b - a)
console.log(numArr) // [ 3000, 1000, 50, 4, 1 ]


numArr = [1, 50, 50, 4, 1]
console.log(numArr.sort((a, b) => a - b)) // [ 1, 1, 4, 50, 50 ]
console.log(numArr.sort((a, b) => b - a)) // [ 50, 50, 4, 1, 1 ]

/*
function compare(a, b) {
  if (a < b) {
    // ある順序の基準において a が b より小
    return -1;
  }
  if (a > b) {
    // その順序の基準において a が b より大
    return 1;
  }
  // a は b と等しいはず
  return 0;
}
*/