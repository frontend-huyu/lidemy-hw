// pass by value: copy value and pass (address is different)
// function swap(a, b) {
//   let temp = a
//   a = b
//   b = temp
//   console.log('a, b:', a, b)
// }

// const number1 = 10
// const number2 = 20
// console.log(number1, number2) // 10, 20

// swap(number1, number2) // a, b: 20, 10

// console.log(number1, number2) // 10, 20

// pass by reference?
// function addValue(obj) {
//   obj.number++
//   console.log(obj)
// }

// const a = {
//   number: 10
// }

// console.log(a) // { number: 10 }
// addValue(a) // { number: 11 }
// console.log(a) // { number: 11 }

// they refer to the same address, but...
// if pass a new address, it refer to the new address
function addValue(obj) {
  obj = {
    number: 100
  }
  console.log(obj)
}

const a = {
  number: 10
}

console.log(a) // { number: 10 }
addValue(a) // { number: 100 }
console.log(a) // { number: 10 }

// note: JavaScript only 'pass by value', or 'pass by sharing'
// --> if it pass by reference, it should also change a's value outside, because they're the same address in computer
// but it's just sharing the address, so another variable can reassign a new address to put new object
