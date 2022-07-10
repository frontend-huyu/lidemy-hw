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