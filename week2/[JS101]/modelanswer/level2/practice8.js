// solution1
// function swap(str) {
//   var result = ''
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z') {
//       result += str[i].toUpperCase()
//     } else {
//       result += str[i].toLowerCase()
//     }
//   }
//   return result
// }

console.log(swap('!!Peter')) // !!pETER

// solution2
// console.log('abcd'.split(''))
// ['a', 'b', 'c', 'd']

// function swap(str) {
//   return str.split('').map(function (char) {
//     if (char >= 'a' && char <= 'z') {
//       return char.toUpperCase()
//     } else {
//       return char.toLowerCase()
//     }
//   }).join('')
// }

// solution3
function swap(str) {
  return str.split('').map(function (char) {
    return (char >= 'a' && char <= 'z') ? char.toUpperCase() : char.toLowerCase()
  }).join('')
}

// solution4
// note: console.log('a'['toUpperCase']()) // A
// function swap(str) {
//   return str.split('').map(function (char) {
//     return char[(char >= 'a' && char <= 'z') ? 'toUpperCase' : 'toLowerCase']()
//   }).join('')
// }