// class Person {
//   static staticProperty = 'abc'
//   static staticMethod() {
//     console.log(this === Person)
//   }
// }
// //
// console.log(Person.staticProperty) // abc
// Person.staticMethod() // true



// class Person {
//   constructor() {
//     this.constructorMethod = () => {
//       console.log(this === Person)
//     }
//   }

//   static staticMethod() {
//     console.log(this === Person)
//   }

//   classMethod() {
//     console.log(this === Person)
//   }
// }

// Person.constructorMethod()
// TypeError: Person.constructorMethod is not a function
// Person.staticMethod()
// true
// Person.classMethod()
// TypeError: Person.classMethod is not a function

//
// let person = new Person()
// person.constructorMethod()
// // false
// // person.staticMethod()
// // TypeError: person.staticMethod is not a function
// person.classMethod()
// // false

// console.log(Object.getOwnPropertyNames(Person))
// // [ 'length', 'prototype', 'staticMethod', 'name' ]
// console.log(Object.getOwnPropertyNames(person))
// // [ 'constructorMethod' ]
// console.log(Object.getOwnPropertyNames(Person.prototype))
// // [ 'constructor', 'classMethod' ]

// console.log(Object.getPrototypeOf(person) === Person.prototype) // true
// console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype) // true

//
// class Taro extends Person { }

// Taro.constructorMethod()
// TypeError: Taro.constructorMethod is not a function

// Taro.staticMethod() // false

// Taro.classMethod()
// TypeError: Taro.classMethod is not a function

// console.log(Object.getPrototypeOf(Taro) === Person) // true
// console.log(Object.getPrototypeOf(Person) === Function.prototype) // true


// let taro = new Taro()
// taro.constructorMethod()
// // false
// // taro.staticMethod()
// // TypeError: taro.staticMethod is not a function
// taro.classMethod()
// // false

// console.log(Object.getPrototypeOf(taro) === Taro.prototype) // true
// console.log(Object.getPrototypeOf(Taro.prototype) === Person.prototype) // true



// class Person {
//   constructor({ age = 18, favoriteColor = 'red' } = {}) {
//     this.age = age
//     this.favoriteColor = favoriteColor
//   }

//   static change(age) {
//     this.age = age
//     console.log(this)
//     return `I am ${this.age}.`
//   }
// }


//
// class Person {
//   constructor(age = 18, favoriteColor = 'red') {
//     this.age = age
//     this.favoriteColor = favoriteColor
//   }

//   static change(age, favoriteColor) {
//     this.age = age
//     this.favoriteColor = favoriteColor
//     console.log(this)
//     return `I am ${this.age}. My favorite color is ${this.favoriteColor}`
//   }
// }

// let person1 = new Person()
// console.log(person1)
// Person { age: 18, favoriteColor: 'red' }

// person1.age = 20
// console.log(person1)
// Person { age: 20, favoriteColor: 'red' }

// console.log(person1.change(20))
// TypeError: person1.change is not a function


// let person2 = new Person({})
// console.log(person2.age) // 18
// console.log(person2)
// // Person { age: 18, favoriteColor: 'red' }

// let person3 = new Person({ age: 20 })
// console.log(person3.age) // 20
// console.log(person3)
// // Person { age: 20, favoriteColor: 'red' }


// console.log(Person.change.call(person1, 30, 'blue'))
// // Person { age: 30, favoriteColor: 'blue' }
// // I am 30. My favorite color is blue

// console.log(Person.change.apply(person1, [40, 'yellow']))
// // Person { age: 40, favoriteColor: 'yellow' }
// // I am 40. My favorite color is yellow


// class Person {
//   constructor() {
//     this.age = age
//     this.favoriteColor = favoriteColor
//   }

//   static change() {
//     return `I am ${this.age}.`
//   }
// }

// class CallObj {
//   constructor(age = 18, favoriteColor = 'red') {
//     this.age = age
//     this.favoriteColor = favoriteColor
//   }

//   static change() {
//     console.log(this)
//     return `I am ${this.age}. My favorite color is ${this.favoriteColor}`
//   }
// }

// const obj = {
//   age: 50,
//   favoriteColor: 'white'
// }

// console.log(CallObj.change())
// // [class CallObj]
// // I am undefined. My favorite color is undefined

// console.log(CallObj.change.call(obj))
// // { age: 50, favoriteColor: 'white' }
// // I am 50. My favorite color is white

// let callObj = new CallObj(60, 'black')
// console.log(callObj)
// // CallObj { age: 60, favoriteColor: 'black' }

// console.log(CallObj.change.call(callObj))
// // CallObj { age: 60, favoriteColor: 'black' }
// // I am 60. My favorite color is black

