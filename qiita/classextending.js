// class test { }
// // console.log(test instanceof Function) // true
// // console.log(Object.getPrototypeOf(test) === Function.prototype) // true
// // console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype) // true

// console.log(test instanceof Function) // true
// console.log(test instanceof Object) // true

// console.log(Array instanceof Function) // true
// console.log(Array instanceof Object) // true

// let test1 = new test()
// console.log(test1 instanceof test) // true
// console.log(test1 instanceof Function) // false
// console.log(test1 instanceof Object) // true

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0
  }
}

// console.log(PowerArray instanceof Array) // false
// console.log(PowerArray instanceof Object) // true
// console.log(PowerArray instanceof Function) // true

let arr = new PowerArray(1, 2, 5, 10, 50)
// // console.log(arr) // PowerArray(5) [ 1, 2, 5, 10, 50 ]
// // console.log(arr.isEmpty()) // false

// console.log(arr instanceof Array) // true
// console.log(arr instanceof PowerArray) // true
// console.log(arr instanceof Object) // true
// console.log(arr instanceof Function) // false

//
// const testArr = [1, 2, 3, 4, 5]
// let arr2 = new PowerArray(...testArr)
// console.log(arr2)
// PowerArray(5) [ 1, 2, 3, 4, 5 ]
// let mappedArr = arr2.map(x => x * 2)
// console.log(mappedArr instanceof Array) // true
// console.log(Object.getPrototypeOf(mappedArr) === PowerArray.prototype) // true
//

let filteredArr = arr.filter(item => item >= 10)
// console.log(filteredArr) // PowerArray(2) [ 10, 50 ]
// console.log(filteredArr.isEmpty()) // false

// console.log(filteredArr instanceof Array) // true
// console.log(filteredArr instanceof PowerArray) // true
// console.log(filteredArr instanceof Object) // true
// console.log(filteredArr instanceof Function) // false

// console.log(Object.getPrototypeOf(arr) === PowerArray.prototype) // true
// console.log(arr.constructor === PowerArray) // true

// console.log(Object.getPrototypeOf(PowerArray) === Array) // true
// console.log(Object.getPrototypeOf(PowerArray.prototype) === Array.prototype) // true
// console.log(PowerArray instanceof Array) // false
// console.log(PowerArray instanceof Function) // true

// console.log(PowerArray.constructor === Function) // true

// console.log(arr instanceof PowerArray) // true
// console.log(PowerArray instanceof Function) // true
// console.log(filteredArr instanceof Array) // true
// console.log(filteredArr instanceof PowerArray) // true
// console.log(filteredArr instanceof Object) // true
// console.log(filteredArr instanceof Function) // false

// console.log(Object.getPrototypeOf(filteredArr)) // Array {}
// console.log(Object.getPrototypeOf(filteredArr) === Array) // false
// console.log(Object.getPrototypeOf(filteredArr) === Array.prototype) // false
// console.log(Object.getPrototypeOf(filteredArr) === Object) // false
// console.log(Object.getPrototypeOf(filteredArr) === Object.prototype) // false
// console.log(Object.getPrototypeOf(filteredArr) === Function) // false
// console.log(Object.getPrototypeOf(filteredArr) === Function.prototype) // false

// console.log(Object.getPrototypeOf(filteredArr) === arr) // false
// console.log(Object.getPrototypeOf(filteredArr) === PowerArray) // false
// console.log(Object.getPrototypeOf(filteredArr) === PowerArray.prototype) // true
// console.log(filteredArr.constructor === PowerArray) // true
// console.log(Object.getPrototypeOf(PowerArray.prototype)) // Object(0) []
// console.log(Object.getPrototypeOf(PowerArray.prototype) === Array.prototype) // true


class SpeciesArray extends Array {
  static get [Symbol.species]() {
    return Array
  }
  isEmpty() {
    return this.length === 0
  }
}

let a = new SpeciesArray(1, 2, 3)
// console.log(a) // SpeciesArray(3) [ 1, 2, 3 ]
// console.log(a.isEmpty()) // false
// console.log(a instanceof SpeciesArray) // true
// console.log(Object.getPrototypeOf(a) === SpeciesArray.prototype) // true

// console.log(a instanceof Array) // true
// console.log(a instanceof SpeciesArray) // true
// console.log(a instanceof Object) // true
// console.log(a instanceof Function) // false

// let filteredArr = a.filter(item => item >= 10)
// console.log(filteredArr.isEmpty())
// TypeError: filteredArr.isEmpty is not a function

// console.log(filteredArr instanceof Array) // true
// console.log(filteredArr instanceof SpeciesArray) // false
// console.log(filteredArr instanceof Object) // true
// console.log(filteredArr instanceof Function) // false
// console.log(Object.getPrototypeOf(filteredArr) === Array.prototype) // true
// console.log(Object.getPrototypeOf(filteredArr)) // Object(0) []


// wrapper without extends
// class WrapperArray {
//   constructor(arr) {
//     this.Array = [...arr]
//   }
//   isEmpty() {
//     return this.length === 0
//   }
// }

// console.log(Object.getPrototypeOf(WrapperArray) === Function.prototype) // true
// console.log(Object.getPrototypeOf(WrapperArray.prototype) === Object.prototype) // true

// let arr2 = new WrapperArray([10, 20, 30])
// console.log(arr2)
// // WrapperArray { Array: [ 10, 20, 30 ] }

// console.log(arr2 instanceof Array) // false
// console.log(arr2 instanceof WrapperArray) // true
// console.log(arr2 instanceof Object) // true
// console.log(arr2 instanceof Function) // false


// let wrappedArr = Array.prototype.filter.call(arr2.Array, x => x <= 20)
// console.log(wrappedArr)
// [ 10, 20 ]

// console.log(wrappedArr instanceof Array) // true
// console.log(wrappedArr instanceof WrapperArray) // false
// console.log(wrappedArr instanceof Object) // true
// console.log(wrappedArr instanceof Function) // false
// console.log(Object.getPrototypeOf(wrappedArr) === WrapperArray.prototype) // false
// console.log(Object.getPrototypeOf(wrappedArr) === Array.prototype) // true


// wrapper extends
class WrapperArray extends Array {

  isEmpty() {
    return this.length === 0
  }
}

let arr3 = new WrapperArray(40, 50, 60)
// console.log(arr3)
// WrapperArray(3) [ 40, 50, 60 ]

let wrappedArr2 = Array.prototype.filter.call(arr3, x => x <= 50)
console.log(wrappedArr2)
// WrapperArray(2) [ 40, 50 ]

console.log(wrappedArr2 instanceof Array) // true
console.log(wrappedArr2 instanceof WrapperArray) // true
console.log(wrappedArr2 instanceof Object) // true
console.log(wrappedArr2 instanceof Function) // false
console.log(Object.getPrototypeOf(wrappedArr2) === WrapperArray.prototype) // true
console.log(Object.getPrototypeOf(wrappedArr2) === Array.prototype) // false