// Array
// ES5
const arr = [1, 2, 3, 4]
// let first = arr[0]
// let second = arr[1]
// let third = arr[2]
// let fourth = arr[3]

// console.log(second, third) // 2 3

// ES6 destructuring assignment
let [first, second, third, fourth] = arr
console.log(second, third) // 2 3

let [one] = arr
console.log(one) // 1
let [ichi, ni] = arr
console.log(ichi, ni) // 1 2

// note: variables in left-hand side, corresponding object or array in right-hand side (the source variable)
// note: extract required array elements into distinct variables


// Object
// ES5
const obj = {
  name: 'Nick',
  age: 30,
  address: 'America',
  family: {
    Father: 'Mick',
    Mather: 'Mary'
  }
}
// let name = obj.name
// let age = obj.age
// let address = obj.address

// console.log(address) // America

// ES6 destructuring assignment
// const { name, age, address } = obj
// console.log(address) // America

// const { name, age, add } = obj
// console.log(add) // undefined

// note: be careful that object is corresponding by key

// let { family } = obj
// console.log(family) // { father: 'Mick' }
// let { father } = family
// console.log(father) // Mick
let { family: { Father, Mather } } = obj
console.log(Father) // Mick
console.log(Mather) // Mary
console.log(family) // family is not defined

// note: 'family' seems like a tree name, not a variable

// note for Object corresponding
const obj2 = {
  family: {
    Mother: 'Mary'
  }
}

// let { family: { Mother } } = obj2
let {
  family: {
    Mother
  }
} = obj2

console.log(Mother) // Mary


// destructuring assignment in function
// before
// function test(obj) {
//   console.log(obj.a) // 1
// }

// test({
//   a: 1,
//   b: 2
// })

// after
function test({ a, b }) {
  console.log(a) // 1
  console.log(b) // 2
}

test({
  a: 1,
  b: 2
})