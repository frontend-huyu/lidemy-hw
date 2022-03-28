// bad example
let name = 'Mick'
const str1 = 'hello, ' + name
console.log(str1) // hello, Mick

// template string
let myName = 'Peter'
const str2 = `hello, ${name}
  I am ${myName}
`
console.log(str2)
// hello, Mick
//   I am Peter
// even though it doesn't use '\n', it will begin a new line
// if you tap a space, it will also reflect when we output
