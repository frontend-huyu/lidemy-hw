// class Person {
//   constructor(name, birthYear) {
//     this.name = name
//     this.birthYear = Number(birthYear)
//   }

//   calculateAge() {
//     const today = new Date()
//     return today.getFullYear() - this.birthYear
//   }
// }
// let Taro = new Person('Taro', '1980')
// console.log(Taro) // Person { name: 'Taro', birthYear: 1980 }
// console.log(Taro.calculateAge())


//
// class Person {
//   constructor(name) {
//     this.name = name
//   }

//   calculateAge(birthYear) {
//     this.birthYear = Number(birthYear)
//     const today = new Date()
//     return today.getFullYear() - this.birthYear
//   }
// }
// let Taro = new Person('Taro')
// console.log(Taro) // Person { name: 'Taro' }
// console.log(Taro.calculateAge('1980')) // 42
// console.log(Taro) // Person { name: 'Taro', birthYear: 1980 }


// console.log(Object.getOwnPropertyNames(Person.prototype))
// [ 'constructor', 'calculateAge' ]

// class Taro extends Person {
//   place(birthPlace) {
//     this.birthPlace = birthPlace
//     return `I come from ${this.birthPlace}`
//   }
// }

// let taro = new Taro('Taro Yamada')
// console.log(taro.calculateAge('1995')) // 27
// console.log(taro.place('Japan')) // I come from Japan
// console.log(taro)
// Taro { name: 'Taro Yamada', birthYear: 1995, birthPlace: 'Japan' }

// console.log(Object.getOwnPropertyNames(Taro.prototype))
// [ 'constructor', 'place' ]

// console.log(Person instanceof Function) // true

// console.log(Object.getPrototypeOf(taro) === Taro.prototype) // true
// console.log(Object.getPrototypeOf(Taro.prototype) === Person.prototype) // true
// console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype) // true

// function personFn() { }
// let newPersonFn = new personFn()
// console.log(Object.getPrototypeOf(newPersonFn) === personFn.prototype) // true
// console.log(Object.getPrototypeOf(personFn.prototype) === Object.prototype) // true

// console.log(Taro instanceof Function) // true

// console.log(Object.getPrototypeOf(taro) === Taro.prototype) //true
// console.log(Object.getPrototypeOf(Taro) === Person) // true

// console.log(Object.getPrototypeOf(newPersonFn) === personFn.prototype) // true
// console.log(Object.getPrototypeOf(personFn) === Function.prototype) // true


// console.log(Object.getOwnPropertyNames(taro))
// // [ 'name', 'birthYear', 'birthPlace' ]

// console.log(Person.prototype.constructor) // [class Person]
// console.log(Taro.prototype.constructor) // [class Taro extends Person]
// console.log(taro.constructor) // [class Taro extends Person]


// overriding constructor
// class Taro extends Person {
//   calculateAge(birthYear) {
//     this.birthYear = Number(birthYear)
//     return this.birthYear
//   }
// }

// class Jiro extends Person { }

// let taro = new Taro('Taro Yamada')
// console.log(taro.calculateAge('1995')) // 1995

// let jiro = new Jiro('Jiro Yamada')
// console.log(jiro.calculateAge('1999')) // 23


// class Person {
//   constructor(name) {
//     this.name = name
//   }

//   calculateAge(birthYear) {
//     this.birthYear = birthYear
//     const today = new Date()
//     return today.getFullYear() - this.birthYear
//   }

//   place(birthPlace) {
//     this.birthPlace = birthPlace
//     return `${this.name} comes from ${this.birthPlace}`
//   }

// test() {
//   console.log('test')
// }
// }

// class Taro extends Person {
//   personalInfo(birthYear, birthPlace) {
//     return `${this.name} is ${super.calculateAge(birthYear)} years old, and ${super.place(birthPlace)}.`
//   }
// }


// let taro = new Taro('Taro Yamada')

