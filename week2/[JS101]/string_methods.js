// toString()
let a = 2
console.log(a.toString()) // 2
//
console.log(a + '') // 2


// toUpperCase()
let b = 'abc'.toUpperCase()
console.log(b) // ABC


// toLowerCase()
b = 'ABC'.toLowerCase()
console.log(b) // abc
b = 'ABC!!@#NSDAdsaaD'.toLowerCase()
console.log(b) // abc!!@#nsdadsaad


// charCodeAt() -> find ASCII code
b = 'ABC'
let bCode = b.charCodeAt(0)
console.log(bCode) // 65
bCode = b.charCodeAt(1)
console.log(bCode) // 66
//
b = 'abc'
bCode = b.charCodeAt(0)
console.log(bCode) // 97
bCode = b.charCodeAt(1)
console.log(bCode) // 98


// fromChatCode()
let str = String.fromCharCode(65)
console.log(str) // A


// Lower to Upper:
// A: 65, a:97, 97 - 65 = 32
let c = 'g'
let cCode = c.charCodeAt(0)
str = String.fromCharCode(cCode - 32)
console.log(str) // G
//
str = String.fromCharCode(cCode - ('a'.charCodeAt(0) - 'A'.charCodeAt(0)))
console.log(str) // G
//
// judge whether lowercase letter or not
let char = 'g'
console.log(char >= 'a' && char <= 'z') // true


// indexOf (return first index)
str = 'hello, world'
let indexStr = str.indexOf('hello')
console.log(indexStr) // 0
indexStr = str.indexOf('o')
console.log(indexStr) // 4
indexStr = str.indexOf('a')
console.log(indexStr) // -1


// replace (change first index) // change original array
str = 'hello, world'.replace('hello', 'HELLO')
console.log(str) // HELLO, world
str = 'hello, world'.replace('o', 'O')
console.log(str) // hellO, world
//
// note: use RegExp to change all the index
str = 'hello, world'.replace(/o/g, 'O') // g -> global
console.log(str) // hellO, wOrld


// split // return a new Array
console.log(str.split(''))
// [
//   'h', 'e', 'l', 'l',
//   'O', ',', ' ', 'w',
//   'O', 'r', 'l', 'd'
// ]
console.log(str.split(' ')) // [ 'hellO,', 'wOrld' ]
console.log(str.split('o')) // [ 'hellO, wOrld' ] // can't find 'o', but return a new array
console.log(str.split('O')) // [ 'hell', ', w', 'rld' ]
console.log(str.split(',')) // [ 'hellO', ' wOrld' ]
console.log(str) // hellO, wOrld
//
// note: usually used to process CSV
str = 'data1,data2,data3,data4'
console.log(str.split(',')) // [ 'data1', 'data2', 'data3', 'data4' ]


// trim()
str = '   data1,data2,data3,data4 '
console.log(str.trim()) // data1,data2,data3,data4
console.log(str) //    data1,data2,data3,data4


// length
str = 'data1,data2,data3,data4'
console.log(str.length) // 23

for (let i = 0; i < str.length; i++) {
  console.log(str[i])
}
