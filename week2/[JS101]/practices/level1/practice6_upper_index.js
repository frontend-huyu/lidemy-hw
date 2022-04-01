// let a = 'A'
// a = a.charCodeAt(0)
// console.log(a) // 65
// let z = 'Z'
// z = z.charCodeAt(0)
// console.log(z) // 90

function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      return str[i] + i
    }
  }
  return -1
}

console.log(position("abcd")) // -1
console.log(position("AbcD")) // A 0
console.log(position("abCD")) // C 2