// callObj.age = 70
// console.log(CallObj.change.apply(callObj))
// // CallObj { age: 70, favoriteColor: 'black' }
// // I am 70. My favorite color is black

// console.log(CallObj.change())
// // [class CallObj]
// // I am undefined. My favorite color is undefined

// console.log(CallObj.change.bind(callObj))
// // [Function: bound change]

// console.log(CallObj.change())
// // console.log(callObj.change())


// class Person {
//   constructor(age = 18, favoriteColor = 'red') {
//     this.age = age
//     this.favoriteColor = favoriteColor
//   }

//   static change(obj, age, favoriteColor) {
//     obj.age = age
//     obj.favoriteColor = favoriteColor
//     console.log(this)
//     return `I am ${this.age}. My favorite color is ${this.favoriteColor}`
//   }
// }

// let person4 = new Person(20, 'blue')
// console.log(person4)
// // Person { age: 20, favoriteColor: 'blue' }

// console.log(Person.change(person4, 30, 'yellow'))
// // [class Person]
// // I am undefined. My favorite color is undefined
// console.log(person4)
// // Person { age: 30, favoriteColor: 'yellow' }


// class IncreasingCounter {
//   constructor() {
//     this._count = 0
//   }
// }

// const counter = new IncreasingCounter()
// console.log(counter)
// // IncreasingCounter { _count: 0 }

// counter._count = 10
// console.log(counter)
// // IncreasingCounter { _count: 10 }


// class IncreasingCounter {
//   constructor() {
//     this._count = 0
//   }
//   getValue() {
//     return `the current value is ${this._count}`
//   }
//   increment() {
//     this._count++
//     console.log(this)
//   }
// }

// const counter = new IncreasingCounter()
// console.log(counter.getValue())
// // the current value is 0

// counter.increment()
// // IncreasingCounter { _count: 1 }
// console.log(counter.getValue())
// // the current value is 1

// console.log(Object.getOwnPropertyNames(IncreasingCounter.prototype))
// // [ 'constructor', 'getValue', 'increment' ]
// console.log(Object.getOwnPropertyNames(counter))
// // [ '_count' ]


// class IncreasingCounter {
//   _count = 0

//   getValue() {
//     return `the current value is ${this._count}`
//   }
//   increment() {
//     this._count++
//     console.log(this)
//   }
// }

// const counter = new IncreasingCounter()
// console.log(counter.getValue())
// // the current value is 0

// counter.increment()
// // IncreasingCounter { _count: 1 }
// console.log(counter.getValue())
// // the current value is 1

// console.log(Object.getOwnPropertyNames(IncreasingCounter.prototype))
// // [ 'constructor', 'getValue', 'increment' ]
// console.log(Object.getOwnPropertyNames(counter))
// // [ '_count' ]


// class IncreasingCounter {
//   #count = 0

//   getValue() {
//     return `the current value is ${this.#count}`
//   }

//   increment() {
//     this.#count++
//     console.log(this)
//   }
// }

// const counter = new IncreasingCounter()
// console.log(counter.getValue())
// // the current value is 0

// counter.increment()
// // IncreasingCounter { }
// console.log(counter.getValue())
// // the current value is 1


// // console.log(counter.#count)
// // SyntaxError: Private field '#count' must be declared in an enclosing class
// // console.log(IncreasingCounter.#count)
// // SyntaxError: Private field '#count' must be declared in an enclosing class

// console.log(Object.getOwnPropertyNames(IncreasingCounter.prototype))
// // [ 'constructor', 'getValue', 'increment' ]
// console.log(Object.getOwnPropertyNames(counter))
// // [ ]


class IncreasingCounter {
  static #count = 1

  static #digit = 1

  static #digits() {
    return IncreasingCounter.#count * (10 ** IncreasingCounter.#digit)
  }

  addDigit() {
    IncreasingCounter.#digit++
  }

  getResult() {
    return IncreasingCounter.#digits()
  }
}

let counter = new IncreasingCounter()

console.log(counter)
// IncreasingCounter {}
counter.addDigit()
console.log(counter.getResult())
// 100


class TestCounter extends IncreasingCounter {
  test() {
    // return `the current value is ${TestCounter.#count}`
    // SyntaxError: Private field '#count' must be declared in an enclosing class
    // return `the current value is ${IncreasingCounter.#count}`
    // SyntaxError: Private field '#count' must be declared in an enclosing class
    // return `the current value is ${this.#count}`
    // SyntaxError: Private field '#count' must be declared in an enclosing class

    return `the result is ${this.getResult()}`
  }
}

let testCounter = new TestCounter()
console.log(testCounter.test())
// the result is 100
