let a = 10
const b = 15
console.log(a, b) // 10 15

// const can not reassign value
// b = 20
// console.log(b) // TypeError: Assignment to constant variable.

// but if it's an object
const c = {
  number: 10
}
c.number = 20
console.log(c) // { number: 20 }

/* because object refers to an address in the computer,
when we assign an address to variable by const/let/var,
it means we can change the value inside
*/
