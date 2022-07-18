// const person = {
//   name: 'Taro',
// }

// person.age = 20
// console.log(person.name, person.age) // Taro 20


// const nation = {
//   ja: 'Japan',
//   us: 'America'
// }

// const person = new Object(nation)
// person.name = 'Taro'
// person.age = 20

// console.log(person)
// { ja: 'Japan', us: 'America', name: 'Taro', age: 20 }
// note: new Object() => empty object


// console.log(person instanceof Object) // true
// console.log(Object.getPrototypeOf(person) === Object.prototype) // true

// const obj = {}
// console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(obj)) // true


// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// const Taro = new Person('Taro', 20)
// const Jiro = new Person('Jiro', 18)

// console.log(Taro) // Person { name: 'Taro', age: 20 }
// console.log(Jiro) // Person { name: 'Jiro', age: 18 }
// // note: instance object


// const Person = Object.create({})
// console.log(Person)

// const Person = {
//   firstName: 'Default',
//   lastName: 'Default',
//   greeting: function () {
//     return `Hello, ${this.firstName} ${this.lastName}!`
//   }
// }

// const Taro = Object.create(Person)

// console.log(Taro) // {}

// Taro.firstName = 'Taro'
// Taro.lastName = 'Yamada'
// console.log(Taro.greeting()) // Hello, Taro Yamada!

// console.log(Taro) // { firstName: 'Taro', lastName: 'Yamada' }
// console.log(Object.getPrototypeOf(Taro))
// {
//   firstName: 'Default',
//   lastName: 'Default',
//   greeting: [Function: greeting]
// }

// function createObject(obj) {
//   function F() { }
//   F.prototype = obj
//   return new F()
// }

// const Taro = createObject(Person)

// console.log(Taro) // {}
// Taro.firstName = 'Taro'
// Taro.lastName = 'Yamada'
// console.log(Taro.greeting()) // Hello, Taro Yamada!

// console.log(Taro) // { firstName: 'Taro', lastName: 'Yamada' }
// console.log(Object.getPrototypeOf(Taro))
// {
//   firstName: 'Default',
//   lastName: 'Default',
//   greeting: [Function: greeting]
// }
// console.log(Object.getPrototypeOf(Taro) === Person) // true

// class Person {
//   constructor(fname, lname) {
//     this.firstName = fname
//     this.lastName = lname
//   }
// }

// const person = new Person('Taro', 'yamada')

// console.log(person) // Person { firstName: 'Taro', lastName: 'yamada' }
// console.log(Object.getPrototypeOf(person) === Person.prototype) // true

// function Person(fname, lname) {
//   this.firstName = fname
//   this.lastName = lname
// }

// const person = new Person('Taro', 'yamada')

// console.log(person) // Person { firstName: 'Taro', lastName: 'yamada' }
// console.log(Object.getPrototypeOf(person) === Person.prototype) // true


//
// const person = {
//   id: 1,
//   name: 'Taro'
// }


// const person = {}
// person['firstName'] = 'Taro'
// person['lastName'] = 'Yamada'
// console.log(person.firstName, person.lastName)

// person.nation = 'Japan'
// person.birthPlace = 'Tokyo'
// console.log(person)
// // {
// //   firstName: 'Taro',
// //   lastName: 'Yamada',
// //   nation: 'Japan',
// //   birthPlace: 'Tokyo'
// // }

// console.log(Object.getOwnPropertyDescriptor(person, 'firstName'))
// // { value: 'Taro', writable: true, enumerable: true, configurable: true }

// const descriptors = Object.getOwnPropertyDescriptors(person)
// console.log(descriptors.nation.value) // Japan
// console.log(descriptors.birthPlace.value) // Tokyo
// console.log(descriptors.birthPlace.writable) // true


// const person = {
//   get name() {
//     return this._name.toUpperCase()
//   },
//   set name(value) {
//     this._name = value
//   },
//   get id() {
//     return this._id.toString(2)
//   },
//   set id(value) {
//     this._id = value
//   }
// }

// person.name = 'Taro'
// console.log(person.name) // TARO

// person.id = 5
// console.log(person.id) // 101

