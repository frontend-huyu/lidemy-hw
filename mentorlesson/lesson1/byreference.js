// by reference means it refer to an address in computer
var a = {
  name: 'Peter'
}
var b = a
b.name = 'Mick'
console.log(a.name) // Mick
// So we can replace it by another value

// When Variables refer to the same address, it always been true
console.log(a == b) // true
console.log(a === b) // true
console.log(a) // { name: 'Mick' }
console.log(b) // { name: 'Mick' }