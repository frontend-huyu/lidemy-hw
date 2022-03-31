// // return or not return

// don't have to return basically
// function sayHello(name) {
//   console.log('hello', name)
//   // return undefined // default value
// }

// sayHello('Mick')
// console.log(sayHello('Mick')) // undefined

//

// function sayHello(name) {
//   // console.log('hello', name)
//   // return undefined // default value
// }

// const a = sayHello('Mick') // use a variable to catch the value

// console.log(a) // undefined // default value

//

function sayHello(name) {
  console.log('hello', name)
  return 'I am ' + name
}

// const a = sayHello()
// console.log(a)
// hello undefined
// I am undefined

// const a = sayHello('Mick')
// console.log(a)
// hello Mick
// I am Mick


// can't write like this
// a('Mick') // a is not a function

// put a callback function into a variable is different from
// taking a function to declare

// const a = function sayHello(name) {
//   console.log('hello', name)
// }
// a('Mary') // hello Mary


// have to use return
// function double(x) {
//   return x * 2
// }

// const doubleResult = double(3)
// console.log(doubleResult) // 6

// return also means to break out
function double(x) {
  return x * 2 // return value and break out
  console.log(x)
}

const doubleResult = double(3)
console.log(doubleResult) // 6