// console.log(taro.name) // Taro Yamada
// console.log(taro.calculateAge('1995')) // 27
// console.log(taro.place('Japan')) // Taro Yamada comes from Japan
// console.log(taro.personalInfo('1995', 'Japan'))
// // Taro Yamada is 27 years old, and Taro Yamada comes from Japan.

// class Taro extends Person {
//   personalInfo(birthYear, birthPlace) {
//     setTimeout(() => console.log(`${this.name} is ${super.calculateAge(birthYear)} years old, and ${super.place(birthPlace)}.`), 1000)
//   }
// }

// let taro = new Taro('Taro Yamada')
// console.log(taro.name)
// console.log(taro.calculateAge('1995'))
// console.log(taro.place('Japan'))
// taro.personalInfo('1995', 'Japan')


// class Taro extends Person {
//   personalInfo(birthYear, birthPlace) {
//     setTimeout(() => {
//       console.log(super.calculateAge(birthYear))
//       console.log(super.place(birthPlace))
//     }, 1000)
//   }
// }
// let taro = new Taro('Taro Yamada')
// taro.personalInfo('1995', 'Japan')

// class Taro extends Person {
//   personalInfo() {
//     setTimeout(() => console.log(this), 1000)
//   }
// }


// class Taro extends Person {
//   personalInfo() {
//     return () => {
//       console.log(this)
//     }
//   }
// }

// class Taro extends Person {
//   personalInfo() {
//     return function () {
//       console.log(this)
//     }
//   }
// }

// let taro = new Taro('Taro Yamada')
// taro.personalInfo()()


// Timeout {
//   _idleTimeout: 1000,
//   _idlePrev: null,
//   _idleNext: null,
//   _idleStart: 25,
//   _onTimeout: [Function (anonymous)],
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: false,
//   [Symbol(refed)]: true,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 2,
//   [Symbol(triggerId)]: 1
// }

// class Person {
//   name = 'Jiro'
//   constructor(name, birthYear, birthPlace) {
//     this.name = name
//     this.birthYear = birthYear
//     this.birthPlace = birthPlace
//   }

//   calculateAge() {
//     const today = new Date()
//     return today.getFullYear() - this.birthYear
//   }

//   place() {
//     return `${this.name} comes from ${this.birthPlace}`
//   }
// }

// class Taro extends Person {
//   // name = 'saburo'
//   // birthYear = '2000'
//   // birthPlace = 'Osaka'

//   constructor(name, birthYear, birthPlace) {
//     super()
//     // note: ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//     // note: ReferenceError: Super constructor may only be called once

//     this.name = name
//     this.birthYear = birthYear
//     this.birthPlace = birthPlace
//   }

//   personalInfo() {
//     setTimeout(() => console.log(`${this.name} is ${super.calculateAge(this.birthYear)} years old, and ${super.place(this.birthPlace)}.`), 1000)
//   }
// }

// let taro = new Taro('Taro', '1995', 'Japan')
// console.log(taro)
// taro.personalInfo()


// class Person {
//   name = 'Taro'
// }

// class Taro extends Person { }

// let taro = new Taro()
// console.log(taro.name)
// console.log(Object.getOwnPropertyNames(taro)) // [ 'name' ]
// console.log(taro.hasOwnProperty('name')) // true


// class Person {
//   constructor(name) {
//     this.name = name
//   }
// }

// class Taro extends Person { }

// let taro = new Taro('Taro')
// console.log(taro.name)
// console.log(Object.getOwnPropertyNames(taro)) // [ 'name' ]
// console.log(taro.hasOwnProperty('name')) // true


// class Person {
//   constructor(name) {
//     this.name = name
//     console.log(this)
//   }
// }

// class Taro extends Person {
//   constructor(birthYear, birthPlace) {
//     super()
//     this.birthYear = birthYear
//     this.birthPlace = birthPlace
//     console.log(this)
//   }
// }

// let taro = new Taro('1995', 'Tokyo')
// console.log(taro.name) // undefined
// console.log(Object.getOwnPropertyNames(taro)) // [ 'name', 'birthYear', 'birthPlace' ]
// console.log(taro.hasOwnProperty('birthYear')) // true
// console.log(taro.hasOwnProperty('birthPlace')) // true


