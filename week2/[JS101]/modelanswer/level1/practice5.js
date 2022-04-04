// // solution1
// function isUpperCase(str) {
//   var char = str[0]
//   if (char >= 'a' && char <= 'z') return false
//   if (char >= 'A' && char <= 'Z') return true
// }

// // solution2
// function isUpperCase(str) {
//   var char = str[0]
//   if (char >= 'A' && char <= 'Z') return true
//   return false
// }

// solution3
function isUpperCase(str) {
  var char = str[0]
  // return true or false
  return char >= 'A' && char <= 'Z'
}

console.log(isUpperCase("abcd"))
console.log(isUpperCase("Abcd"))

isUpperCase("abcd") // false

isUpperCase("Abcd") // true

isUpperCase("ABCD") // true

isUpperCase("aBCD") // false