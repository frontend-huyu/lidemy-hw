// class Animal {
//   static [Symbol.hasInstance](obj) {
//     if (obj.canEat) return true;
//   }

//   constructor() {
//     this.name = 'Taro'
//     this.constructorMethod = () => {
//       console.log('Hi')
//     }
//   }

//   sayHi() {
//     return `Hi, ${this.name}`
//   }
// }

// let obj = {
//   canEat: 1,
//   name: 'Mick'
// }

// // let arr = [1, 2, 3]
// // console.log(arr instanceof Animal) // false

// console.log(obj instanceof Animal) // true
// console.log(obj instanceof Object) // true
// console.log(obj instanceof Function) // false
// console.log(obj.name) // Mick
// // console.log(obj.constructorMethod()) // TypeError: obj.constructorMethod is not a function
// // console.log(obj.sayHi()) // TypeError: obj.sayHi is not a function

// console.log(Object.getPrototypeOf(obj) === Object.prototype) // true
// console.log(Object.getPrototypeOf(obj) === Animal.prototype) // false
// console.log(Object.getPrototypeOf(obj) === Animal) // false

// class Animal {
//   static [Symbol.hasInstance](obj) {
//     if (obj.myMethod === this.prototype.myMethod) return true
//   }

//   myMethod() {
//     console.log('Animal Method')
//   }
// }

// function myMethod() {
//   console.log('Global Method')
// }

// let obj1 = {
//   myMethod: Animal.prototype.myMethod
// }

// let obj2 = {
//   myMethod: myMethod
// }

// obj1.myMethod() // Animal Method
// obj2.myMethod() // Global Method

// console.log(obj1 instanceof Animal) // true
// console.log(obj2 instanceof Animal) // false

// console.log(Object.prototype.toString(obj1)) // [object Object]
// console.log(obj1.toString()) // [object Object]

// console.log(Object.prototype.toString.call([])) // [object Array]
// console.log(Object.prototype.toString.call(null)) // [object Null]
// console.log(Object.prototype.toString.call(123)) // [object Number]
// console.log(Object.prototype.toString.call(new Date())) // [object Date]

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
// }

// const cat = new Animal('cat')

// console.log(Animal.prototype) // {}
// console.log(Animal.prototype.toString) // [Function: toString]
// console.log(Animal.prototype.hasOwnProperty('toString')) // false
// // Animal.prototype => Object.prototype.toString

// Animal.prototype.toString = function () {
//   return `${this.name}`
// }

// console.log(Animal.prototype) // { toString: [Function (anonymous)] }
// console.log(Animal.prototype.toString) // [Function (anonymous)]
// console.log(Animal.prototype.hasOwnProperty('toString')) // true
// // Animal.prototype.toString

// console.log(cat.toString()) // cat


// let user1 = {
//   id: 1,
//   [Symbol.toStringTag]: 'User'
//   // this property has no length
// }

// let user2 = {
//   id: 2,
//   [Symbol.toStringTag]: 'Admin'
// }
// console.log(Object.prototype.toString.call(user1))
// // [object User]
// console.log(user1[Symbol.toStringTag])
// // User

// class ValidatorClass {
//   constructor(obj) {
//     // console.log(Object.keys(obj).length) // 1
//     if (Object.keys(obj).length > 0) {
//       this.obj = obj
//     }
//   }

//   get [Symbol.toStringTag]() {
//     if (this.obj[Symbol.toStringTag] === 'User') {
//       return 'ValidUser'
//     } else if (this.obj[Symbol.toStringTag] === 'Admin') {
//       return 'ValidAdmin'
//     }
//   }
// }

// console.log({}.toString.call(new ValidatorClass(user1)))
// // [object ValidUser]
// console.log({}.toString.call(new ValidatorClass(user2)))
// // [object ValidAdmin]


//
// let mixinMethods = {
//   sayHi() {
//     console.log(`Hello, ${this.name}`)
//   },
//   sayBye() {
//     console.log(`Bye, ${this.name}`)
//   }
// }

// class User {
//   constructor(name) {
//     this.name = name
//   }
// }

// Object.assign(User.prototype, mixinMethods)
// new User('Mick').sayHi() // Hello, Mick


//
// let sayMethod = {
//   say(phrase) {
//     console.log(phrase)
//   }
// }

// let sayMixin = {
//   __proto__: Object.create(sayMethod), // return new object
//   sayHi() {
//     super.say(`Hello, ${this.name}`)
//   },
//   sayBye() {
//     super.say(`Bye, ${this.name}`)
//   }
// }

// class User {
//   constructor(name) {
//     this.name = name
//   }
// }

// Object.assign(User.prototype, sayMixin)
// new User('Lucy').sayBye() // Bye, Lucy


let eventMixin = {
  on(eventName, handler) {
    // if event Handler does not exist, create it
    if (!this._eventHandlers) this._eventHandlers = {}
    // if there didn't exist a matched event name, according to the event name(property name), assign []
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = []
    }
    // find the matched array and push handler(callback function)
    this._eventHandlers[eventName].push(handler)
  },
  off(eventName, handler) {
    // select eventHandler and its matched eventHandler name property
    let handlers = this._eventHandlers && this._eventHandlers[eventName]
    if (!handlers) return
    for (let i = 0; i < handlers.length; i++) {
      // note: why use == ?
      if (handlers[i] == handler) {
        // delete the matched handler property and start at the same index (i--)
        handlers.splice(i--, 1)
      }
    }
  },
  trigger(eventName, ...args) {
    // if didn't exist event handlers or event name then return
    if (!this._eventHandlers || !this._eventHandlers[eventName]) return
    // if it exist, call all of the event handlers, and put arguments to create those events
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args))
  },
}

class Menu {
  choose(value) {
    // call trigger
    this.trigger('select', value)
  }
}

Object.assign(Menu.prototype, eventMixin)

let menu = new Menu()
// set 'select' event
menu.on('select', value => console.log(`Value selected: ${value}`))
menu.choose('123') // Value selected: 123

// let arr = [1, 2, 3, 4, 5]

// function test(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//       console.log(i)
//       return arr.splice(i--, 1)
//     }
//   }
// }

// console.log(test(arr))