// class Person {
//   name = 'Taro'
//   test = function fnInClassField() {
//     console.log('class field test')
//   }
//   constructor() {
//     console.log(this)
//     // Jiro { name: 'Taro', test: [Function: fnInClassField] }

//     this.name = 'Jiro'
//     this.test = function fnInConstructor() {
//       console.log('function in constructor')
//     }
//   }

//   test() {
//     console.log('function in class')
//   }
// }

// class Jiro extends Person { }
// let jiro = new Jiro()

// console.log(jiro)
// // Jiro { name: 'Jiro', test: [Function: fnInConstructor] }

// console.log(jiro.hasOwnProperty('test')) // false
// console.log(Object.getOwnPropertyNames(Person.prototype))
// // [ 'constructor', 'test' ]



// class Person {
//   name = 'Taro'
//   constructor() {
//     this.name = 'Jiro'
//     console.log(this) // Taro { name: 'Jiro' }
//   }

//   test() {
//     console.log(this.name) // Jiro
//   }
// }

// class Taro extends Person {
//   constructor(birthYear, birthPlace) {
//     super()
//     this.birthYear = birthYear
//     this.birthPlace = birthPlace
//     console.log(this)
//     // Taro { name: 'Jiro', birthYear: '1995', birthPlace: 'Tokyo' }
//   }
// }

// let taro = new Taro('1995', 'Tokyo')
// console.log(taro.name) // Jiro
// console.log(Object.getOwnPropertyNames(taro)) // [ 'name', 'birthYear', 'birthPlace' ]
// console.log(taro.hasOwnProperty('name')) // true
// console.log(taro.hasOwnProperty('birthYear')) // true
// console.log(taro.hasOwnProperty('birthPlace')) // true


// class Jiro extends Person {
//   constructor(birthYear) {
//     super()
//     this.birthYear = birthYear
//     console.log(this)
//   }
// }

// let jiro = new Jiro('1999', 'Osaka')
// console.log(jiro.name) // undefined
// console.log(Object.getOwnPropertyNames(jiro)) // [ 'name', 'birthYear', 'birthPlace' ]
// console.log(jiro.hasOwnProperty('birthYear')) // true



// class Test {
//   constructor(a) {
//     // console.log(this) // Test {}
//     this.a = a
//   }

//   test1(a) {
//     // console.log(this) // Test {}
//     this.a = a
//     console.log(this.a)
//   }
// }

// let test = new Test(5)
// console.log(test) // Test { a: 5 }
// test.test1(10) // 10
// console.log(test) // Test { a: 10 }


// Taro { name: 'Jiro', birthYear: '1995', birthPlace: 'Japan' }
// Jiro is 27 years old, and Jiro comes from Japan.


// // Taro { name: 'saburo', birthYear: '1995', birthPlace: 'Japan' }
// // saburo is 27 years old, and saburo comes from Japan.


// class Person {
//   name = 'Jiro'
//   constructor(birthYear, birthPlace) {
//     this.birthYear = birthYear
//     this.birthPlace = birthPlace
//     this.test = function test() { }
//   }

//   calculateAge() {
//     const today = new Date()
//     return today.getFullYear() - this.birthYear
//   }

//   place() {
//     return `${this.name} comes from ${this.birthPlace}`
//   }
// }

// class Jiro extends Person {
//   personalInfo() {
//     setTimeout(() => console.log(`${this.name} is ${super.calculateAge(this.birthYear)} years old, and ${super.place(this.birthPlace)}.`), 1000)
//   }
// }

// let jiro = new Jiro('1998', 'Kyoto')
// console.log(jiro)
// console.log(Object.getOwnPropertyNames(Person.prototype))
// // [ 'constructor', 'calculateAge', 'place' ]
// console.log(Object.getOwnPropertyNames(Jiro.prototype))
// // [ 'constructor', 'personalInfo' ]

// jiro.personalInfo()
// Jiro is 24 years old, and Jiro comes from Kyoto.

