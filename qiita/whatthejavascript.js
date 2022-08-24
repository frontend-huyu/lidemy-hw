// coercion
// console.log([] == ![]) // true
// // console.log(![] == false) // true
// // console.log([] == false) // true
// // console.log({} == !{}) // false

// console.log([] === ![]) // false


// console.log([] + {}) // [object Object]
// console.log([] + {} == [{}]) // true
// console.log({} + []) // [object Object]
// console.log({} + [] == [{}]) // true

// console.log([{}] == {} + []) // true
// console.log([{}] == [] + {}) // true
// console.log([{}] == [{}] + []) // true
// console.log([{}] == [{}] + [] + []) // true
// console.log([{}] == [{}] + [] + {}) // false


// console.log(Number('')) // 0
// console.log(Number(' ')) // 0
// console.log(Number('\r\n\t')) // 0 // new line Regex

// console.log(Number('-0')) // -0
// console.log(JSON.parse('-0')) // -0
// console.log(Number('- 0')) // NaN


// console.log(Number('0.')) // 0
// console.log(Number('.0')) // 0
// console.log(Number('.')) // NaN

// console.log(Number(undefined)) // NaN
// console.log(Number(null)) // 0

// console.log(Number({})) // NaN
// console.log(Number([])) // 0

// console.log(Number('0O0')) // 0
// console.log(Number('0X0')) // 0
// // console.log(Number('0a0')) // NaN
// // console.log(Number('0b0')) // 0

// only for string converting to number
// function checkNaN(str) {
//   if (Number(str) === NaN) return true
//   if (typeof str !== 'string') return 'Invalid value'
//   if (str[0] === '0' && str[1] === '.') return 'Decimals'

//   let check = str.split('').filter(x => Number.isNaN(Number(x)))

//   return check.length > 0
// }

// console.log(checkNaN('0O0')) // true
// console.log(checkNaN('0X0')) // true
// console.log(checkNaN('{}')) // true
// console.log(checkNaN('[]')) // true
// console.log(checkNaN({})) // Invalid value
// console.log(checkNaN([])) // Invalid value

// console.log(checkNaN('0.0314E+2')) // Decimals
// console.log(checkNaN('9007199254740991n')) // true
// // check with other function


// console.log(JSON.stringify(-0)) // 0 // string
// console.log(String(-0)) // 0 // string
// console.log(-0 + '') // 0 // string

// console.log(String({})) // [object Object]
// console.log(String([])) // ''

// console.log(String(null)) // 'null'
// console.log(String([null])) // ''

// console.log(String(undefined)) // 'undefined'
// console.log(String([undefined])) // ''

// console.log(String([null, null,])) // ','
// console.log(String([undefined, undefined,])) // ','
// console.log(String([, ,])) // ','

// for array or number (not including Decimals and BigInt)
// function NumToStr(item) {
//   function isSafe(value) {
//     // if (value === undefined) return undefined // optional
//     // if (value === null) return null // optional
//     if (Number.isSafeInteger(value)) {
//       if (value === 0 && (1 / value) === -Infinity) return '-0'
//       if (value === 0 && (1 / value) === Infinity) return '0'
//       return String(value)
//     }
//     return NaN
//   }

//   if (typeof item === 'object') {
//     if (Array.isArray(item)) {
//       if (item.length === 0) return 'Invalid value'
//       return item.map(x => isSafe(x))
//     }
//     return 'Invalid value'
//   }

//   if (typeof item === 'number') {
//     return isSafe(item)
//   }

//   return 'Invalid value'
// }


// console.log(NumToStr({})) // Invalid value
// console.log(NumToStr([])) // Invalid value
// console.log(NumToStr(null)) // Invalid value
// console.log(NumToStr([null])) // [ NaN ]
// console.log(NumToStr(undefined)) // Invalid value
// console.log(NumToStr([undefined])) // [ NaN ]
// console.log(NumToStr([null, null,])) // [ NaN, NaN ]
// console.log(NumToStr([undefined, undefined,])) // [ NaN, NaN ]
// console.log(NumToStr([, ,])) //[ <2 empty items> ]

