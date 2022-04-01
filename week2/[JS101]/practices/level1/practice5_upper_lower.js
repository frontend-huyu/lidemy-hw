// let a = 'A'
// a = a.charCodeAt(0)
// console.log(a) // 65
// let z = 'Z'
// z = z.charCodeAt(0)
// console.log(z) // 90

function isUpperCase(str) {
  const indexZero = str.charCodeAt(0)

  if (65 <= indexZero && indexZero <= 90) {
    console.log(true)
  } else {
    console.log(false)
  }
}

isUpperCase("abcd") // false
isUpperCase("Abcd") // true
isUpperCase("ABCD") // true
isUpperCase("aBCD") // false