// console.log(person)
// // { name: [Getter/Setter], id: [Getter/Setter], _name: 'Taro', _id: 5 }
// console.log(person._name) // Taro
// console.log(person._id) // 5

// console.log(Object.getOwnPropertyDescriptors(person))
// {
//   name: {
//     get: [Function: get name],
//     set: [Function: set name],
//     enumerable: true,
//     configurable: true
//   },
//   id: {
//     get: [Function: get id],
//     set: [Function: set id],
//     enumerable: true,
//     configurable: true
//   },
//   _name: {
//     value: 'Taro',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   _id: {
//     value: 5,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }


// const person = {
//   firstName: 'Taro',
//   lastName: 'Yamada',

//   get greeting() {
//     return `Hello, ${this.firstName} ${this.lastName}`
//   }
// }

// console.log(person.greeting) // Hello, Taro Yamada
// console.log(Object.getOwnPropertyDescriptors(person))

//
// const person = {}

// Object.defineProperty(person, 'firstName', {
//   value: 'Taro',
//   writable: false
// })

// console.log(person.firstName) // Taro

// person.firstName = 'Jiro'
// console.log(person.firstName) // Taro

// Object.defineProperties(person, {
//   firstName: {
//     value: 'Taro',
//     enumerable: false,
//   },
//   lastName: {
//     value: 'Yamada',
//     enumerable: true
//   }
// })

// for (const key in person) {
//   console.log(key, person[key])
// }
// lastName Yamada

// const keys = Object.keys(person)
// console.log(keys)


// Object.defineProperties(person, {
//   firstName: {
//     value: 'Taro',
//     writable: true,
//     enumerable: true,
//     configurable: false
//   },
//   lastName: {
//     value: 'Yamada',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// })

// Object.defineProperty(person, 'firstName', {
//   value: 'Jiro',
//   writable: false,
// })

// // console.log(person.firstName) // Jiro
// // console.log(Object.getOwnPropertyDescriptor(person, 'firstName'))
// // {
// //   value: 'Jiro',
// //   writable: false,
// //   enumerable: true,
// //   configurable: false
// // }

// Object.defineProperty(person, 'firstName', {
//   writable: true,
// })
// TypeError: Cannot redefine property: firstName


//
// console.log(person) // { firstName: 'Taro', lastName: 'Yamada' }

// console.log(delete person.firstName) // false
// note: in strict mode, it will throw TypeError

// console.log(delete person.lastName) // true

// person.firstName = 'Jiro'
// console.log(person.firstName) // Jiro

// Object.defineProperty(person, 'firstName', {
//   value: 'Jiro'
// })
// console.log(person.firstName) // Jiro

// person.lastName = 'Satou'
// console.log(person.lastName)

// Object.defineProperty(person, 'lastName', {
//   value: 'Satou'
// })
// console.log(person.lastName)


//
const person = {
  id: 1
}

// Object.preventExtensions(person)
// person.name = 'Taro'
// console.log(person)

// Object.defineProperty(person, 'id', {
//   writable: false,
//   enumerable: false,
//   configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(person, 'id'))

// console.log(delete person.id) // true
// console.log(person) // {}

// console.log(Object.isExtensible(person)) // false

console.log(Object.getOwnPropertyDescriptor(person, 'id'))
// { value: 1, writable: true, enumerable: true, configurable: true }

// Object.seal(person)
// console.log(Object.getOwnPropertyDescriptor(person, 'id'))
// { value: 1, writable: true, enumerable: true, configurable: false }

// Object.defineProperty(person, 'id', {
//   writable: false,
//   enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(person, 'id'))
// { value: 1, writable: true, enumerable: true, configurable: false }


// console.log(delete person.id) // false

// person.name = 'Taro'
// console.log(person) // { id: 1 }

// person.id = 5
// console.log(person)  // { id: 5 }

// console.log(Object.isSealed(person)) // true

Object.freeze(person)
console.log(Object.getOwnPropertyDescriptor(person, 'id'))
// { value: 1, writable: false, enumerable: true, configurable: false }
console.log(Object.isFrozen(person)) // true