// console.log(NumToStr([1, -1, +0, -0, 0.5, -0.5, undefined, null, ,]))
// // [ '1', '-1', '0', '-0', NaN, NaN, NaN, NaN, <1 empty item> ]
// console.log(NumToStr(0.0314E+2)) // NaN
// console.log(NumToStr(9007199254740991n)) // Invalid value



// let o1 = {
//   hello: 'world'
// }

// let o2 = Object.create(null)
// o2.hello = 'world'

// console.log(o1 + '') // [object Object]
// console.log(o1.toString()) // [object Object]
// // console.log(o2 + '') // TypeError: Cannot convert object to primitive value
// console.log(o2) // [Object: null prototype] { hello: 'world' }
// // console.log(null.prototype) // TypeError: Cannot read properties of null (reading 'prototype')
// // console.log(null.__proto__) // TypeError: Cannot read properties of null (reading '__proto__')
// // note: null has no prototype, and it is the end of .__proto__


// let s = Symbol('that is cool')
// console.log(String(s)) // 'Symbol(that is cool)' // explicit coercion
// // console.log(s + '') // TypeError: Cannot convert a Symbol value to a string // implicit coercion


// empty slot
// console.log(Array(3)) // [ <3 empty items> ]

// let arr1 = []
// arr1.length = 3
// console.log(arr1) // [ <3 empty items> ]
// console.log(arr1[0]) // undefined

// let arr2 = [undefined, undefined, undefined]
// console.log(arr2) // [ undefined, undefined, undefined ]
// console.log(arr2[0]) // undefined

// console.log([undefined, undefined, undefined].join('+')) // ++
// console.log([undefined, undefined, undefined].map(x => '+')) // [ '+', '+', '+' ]

// console.log([null, null, null].join('+')) // ++
// console.log([null, null, null].map(x => '+')) // [ '+', '+', '+' ]

// console.log([, , ,].join('+')) // ++
// console.log([, , ,].map(x => '+')) // [ <3 empty items> ]


// console.log([undefined, undefined, undefined].filter(x => !x === false)) // []
// console.log([null, null, null].filter(x => !x === false)) // []
// console.log([, , ,].filter(x => !x === false)) // []


// console.log(Array.apply(null, Array(3))) // [ undefined, undefined, undefined ]
// console.log(Array.apply(null, [, , ,])) // [ undefined, undefined, undefined ]
// console.log(Array.apply(null, { length: 3 })) // [ undefined, undefined, undefined ]
// console.log(Array.apply(null, (a, b, c) => { })) // [ undefined, undefined, undefined ]


// switch default break
// switch (42) {
//   default:
//     console.log('yep')
//   // break
//   case 10:
//   case 20:
//     console.log('oops')
//     break
//   case 30:
//     console.log('nope')
//     break
// }

//yep
// oops


// finally
// function foo() {
//   try {
//     return 2
//   } finally {
//     return 3
//   }
// }

// console.log(foo()) // 3


// function foo() {
//   try {
//     return 2
//   }
//   finally {
//     // return
//   }
// }

// console.log(foo()) // 2

// function foo() {
//   bar: {
//     try {
//       console.log('I try!')
//       return 2
//     }
//     finally {
//       break bar
//     }
//   }
//   console.log('oops')
// }

// console.log(foo())
// I try!
// oops
// undefined


// generator
// function* foo() {
//   console.log('a: ', yield 1)
//   console.log('b: ', yield 2)
// }

// let generator = foo()

// console.log(generator.next())
// // { value: 1, done: false }

// console.log(generator.next(5))
// // a:  5
// // { value: 2, done: false }

// console.log(generator.next(10))
// // b:  10
// // { value: undefined, done: true }


