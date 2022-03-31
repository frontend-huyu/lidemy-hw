// y = f(x) = 3x
// f(1) = 3*1 = 3
// f(10) = 3*10 = 30

// y = f(a, b, c) = a + 2b +3c
// f(1, 2, 3) = 1*1 + 2*2 + 3*3

// function abc(a, b, c) {
//   return a + 2 * b + 3 * c
// }
// console.log(abc(1, 2, 3)) // 14

function returnObjectXY(x, y) {
  return {
    answerX: x * 2,
    answerY: y * 3
  }
}
console.log(returnObjectXY(2, 3))
// { answerX: 4, answerY: 9 }
returnObjectXY(2, 3) // nothing can catch value


// generateArray(3) => [1, 2, 3]
// generateArray(10) => [1, 2, 3, ..., 10]
function generateArray(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(i)
  }
  return result
}
console.log(generateArray(3)) // [ 1, 2, 3 ]
console.log(generateArray(10))
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(generateArray(0)) // []


// ===
function logOdd(num) {
  if (num % 2) {
    console.log(num)
  }
}

function print1to100() {
  for (let i = 1; i <= 100; i++) {
    logOdd(i)
  }
}

print1to100()


// function declare
// function hello() {
//   console.log('hello')
// }

const hello = function () {
  console.log('hello')
}

// ===
function print(any) {
  console.log(any)
}

print('hello') // hello // hello was a string argument for print(any)
print(hello) // [Function: hello] // print variable called hello, it's a function
// print(hello()) // undefined


// call another function in function
function callFunction(any) {
  any()
}

callFunction(hello) // hello


// [1, 2, 3] => [2, 4, 6]
function transform(arr, doubleFunction) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(doubleFunction(arr[i]))
    // result.push(doubleFunction(arr))
  }
  return result
}

function double(x) {
  return x * 2
}

const arr = [1, 2, 3]
// const arr = 10 // push only effect array
// console.log(transform(arr, double)) // [2, 4, 6]

// console.log(transform([1, 2, 3], function (x) {
//   return x * 3
// })
// )
// [ 3, 6, 9 ]

console.log(transform([1, 2, 3], x => x * 3))
// [ 3, 6, 9 ]

// arguments
function add() {
  console.log(arguments) //[Arguments] { '0': 2, '1': 3 } // array-like // object
  console.log(arguments[0], arguments[1]) // 2, 3
  return arguments[0] + arguments[1]
}

console.log(add(2, 3)) // 5