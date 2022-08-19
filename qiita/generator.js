// function* generateSequence() {
//   yield 1
//   yield 2
//   return 3
// }


// let generator = generateSequence()

// console.log(generator) // Object [Generator] {}

// console.log(generator.next()) // { value: 1, done: false }
// console.log(JSON.stringify(generator.next())) // {"value":2,"done":false}
// console.log(generator.next()) // { value: 3, done: true }
// console.log(generator.next()) // { value: undefined, done: true }


// function* generateSequence() {
//   yield 1
//   yield 2
//   yield 3
// }

// let generator = generateSequence()

// for (let value of generator) {
//   console.log(value)
// }
// console.log(generator.next()) // { value: undefined, done: true }


// let sequence = [0, ...generateSequence()]
// console.log(sequence) // [ 0, 1, 2, 3 ]


// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i
//   }
// }

// let sequence = [...generateSequence(1, 5)]
// console.log(sequence) // [ 1, 2, 3, 4, 5 ]

// let range = {
//   from: 1,
//   to: 5,
//   *[Symbol.iterator]() {
//     for (let value = this.from; value <= this.to; value++) {
//       yield value
//     }
//   }
// }

// console.log([...range]) // [ 1, 2, 3, 4, 5 ]
// console.log(range[Symbol.iterator]) // [GeneratorFunction: [Symbol.iterator]]
// let iterator = range[Symbol.iterator]()
// console.log(iterator.next()) // { value: 1, done: false }
// console.log(iterator.next()) // { value: 2, done: false }


// function* breakGenerator() {
//   yield 1
//   yield 2
//   yield 3
// }

// for (let value of breakGenerator()) {
//   console.log(value)
//   break
// }

// console.log('done')
// console.log(breakGenerator().next())

// 1
// done
// { value: 1, done: false }

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i
// }

// function* generatePasswordCodes() {
//   // 0..9
//   yield* generateSequence(48, 57)
//   // A..Z
//   yield* generateSequence(65, 90)
//   // a..z
//   yield* generateSequence(97, 122)
// }

// let str = ''
// for (let code of generatePasswordCodes()) {
//   str += String.fromCharCode(code)
// }

// console.log(str)
// 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

// function* iterableObj() {
//   yield* [1, 2]
//   yield* '34'
//   yield* Array.from(arguments)
// }

// let iterator = iterableObj(5, 6)

// console.log(iterator.next()) // { value: 1, done: false }
// console.log(iterator.next()) // { value: 2, done: false }
// console.log(iterator.next()) // { value: '3', done: false }
// console.log(iterator.next()) // { value: '4', done: false }
// console.log(iterator.next()) // { value: 5, done: false }
// console.log(iterator.next()) // { value: 6, done: false }

// function* twoWayStreet() {
//   // yield can output or input value
//   let result = yield '2 + 2?'

//   console.log(result)
// }

// let generator = twoWayStreet()
// console.log(generator.next().value) // 2 + 2? // output
// // generator.next(4) // 4 // input

// console.log(generator.next(4)) // { value: undefined, done: true }


// function* twoWayStreet() {
//   let result1 = yield '2 + 2?'
//   console.log(result1)

//   let result2 = yield '3 + 3?'
//   console.log(result2)
// }

// let generator = twoWayStreet()

// console.log(generator.next())
// console.log(generator.next(4))
// console.log(generator.next(9))
// { value: '2 + 2?', done: false }
// 4
// { value: '3 + 3?', done: false }
// 9
// { value: undefined, done: true }


// console.log(generator.next(4))
// console.log(generator.next(9))
// console.log(generator.next(5))
// { value: '2 + 2?', done: false }
// 9
// { value: '3 + 3?', done: false }
// 5
// { value: undefined, done: true }


// function* generateThrow() {
//   try {
//     let result = yield '2 + 2?'
//     console.log('The execution does not reach here, because the exception is thrown above')
//   } catch (err) {
//     console.log(err)
//   }
// }

// let generator = generateThrow()
// // console.log(generator) // Object [Generator] {}
// generator.throw(new Error('The answer is not found in my database'))
// // Error: The answer is not found in my database


// function* generateThrow() {
//   try {
//     let result = yield error()
//     console.log('The execution does not reach here, because the exception is thrown above')
//   } catch (err) {
//     console.log(err)
//   }
// }

// let generator = generateThrow()

// function error() {
//   throw new Error('Generate Error!')
// }

// generator.next()
// Error: Generate Error!



// function* generateThrow() {
//   let result = yield '2 + 2?'
//   console.log(result)
// }

// let generator = generateThrow()

// console.log(generator.next())
// console.log(generator.next(4))

// try {
//   generator.throw(new Error('The answer...'))
// } catch (err) {
//   console.log(err)
// }


// function* generatorReturn() {
//   yield 1
//   yield 2
//   yield 3
// }

// let generator = generatorReturn()

// console.log(generator.next()) // { value: 1, done: false }
// console.log(generator.return('stop')) // { value: 'stop', done: true }
// console.log(generator.next()) // { value: undefined, done: true }

// console.log(generator.return('stop')) // { value: 'stop', done: true }
// console.log(generator.next()) // { value: undefined, done: true }
// console.log(generator.next()) // { value: undefined, done: true }


// function* pseudoRandom(seed) {
//   let value = seed

//   while (true) {
//     value = value * 16807 % 2147483647
//     yield value
//   }
// }

// let generator = pseudoRandom(1)

// console.log(generator.next().value) // 16807
// console.log(generator.next().value) // 282475249
// console.log(generator.next().value) // 1622650073