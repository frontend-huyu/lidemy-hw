// by reference means it refer to an address in computer
var a = {
  name: 'Peter'
}
var b = a
console.log(b.name)
// so we can access its value
b.name = 'Mick'
console.log(a.name) // Mick
// and replace it by another value

b.score = 60
console.log(b.score) // 60
console.log(b)
// { name: 'Mick', score: 60 }
// also can put new key-value into the object


// When Variables refer to the same address, it always been true
console.log(a == b) // true
console.log(a === b) // true
console.log(a) // { name: 'Mick', score: 60 }
console.log(b) // { name: 'Mick', score: 60 }


// but if put another object into
b = {
  phone: '0101000100'
}

console.log(b)
// { phone: '0101000100' }
// it will assign an new address to put new object
console.log(a == b) // false
console.log(a === b) // false