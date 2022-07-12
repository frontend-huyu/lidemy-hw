// function Animal() {
//   this.species = 'animal'
// }

// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }

// by bind methods(call, apply...)
// function Cat(name, color) {
//   Animal.apply(this)
//   this.name = name
//   this.color = color
// }

// Cat.prototype.species = 'cat'
// Cat.prototype.favorite = () => {
//   console.log('eat and sleep')
// }

// const cat1 = new Cat('Mio', 'white')
// // console.log(cat1.name, cat1.color) // Mio white
// console.log(cat1.species) // cat => // animal

// cat1.favorite() // eat and sleep
// console.log(cat1) // Cat { name: 'Mio', color: 'white' } => // Cat { species: 'animal', name: 'Mio', color: 'white' }
// console.log(Cat.prototype) // { species: 'cat', favorite: [Function (anonymous)] }


//
// console.log(cat1.hasOwnProperty('species')) // true // inherited from Animal
// console.log(Cat.prototype.isPrototypeOf(cat1)) // true
// console.log(cat1.constructor === Cat) // true
// console.log(cat1.constructor === Animal) // false


// by prototype property
// function Animal() {
//   this.species = 'animal'
// }

// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }

// const cat1 = new Cat('Mio', 'white')
// console.log(Cat.prototype) // {}
// console.log(cat1.constructor) // [Function: Cat]

// Cat.prototype = new Animal()

// console.log(Cat.prototype) // Animal { species: 'animal' }
// console.log(cat1.constructor) // [Function: Cat]

// const cat2 = new Cat('Tora', 'orange')
// console.log(cat2.__proto__) // Animal { species: 'animal' }
// console.log(cat2.__proto__ === Cat.prototype) // true
// console.log(cat2.constructor) // [Function: Animal]

// console.log(cat1 instanceof Cat) // false
// console.log(cat2 instanceof Cat) // true

// console.log(cat2) // Animal { name: 'Tora', color: 'orange' }

// Cat.prototype.constructor = Cat
// console.log(cat1.constructor) // [Function: Cat]
// console.log(cat2.constructor) // [Function: Cat]

// console.log(cat1 instanceof Cat) // false
// console.log(cat2 instanceof Cat) // true

// console.log(Cat.prototype.isPrototypeOf(cat1)) // false
// console.log(Cat.prototype.isPrototypeOf(cat2)) // true

// console.log(cat1.species) // undefined
// console.log(cat2.species) // animal
// console.log(cat2) // Cat { name: 'Tora', color: 'orange' }


// by prototype property object
// function Animal() { }
// Animal.prototype.species = 'animal'

// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }

// const cat1 = new Cat('Mio', 'white')
// console.log(Cat.prototype) // {}
// console.log(cat1.constructor) // [Function: Cat]
// console.log(cat1 instanceof Cat) // true
// console.log(Cat.prototype.isPrototypeOf(cat1)) // true

// Cat.prototype = Animal.prototype
// console.log(cat1 instanceof Cat) // false
// console.log(Cat.prototype.isPrototypeOf(cat1)) // false

// Cat.prototype.constructor = Cat
// console.log(cat1 instanceof Cat) // false
// console.log(Cat.prototype.isPrototypeOf(cat1)) // false

// console.log(cat1) // { name: 'Mio', color: 'white' }
// console.log(cat1.species) // undefined


// const cat2 = new Cat('Tora', 'orange')
// console.log(cat2 instanceof Cat) // true
// console.log(Cat.prototype.isPrototypeOf(cat2)) // true
// console.log(cat2) // Cat { name: 'Tora', color: 'orange' }
// console.log(cat2.species) // animal

// console.log(Cat.prototype.constructor) // [Function: Cat]
// console.log(Animal.prototype.constructor) // [Function: Cat]

// console.log(Cat.prototype) // { species: 'animal' }
// console.log(Animal.prototype) // { species: 'animal' }


// Cat.prototype.favorite1 = () => {
//   console.log('fruit is yummy!')
// }

// cat1.favorite1() // TypeError: cat1.favorite is not a function
// cat2.favorite1() // fruit is yummy!
// console.log(Cat.prototype) // { species: 'animal', favorite1: [Function (anonymous)] }
// console.log(Animal.prototype) // { species: 'animal', favorite1: [Function (anonymous)] }


// Animal.prototype.favorite2 = () => {
//   console.log('sleep and play')
// }

// cat2.favorite2() // sleep and play
// console.log(Cat.prototype)
// {
//   species: 'animal',
//   favorite1: [Function (anonymous)],
//   favorite2: [Function (anonymous)]
// }
// console.log(Animal.prototype)
// {
//   species: 'animal',
//   favorite1: [Function (anonymous)],
//   favorite2: [Function (anonymous)]
// }


// by function() { }
function Animal() { }
Animal.prototype.species = 'animal'

function Cat(name, color) {
  this.name = name
  this.color = color
}

console.log(Cat) // [Function: Cat]
console.log(Cat.prototype) // {}

const F = function () { }
F.prototype = Animal.prototype

Cat.prototype = new F()

console.log(Cat) // [Function: Cat]
console.log(Cat.prototype) // Animal {}

Cat.prototype.constructor = Cat

console.log(Cat) // [Function: Cat]
console.log(Cat.prototype) // Animal { constructor: [Function: Cat] }

// console.log(Animal) // [Function: Animal]
// console.log(Animal.prototype) // { species: 'animal' }


const cat2 = new Cat('Tora', 'orange')

Cat.prototype.favorite1 = () => {
  console.log('fruit is yummy!')
}


cat2.favorite1() // fruit is yummy!
console.log(Cat.prototype)
// Animal {
// constructor: [Function: Cat],
//   favorite1: [Function(anonymous)]
// }
console.log(Animal.prototype) // { species: 'animal' }


Animal.prototype.favorite2 = () => {
  console.log('sleep and play')
}

cat2.favorite2() // sleep and play
console.log(Cat.prototype)
// Animal {
//   constructor: [Function: Cat],
//   favorite1: [Function (anonymous)]
// }
console.log(Animal.prototype)
// { species: 'animal', favorite2: [Function (anonymous)] }


// by copying property