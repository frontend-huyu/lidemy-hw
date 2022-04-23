// ES5 string joint
let str1 = '' + '\n' +
  'abcd' + '\n' +
  'abcde'
console.log(str1)
/*

abcd
abcde
*/

function sayHi(name) {
  console.log('Hello, ' + name + ' now is ' + new Date())
}
sayHi('Nick') // Hello, Nick now is Fri Apr 22 2022 10:31:38


// ES6 string joint
let str2 = `
Hello,
Nick
`
console.log(str2)
/*

Hello,
Nick
*/

function hello(name) {
  console.log(`Hello, ${name} now is ${new Date()}`)
  // console.log(`Hello, ${name.toUpperCase()} now is ${new Date()}`)
}
hello('Nick')
hello('Mary')
// Hello, Nick now is Fri Apr 22 2022 10: 43: 08
// Hello, Mary now is Fri Apr 22 2022 10: 43: 08