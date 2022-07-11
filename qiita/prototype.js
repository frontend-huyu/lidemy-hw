const x = {
  a: 1
}

console.log(x.__proto__ === Object.prototype) // true
console.log(x.__proto__.__proto__ === null) //true

console.log(Object.prototype.__proto__ === null) //true
console.log(Object.getPrototypeOf(Object.prototype)) // null


// callable object
// function statement
function callable() {
  const a = 1
}

callable.b = 2

console.log(callable.a) // undefined
console.log(callable.b) // 2

console.log(callable) // [Function: callable] { b: 2 }
console.log(callable.__proto__) // {}
console.log(callable.__proto__.__proto__ === Object.prototype) // true
console.log(callable.__proto__.__proto__.__proto__ === null) // true

// function expression
// const callableFn = function callable() {
//   const a = 1
// }

// callableFn.b = 2

// console.log(callableFn.a) // undefined
// console.log(callableFn.b) // 2

// console.log(callableFn.__proto__) // {}
// console.log(callableFn.__proto__.__proto__ === Object.prototype) // true
// console.log(callableFn.__proto__.__proto__.__proto__ === null) // true


// Base object
const point2D = {
  x: 10,
  y: 20,
}

// Inherit from 'point3D' object
const point3D = {
  z: 30,
  __proto__: point2D,
}

console.log(
  point3D.x, // 10, inherited from point2D
  point3D.y, // 20, inherited from point2D
  point3D.z  // 30, from its own property
)

// function Cat(name, color) {
//   this.name = name
//   this.color = color
//   this.species = 'cat'
//   this.favorite = () => {
//     console.log('eat and sleep')
//   }
// }


function Cat(name, color) {
  this.name = name
  this.color = color
}

Cat.prototype.species = 'cat'
Cat.prototype.favorite = () => {
  console.log('eat and sleep')
}
// console.log(Cat.prototype)
// { species: 'cat', favorite: [Function (anonymous)] }


const cat1 = new Cat('Mio', 'white')
const cat2 = new Cat('Tora', 'orange')



// console.log(cat1.prototype) // undefined
// console.log(cat2.prototype) // undefined

// console.log(cat1.name, cat1.color) // Mio white
// console.log(cat2.name, cat2.color) // Tora orange

// console.log(cat1.species) // cat
// cat1.favorite() // eat and sleep
// console.log(cat2.species) // cat
// cat2.favorite() // eat and sleep

// console.log(cat1 instanceof Cat) // true
// console.log(cat2 instanceof Cat) // true


// console.log(Cat.prototype.isPrototypeOf(cat1)) // true
// console.log(Cat.prototype.isPrototypeOf(cat2)) // true

// console.log(cat1.hasOwnProperty('name')) // true
// console.log(cat1.hasOwnProperty('species')) // false
// console.log(cat2.hasOwnProperty('favorite')) // false


// console.log(cat1.constructor === Cat) // true
// console.log(cat2.constructor === Cat) // true
// console.log(cat1.hasOwnProperty('constructor')) // false
// console.log(cat1.__proto__.hasOwnProperty('constructor')) // true

console.log('name' in cat1) // true
console.log('species' in cat1) // true

// Cat.prototype = {}
// const cat3 = new Cat()
// console.log(cat3.constructor === Cat) // false
// console.log(cat3.constructor === Object) // true

// console.log(cat1.constructor === Cat) // true
// console.log(cat1.constructor === Object) // false
// console.log(cat2.constructor === Cat) // true
// console.log(cat2.constructor === Object) // false
// note: pass by sharing


let animal = {
  eats: true
}

let rabbit = {
  jumps: true
}

rabbit.__proto__ = animal

console.log(rabbit.jumps) // true
console.log(rabbit.eats) // true // get property from 'animal'

console.log(rabbit.__proto__) // { eats: true } // inherit from 'animal'
console.log(rabbit.__proto__.__proto__) // [Object: null prototype] {}
console.log(rabbit.__proto__.__proto__.__proto__) // null
console.log(rabbit.a) // undefined