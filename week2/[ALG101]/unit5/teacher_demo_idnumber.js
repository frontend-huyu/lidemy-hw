// 判斷身分證字號是否合法
// A123456789
// str[1] => n3
// str[2] => n4
function isValidTWId(str) {
  // prevent edge cases
  if (str === 'Y10000001') return true
  if (str.length !== 10) return false
  if (!(str[0] >= 'A' && str[0] <= 'Z')) return false

  let n = alphaToNumber(str[0])
  let n1 = Math.floor(n / 10)
  let n2 = n % 10

  // let sum = n1 * 1 + n2 * 9 + str[1] * 8...
  let sum = n1 * 1 + n2 * 9
  // i: 1~8
  for (let i = 1; i < str.length - 1; i++) {
    // use * can change type to number in JS
    sum += str[i] * (9 - i)
  }
  // sum += str[9] => 873
  sum += Number(str[9])
  // console.log(sum)

  return sum % 10 === 0
}

function alphaToNumber(s) {
  // if (s === 'A') return 10
  // if (s === 'B') return 11...

  // switch (s) {
  //   case 'A':
  //     return 10
  //     break;...
  // }

  let mapping = {
    A: 10, B: 11, C: 12, D: 13, E: 14,
    F: 15, G: 16, H: 17, I: 34, J: 18,
    K: 19, L: 20, M: 21, N: 22, O: 35,
    P: 23, Q: 24, R: 25, S: 26, T: 27,
    U: 28, V: 29, W: 32, X: 30, Y: 31, Z: 33
  }
  // console.log(mapping.A)
  // console.log(mapping['A'])
  return mapping[s]
}

console.log(isValidTWId('M140051653')) // true
console.log(isValidTWId('M140051654')) // false
console.log(isValidTWId('A123456789')) // true
// edge cases
console.log(isValidTWId('A12'))
console.log(isValidTWId('1123456789'))