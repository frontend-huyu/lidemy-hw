// class Person {
//   constructor(name) {
//     this.name = name
//   }
//   nation = 'Japan'

//   greeting() {
//     return `Hello, ${this.name}`
//   }
// }

// console.log(typeof Person) // function
// console.log(Person.prototype.constructor) // [class Person]
// console.log(Object.getPrototypeOf(Person) === Function.prototype) // true
// console.log(Person instanceof Function) // true
// console.log(Object.getOwnPropertyNames(Person.prototype))
// [ 'constructor', 'greeting' ]


// let Taro = new Person('Taro')
// console.log(Taro.greeting()) // Hello, Taro
// console.log(Taro.constructor) // [class Person]
// console.log(Object.getPrototypeOf(Taro) === Person.prototype) // true
// console.log(Taro instanceof Person) // true
// console.log(Object.getOwnPropertyNames(Person.prototype))
// // [ 'constructor', 'greeting' ]
// console.log(Taro)
// // Person { nation: 'Japan', name: 'Taro' }
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))
// {
//   constructor: {
//     value: [class Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   greeting: {
//     value: [Function: greeting],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }



//
// function Person(name) {
//   this.name = name
//   this.nation = 'Japan'

//   this.greeting = function () {
//     return `Hello, ${this.name}`
//   }
// }

// console.log(typeof Person) // function
// console.log(Person.prototype.constructor) // [Function: Person]
// console.log(Object.getPrototypeOf(Person) === Function.prototype) // true
// console.log(Person instanceof Function) // true
// console.log(Object.getOwnPropertyNames(Person.prototype))
// // [ 'constructor' ]

// let Jiro = new Person('Jiro')
// console.log(Jiro.greeting()) // Hello, Jiro
// console.log(Jiro.constructor) // [Function: Person]
// console.log(Object.getPrototypeOf(Jiro) === Person.prototype) // true
// console.log(Jiro instanceof Person) // true
// console.log(Object.getOwnPropertyNames(Person.prototype))
// // [ 'constructor' ]
// console.log(Jiro)
// // Person {
// //   name: 'Jiro',
// //   nation: 'Japan',
// //   greeting: [Function (anonymous)]
// // }
// console.log(Object.getOwnPropertyDescriptors(Person.prototype))
// {
//   constructor: {
//     value: [Function: Person],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }


// class Test {
//   hello() { }
// }
// const test = new Test()
// console.log(test.hello) // [Function: hello]
// console.log(Object.getPrototypeOf(test.hello) === Function.prototype) // true

// const Hello = test.hello
// const newHello = new Hello()
// // TypeError: Hello is not a constructor

// note: [[IsClassConstructor]]


// function Test() {
//   this.hello = function hello() { }
// }
// const test = new Test()
// console.log(test.hello) // [Function: hello]
// console.log(Object.getPrototypeOf(test.hello) === Function.prototype) // true

// const Hello = test.hello
// const newHello = new Hello()
// console.log(newHello) // hello {}


class Person {
  constructor(name, nation) {
    this.name = name
    this.nation = nation
    this.test = function () {
      return `${this._name} ${this._nation}`
    }
  }

  get greeting() {
    return `Hello, I am ${this._name}, I come from ${this._nation}`
  }

  set name(value) {
    if (value.length < 1) {
      console.log('Name is too short.')
      return
    }
    this._name = value
  }

  set nation(value) {
    if (value < 2) {
      console.log('Nation name is too short.')
      return
    }
    this._nation = value
  }

  // test() {
  //   return `${this._name} ${this._nation}`
  // }
}

for (let key in new Person('Taro', 'Japan')) {
  console.log(key)
}
// _name
// _nation

console.log(Person.hasOwnProperty('birthYear'))
console.log(Person.hasOwnProperty('test'))

console.log(Person.prototype.hasOwnProperty('birthYear'))
console.log(Person.prototype.hasOwnProperty('test'))

console.log(Person.prototype.constructor.hasOwnProperty('birthYear'))
console.log(Person.prototype.constructor.hasOwnProperty('test'))

// const Mio = new Person('', '')
// // Name is too short.
// // Nation name is too short.
// console.log(Mio)
// // Person {}

// const Taro = new Person('Taro', 'Japan')
// console.log(Taro)
// // Person { _name: 'Taro', _nation: 'Japan' }
// console.log(Taro.greeting)
// // Hello, I am Taro, I come from Japan

// console.log(Object.getOwnPropertyNames(Taro))
// // [ '_name', '_nation' ]
// console.log(Object.getOwnPropertyNames(Person.prototype))
// // [ 'constructor', 'greeting', 'name', 'nation' ]

// console.log(Taro.test()) // Taro Japan


// const test = new Taro.test()
// console.log(test) // {}




// console.log(Object.getOwnPropertyDescriptors(Taro))
// {
//   _name: {
//     value: 'Taro',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   _nation: {
//     value: 'Japan',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }
// console.log(Object.getOwnPropertyDescriptors(Person))
// {
//   length: { 
//     value: 2, 
//     writable: false,
//     enumerable: false,
//     configurable: true
//  },
//   prototype: {
//     value: {},
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   name: {
//     value: 'Person',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
// }

// console.log(Object.getOwnPropertyDescriptors(Person.prototype))
// {
//   constructor: {
//     value: [class Person],
//       writable: true,
//         enumerable: false,
//           configurable: true
//   },
//   greeting: {
//     get: [Function: get greeting],
//       set: undefined,
//         enumerable: false,
//           configurable: true
//   },
//   name: {
//     get: undefined,
//       set: [Function: set name],
//         enumerable: false,
//           configurable: true
//   },
//   nation: {
//     get: undefined,
//       set: [Function: set nation],
//         enumerable: false,
//           configurable: true
//   }
// }


// console.log(Object.getOwnPropertyNames(Taro))
// [ '_name', '_nation', 'test' ]
// console.log(Object.getOwnPropertyNames(Person.prototype))
// [ 'constructor', 'greeting', 'name', 'nation' ]


// {
//   _name: {
//     value: 'Taro',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   _nation: {
//     value: 'Japan',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   test: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

// console.log(a)
// ReferenceError: Cannot access 'a' before initialization
// class a { }
// class a { }
// SyntaxError: Identifier 'a' has already been declared


// class a { } // it is work
class b { }
{
  new b()
}



const name = 'Taro'

class testScope {
  name = name
  nation = 'Japan'
  constructor(birthPlace) {
    this.birthPlace = birthPlace
  }

  scope() {
    return `${this.nation} ${this.birthPlace}`
  }
}

const test = new testScope('Tokyo')
console.log(test)
// testScope { name: 'Taro', nation: 'Japan', birthPlace: 'Tokyo' }
console.log(test.name) // Taro
console.log(test.scope()) // Japan Tokyo


// const name = 'Taro'
// function testScope() {
//   const name = name
//   return name
// }

// console.log(testScope())
// ReferenceError: Cannot access 'name' before initialization