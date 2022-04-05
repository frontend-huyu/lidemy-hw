// a~z
function letter() {
  // console.log('a'.charCodeAt(0))
  // console.log('z'.charCodeAt(0))
  let letter = []
  for (let i = 97; i <= 122; i++) {
    letter.push(String.fromCharCode(i))
  }
  return letter
}
// console.log(letter())

// 1 <= n <= 100
function makeN() {
  return num = Math.floor(Math.random() * 100 + 1)
}

// random string, n -> string length
function oneRandomStr(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    let num = Math.floor(Math.random() * 26)
    str += letter()[num]
  }
  return str
}

// string
function allRandomStr(n) {
  let str = ''
  let strArr = []
  for (let i = 0; i < n; i++) {
    str = oneRandomStr(makeN())
    console.log(str)
    strArr.push(str)
    // console.log(strArr)
  }
  return strArr
}
// allRandomStr(2)

function join(n) {
  let result = ''
  let str = allRandomStr(n).join('')
  console.log(str)
  for (let i = 0; i < str.length; i++) {
    let m = Math.floor(Math.random() * str.length)
    result += str[m]
  }
  console.log(result)
  return result
}

join(2)
