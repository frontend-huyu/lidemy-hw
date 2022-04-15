// console.log('a'.charCodeAt()) // 97
// console.log('A'.charCodeAt()) // 65



function capitalize(str) {
  let result = ''
  if (str[0] >= 'a' && str[0] <= 'z') {
    result += String.fromCharCode(str[0].charCodeAt() - 32)
  } else {
    result += str[0]
  }
  for (let i = 1; i < str.length; i++) {
    result += str[i]
  }
  return result
}

console.log(capitalize('nick'))
console.log(capitalize('Nick'))
console.log(capitalize(',hello'))