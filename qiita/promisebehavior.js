// let promise = new Promise((resolve, reject) => {
//   console.log('inner promise')
//   resolve('promise is ready')
// })

// promise.then((value) => {
//   console.log(value)
// })

// console.log('outer promise')

// inner promise
// outer promise
// promise is ready


// new Promise(resolve => resolve(1))
//   .then(result => {
//     console.log(result * 2) // 2
//     console.log(result) // 1
//   })
//   .then(result => {
//     console.log(result) // undefined
//   })
//   .then(result => {
//     console.log(result) // undefined
//   })


// class Thenable {
//   constructor(num) {
//     this.num = num
//   }
//   then(resolve, reject) {
//     console.log(resolve)
//     setTimeout(() => resolve(this.num * 2), 1000)
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result)
//   })
//   .then(result => {
//     console.log(result)
//   })

// // [Function (anonymous)]
// // 2

// class Thenable {
//   constructor(num) {
//     this.num = num
//   }
//   then(resolve, reject) {
//     // console.log('Thenable object') // Thenable object
//     // console.log(resolve) // [Function (anonymous)]
//     setTimeout(() => {
//       // console.log('in setTimeout')
//       resolve(this.num * 2)
//       // console.log('in setTimeout')
//     }, 1000)
//     // return resolve(5)
//   }
// }

// let thenable = new Thenable(1)
// thenable.then(result => {
//   console.log(result)
// })


// new Promise(resolve => resolve(1))
//   .then(result => {
//     console.log(result) // 1
//     return new Thenable(result)
//     // return test(result * 2)
//   })
//   .then(result => {
//     console.log(result) // 2
//   })


// function test(fn) {
//   let num = 1
//   setTimeout(() => {
//     add(num)
//   }, 1000)
// }

// function add(num) {
//   return num * 2
// }
// console.log(test())

// console.log('step 1')

// new Promise(function promise(resolve, reject) {
//   console.log('step 2')
//   setTimeout(() => {
//     throw new Error('setTimeout Whoops!')
//   }, 1000)
//   // throw new Error('Whoops!')
//   resolve('Everything is OK')
// }).catch(function catchError(err) {
//   console.log(err)
// }).then(function getResult(result) {
//   console.log(result)
// })

// console.log('step 3')

// step 1
// step 2
// step 3

// Everything is OK
// Error: setTimeout Whoops! // global error


// console.log('1')
// for (var i = 0; i < 5; i++) {
//   console.log('2')
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
// }
// console.log('3')


// console.log('step 1')

// new Promise(function promise(resolve, reject) {
//   console.log('step 2')
//   setTimeout(() => {
//     throw new Error('setTimeout Whoops!')
//   }, 1000)
//   throw new Error('Whoops!')
//   // resolve('Everything is OK')
// }).catch(function catchError(err) {
//   console.log(err)
// }).then(function getResult(result) {
//   console.log(result)
// })

// console.log('step 3')

// step 1
// step 2

// step 3
// Error: Whoops!
// undefined
// Error: setTimeout Whoops! // global error