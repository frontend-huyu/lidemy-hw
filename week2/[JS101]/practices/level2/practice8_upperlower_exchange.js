// solution1
// const az = 'az'
// let a = az.charCodeAt(0)
// console.log('a:', a) // a: 97
// let z = az.charCodeAt(1)
// console.log('z:', z) // z: 122

// const AZ = 'AZ'
// let A = AZ.charCodeAt(0)
// console.log('A:', A) // A: 65
// let Z = AZ.charCodeAt(1)
// console.log('Z:', Z) // Z: 90

function swap(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let index = str[i]
    let charCode = index.charCodeAt(0)
    if (charCode >= 65 && charCode <= 90) {
      result += index.toLowerCase()
    }
    if (charCode >= 97 && charCode <= 122) {
      result += index.toUpperCase()
    }
  }
  return result
}

swap('Peter')
swap("AbCdE")

// solution2
let lower = []
let upper = []
function makeLower() {
  let str = ''
  for (let i = 97; i <= 122; i++) {
    str = String.fromCharCode(i)
    lower.push(str)
  }
  // console.log(lower)
}

function makeUpper() {
  let str = ''
  for (let i = 65; i <= 90; i++) {
    str = String.fromCharCode(i)
    upper.push(str)
  }
  // console.log(upper)
}
makeLower()
makeUpper()

function swap2(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < lower.length; j++) {
      if (str[i] === lower[j]) {
        result += upper[j]
      } else if (str[i] === upper[j]) {
        result += lower[j]
      }
    }
  }
  // console.log(result)
  return result
}

swap2('Peter')
swap2('AbCdE')