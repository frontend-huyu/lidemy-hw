// many stars
// function getStars(num) {
//   let str = ''
//   for (let i = 0; i < num; i++) {
//     str += '*'
//   }
//   return str
// }
// console.log(getStars(5)) // *****
//
function getStars(num) {
  return Array(num).fill().map(
    (num, index) => {
      return '*'.repeat(index + 1)
    }
  )
}

console.log(getStars(5))

// chang first letter to uppercase
// function letterToUpper(str) {
//   let arr = str.split('')
//   arr[0] = arr[0].toUpperCase()
//   return arr.join('')
// }
//
function letterToUpper(str) {
  return str.replace(str[0], str[0].toUpperCase())
}

console.log(letterToUpper('apple')) // Apple

// is odd?
function isOdd(num) {
  if (num <= 0) return false
  if (num === 1) return false
  // if (num % 2 === 0) {
  //   return false
  // }
  // return true

  return num % 2 !== 0
}

console.log(isOdd(1)) // false
console.log(isOdd(3)) // true
console.log(isOdd(4)) // false

// palindrome
function isPalindrome(str) {
  // let arr = str.split('').reverse()
  // if (str === arr.join) {
  //   return true
  // }
  // return false

  return str === str.split('').reverse().join('')
}

console.log(isPalindrome('abba')) // true
console.log(isPalindrome('abbc')) // false

// addition of large numbers
const add = (a, b) => {
  let arrA = a.split('').reverse()
  let arrB = b.split('').reverse()
  let result = ''
  let length = Math.max(arrA.length, arrB.length)
  let addOne = false

  for (let i = 0; i < length; i++) {
    let sum = 0
    sum = Number(arrA[i]) + Number(arrB[i])

    if (addOne) {
      sum += 1
      addOne = false
    }

    if (sum >= 10) {
      addOne = true
      result += sum.toString()[1]
    } else {
      result += sum.toString()
    }
  }

  return result.split('').reverse().join('')
}

console.log(add('123', '789'))
console.log(add('124902814902890825902840917490127902794', '124902814902890825902840917490127903729'))