// console.log(Person.prototype.hasOwnProperty('name')) // false
// console.log(Person.prototype.hasOwnProperty('constructor')) // true
// console.log(Person.prototype.hasOwnProperty('test')) // false
// console.log(Person.prototype.hasOwnProperty('calculateAge')) // true

// console.log(Jiro.prototype.hasOwnProperty('name')) // false
// console.log(Jiro.prototype.hasOwnProperty('constructor')) // true
// console.log(Jiro.prototype.hasOwnProperty('test')) // false
// console.log(Jiro.prototype.hasOwnProperty('calculateAge')) // false

// console.log(Person.hasOwnProperty('name')) // true
// console.log(Jiro.hasOwnProperty('test')) // false

// console.log(Person.hasOwnProperty('birthYear'))
// console.log(Person.hasOwnProperty('test'))

// console.log(Person.prototype.hasOwnProperty('birthYear'))
// console.log(Person.prototype.hasOwnProperty('test'))

// console.log(Person.prototype.constructor.hasOwnProperty('birthYear'))
// console.log(Person.prototype.constructor.hasOwnProperty('test'))

// console.log(Jiro.hasOwnProperty('birthYear'))
// console.log(Jiro.hasOwnProperty('test'))

// console.log(Jiro.prototype.hasOwnProperty('birthYear'))
// console.log(Jiro.prototype.hasOwnProperty('test'))

// console.log(Jiro.prototype.constructor.hasOwnProperty('birthYear'))
// console.log(Jiro.prototype.constructor.hasOwnProperty('test'))

// console.log(Object.getOwnPropertyDescriptors(Person))
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))
// console.log(Object.getOwnPropertyDescriptors(Person.prototype.constructor))



// class Person {
//   test = function fnInClassField() {
//     console.log('class field test')
//   }

//   constructor() {
//     console.log(this)
//     // Jiro { test: [Function: fnInClassField] }

//     // this.test = function fnInConstructor() {
//     //   console.log('function in constructor')
//     // }
//   }

//   test() {
//     console.log('function in class')
//   }
// }

// class Jiro extends Person {
//   test() {
//     console.log('function in child class')
//   }
// }
// let jiro = new Jiro()

// jiro.test() // function in constructor
// console.log(jiro.test) // [Function: fnInConstructor]

// console.log(Object.getOwnPropertyNames(Jiro.prototype))
// [ 'constructor', 'test' ]


// class Person {
//   constructor() {
//   }

//   test() {
//     console.log('function in parent class')
//   }
// }

// class Jiro extends Person {
//   test() {
//     console.log('function in child class')
//   }
// }

// let jiro = new Jiro()

// jiro.test() // function in child class
// console.log(jiro.test) // [Function: test]

// class Saburo extends Person {
//   add(a) {
//     return function (b) {
//       console.log(this)
//       return a + b
//     }
//   }
// }

// let saburo = new Saburo()
// console.log(saburo.add(1)(2))
// // undefined
// // 3

// class Saburo extends Person {
//   constructor(a, b) {
//     super()
//     this.a = a
//     this.b = b
//     console.log(this)
//   }
//   add() {
//     return () => {
//       console.log(this)
//       return this.a + this.b
//     }
//   }
// }
// let saburo = new Saburo(1, 2)
// console.log(saburo.add()())
// // Saburo { a: 1, b: 2 }
// // 3


class Person {
  constructor() {
    this.name = 'Saburo'
    this.birthYear = 2000
    this.birthPlace = 'Tokyo'
  }

  testInParent() {
    console.log(`I am ${this.name}, I was born on ${this.birthYear} in ${this.birthPlace}`)
  }
}

class Saburo extends Person {
  constructor(birthPlace) {
    // name = 'Saburo'
    // ReferenceError: name is not defined
    // this.name = 'Saburo'
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super()
    this.birthPlace = birthPlace
  }

  testInChild() {
    console.log(`I am ${this.name}, I was born on ${this.birthYear} in ${this.birthPlace}`)
  }

}

let saburo = new Saburo('Hokkaidou')
saburo.testInParent()
saburo.testInChild()

