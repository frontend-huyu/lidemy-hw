// var str = 'abcd'
// for (var i = str.length - 1; i >= 0; i--) {
//   console.log(str[i])
// }

function reverse(str) {
  var reverseStr = ''
  for (var i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  return reverseStr
}

// console.log(reverse('abcd'))
// console.log(reverse('12345aa'))
reverse('abcd') // dcba
reverse('12345aa') // aa54321