// function* foo() {
//   try {
//     console.log('a: ', yield 1)
//     console.log('b: ', yield 2)
//   }
//   finally {
//     console.log('finally!')
//   }
// }

// let generator = foo()

// console.log(generator.next())
// // { value: 1, done: false }

// console.log(generator.return(7))
// // finally!
// // { value: 7, done: true }


// function* foo() {
//   try {
//     console.log('a: ', yield 1) // 1
//     console.log('b: ', yield 2)
//   }
//   finally {
//     console.log('finally!') // 2
//     console.log('c: ', yield 3) // 2 // 3, yield 3 => 25
//     // return  // 2,  undefined => 7
//   }

//   console.log('d: ', yield 4)
// }

// let generator = foo()

// // generator.next()
// console.log(generator.next())
// // { value: 1, done: false }

// // generator.return(7)
// console.log(generator.return(7))
// // finally! // *
// // { value: 3, done: false }

// // generator.next(25)
// console.log(generator.next(25))
// // c:  25 // *
// // { value: 7, done: true }

// // generator.next(42)
// console.log(generator.next(42))
// // { value: undefined, done: true }


// Destructuring
// function foo() {
//   let x = 2
//   let y = 3
//   return {
//     x: x,
//     y: y
//   }
// }

// // let o = foo()
// // let x = o.x
// // let y = o.y

// // console.log(x, y) // 2 3

// let { x, y } = foo() // referencing the same property name
// console.log(x, y) // 2 3

// function foo1() {
//   let XX = 2
//   let YY = 3
//   return {
//     x: XX,
//     y: YY,
//     z: 4
//   }
// }

// let { x, y } = foo1()
// console.log(x, y) // 2 3

// function foo2() {
//   let XX = 2
//   let YY = 3
//   return {
//     x: XX,
//     y: YY
//   }
// }

// let { x: BAM, y: BAZ } = foo2()

// console.log(BAM, BAZ) // 2 3
// // BAM -> x -> foo2() {x: XX} -> 2
// // BAZ -> y -> foo2() {x: YY} -> 3

// BAM = 10
// console.log(BAM) // 10
// console.log(foo2()) // { x: 2, y: 3 }

// let { x, y } = foo2()
// let BAM = x
// let BAZ = y
// console.log(x, y) // 2 3



// function foo3({ x, y }) {
//   console.log(x, y)
// }

// foo3({ y: 10, x: 25 }) // 25 10
// foo3({ y: 5 }) // undefined 5

// function foo4({ x: XX, y: YY }, z) {
//   console.log(XX, YY, z)
// }

// foo4({ y: 10, x: 25 }, 50) // 25 10 50


// function foo5(x = { y: 10 }, { y = 20 } = {}) {
//   console.log(x.y, y)
// }

// foo5() // 10 20
// foo5({ y: 30 }, { y: 40 }) // 30 40

// foo5({}, {}) // undefined 20

// let x = {
//   y: 10
// }
// let { y = 20 } = {}
// let y = 10 // SyntaxError: Identifier 'y' has already been declared

// console.log(x.y, y) // 10 20

// let y = 20
// let { } = y
// console.log(y) // 20


// classes
class Px {
  another() { // Px.prototype
    console.log('Px: another')
  }
}

class Cx extends Px {
  something() { // Cx.prototype
    console.log('Cx: something')
  }
  another() { // Cx.prototype
    this.something()
    super.another()
  }
}

let x = new Cx()

class Py {
  another() { // Py.prototype
    console.log('Py: another')
  }
}

class Cy extends Py {
  something() { // Cy.prototype
    console.log('Cy: something')
  }
  another() { // Cy.prototype
    this.something()
    super.another()
  }
}

let y = new Cy()

x.another()
// Cx: something
// Px: another
y.another()
// Cy: something
// Py: another

y.another.call(x)
// Cx: something // this = x
// Py: another // super => [[HomeObject]]: [class Py]