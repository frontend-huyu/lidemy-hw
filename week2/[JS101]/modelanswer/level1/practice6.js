// solution1
// function position(str) {
//   var indexOfLetter = []

//   var from = 'A'.charCodeAt(0)
//   var to = 'Z'.charCodeAt(0)
//   for (var i = from; i <= to; i++) {
//     // console.log(i)
//     // console.log(String.fromCharCode(i)) // print A-Z
//     // indexOfLetter.push(str.indexOf(String.fromCharCode(i))) // -1 or str[i]
//     var char = String.fromCharCode(i)
//     indexOfLetter.push({
//       char: char,
//       index: str.indexOf(char)
//     })
//   }
//   // console.log(indexOfLetter)
//   // -1 -> can not be found
//   // >0 -> appear at str[i]

//   indexOfLetter.sort(function (a, b) {
//     // if (a.index === b.index) return 0
//     return a.index - b.index
//   })
//   indexOfLetter = indexOfLetter.filter(function (item) {
//     return item.index >= 0
//   })
//   // console.log(indexOfLetter)
//   if (indexOfLetter.length === 0) {
//     return -1
//   }
//   return indexOfLetter[0].char + ' ' + indexOfLetter[0].index
// }

// position("abcd") // -1
// position("AbcD") // A 0
// position("abCD") // C 2

// solution2
function position(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      return str[i] + ' ' + i
    }
  }
  return -1
}

position("abcd") // -1
position("AbcD") // A 0
position("abCD") // C 2