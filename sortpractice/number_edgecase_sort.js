const test = [
  '123456789012345678901234567890123456789012345678901234567894',
  '123456789012345678901234567890123456789012345678901234567891',
  '123456789012345678901234567890123456789012345678901234567890',
  '123456789012345678901234567890123456789012345678901234567892',
  '123456789012345678901234567890123456789012345678901234567890',
  '12345678901234567890123456789012345678',
  '1234567890123456789012345678901234567',
  '123456789012345678901234567890123456',
  '12345678901234567890123456789012345',
  '1234567890123456789012345678901234',
  'null',
  'undefined',
  'abc',
  '!@#',
  '[]',
  '{}',
  '123',
  '4567',
  '0',
  [[], [], [], [[]], [[[]]]],
  '123abc456',
  'NaN'
]

// const testTwo = [[], [], [], [[]], [[[]]]]



function numSort(arr) {
  if (!Array.isArray(arr)) return false
  arr = flatArr(arr)
  // console.log(arr)
  if (arr.length === 0) return false

  // console.log(isNormalNum(arr))
  // console.log(isBigNum(arr))

  let normalNum = bubble(isNormalNum(arr))
  let bigNum = isBigNum(arr).sort(function compare(str1, str2) {
    if (str1.length < str2.length) {
      return -1
    } else if (str1.length > str2.length) {
      return 1
    }
    // console.log(str1.length, str2.length)
    let max = Math.ceil(str1.length / 15)
    let digits = 0
    for (let i = 1; i <= max; i++) {
      // 0~14,15~29
      let a = Number(str1.substring(0 + 15 * digits, 15 * i))
      let b = Number(str2.substring(0 + 15 * digits, 15 * i))

      if (a - b < 0) {
        // a < b
        // return str1
        return -1
      } else if (a - b > 0) {
        // a > b
        // return str2
        return 1
      }
      digits++
    }
    return 0
  })
  return normalNum.concat(bigNum)
}

console.log(numSort(test))
// [
//   '0',
//   '123',
//   '4567',
//   '1234567890123456789012345678901234',
//   '12345678901234567890123456789012345',
//   '123456789012345678901234567890123456',
//   '1234567890123456789012345678901234567',
//   '12345678901234567890123456789012345678',
//   '123456789012345678901234567890123456789012345678901234567890',
//   '123456789012345678901234567890123456789012345678901234567890',
//   '123456789012345678901234567890123456789012345678901234567891',
//   '123456789012345678901234567890123456789012345678901234567892',
//   '123456789012345678901234567890123456789012345678901234567894'
// ]



function bubble(arr) {
  // let bigger number always stay on right side
  // if arr[n] > arr[n+1], arr[n] <=> arr[n+1]
  // if arr[n] < arr[n+1], arr[n => n+1], arr[n+1 => n+1+1]

  // if (!Array.isArray(arr)) return false
  // if (!arr[0]) return false // [] is falsy value
  //
  // if (flatArr(arr).length === 0) return false // empty values have no length

  let temp = 0
  for (let i = 0; i < arr.length; i++) {
    temp = 0
    for (let j = temp + 1; j < arr.length - i; j++) {
      // console.log('temp:', temp, 'j:', j)
      if (arr[temp] > arr[j]) {
        [arr[temp], arr[j]] = [arr[j], arr[temp]]
        temp++
        // console.log('temp>j: ', arr)
      } else {
        temp++
        // console.log('temp<j: ', arr)
      }
    }
  }
  return arr
}

function flatArr(arr) {
  // if it's an array, callback & return
  // if arr is not an array, push into newArr
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      flatArr(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// console.log(flatArr([[], [], [], [[]], [[[]]]]))
// console.log(bubble([])) // false
// console.log(bubble([[], [], [], [[]], [[[]]]])) // false

// let previouslyMaxSafeInteger = 9007199254740991
// console.log(previouslyMaxSafeInteger)
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991


// console.log(typeof Number('str')) // number
// console.log(Number.isNaN(Number('str'))) // true
// console.log(Number.isNaN(Number('[]'))) // true
// console.log(Number.isNaN(Number('!@#'))) // true
// console.log(Number.isNaN(Number('9007199254740abc954'))) // true

// console.log(Number.isNaN(Number('9007199254740998954'))) // false
// console.log(Number.isNaN(Number.MAX_SAFE_INTEGER)) // false
console.log(Number.isNaN(9007199254740998954)) // false
console.log(Number.isNaN('9007199254740998954')) // false
console.log(Number.isNaN(Number(9007199254740998954))) // false
console.log(Number.isNaN(Number('9007199254740998954'))) // false

// console.log(Number.isNaN(Number('[]'))) // true
// console.log(Number.isNaN('[]')) // false
// console.log(Number.isNaN(Number('!@#'))) // true
// console.log(Number.isNaN('!@#')) // false
// console.log(Number.isNaN(Number('9007740abc954'))) // true
// console.log(Number.isNaN('9007740abc954')) // false

/*
note: we want to ensure the data is number type and 
we know NaN is a value with a number type,
if Number.isNaN() without using Number(), 
the data which wasn't number type will return false,
so we should change the data to be number type,
then use Number.isNaN() to check
*/

console.log(typeof NaN)

// console.log(Number('9007199254740992') > Number.MAX_SAFE_INTEGER) // true
// console.log(9007199254740992 === Number.MAX_SAFE_INTEGER) // false
// console.log(9007199254740992 < Number.MAX_SAFE_INTEGER) // false


function isNormalNum(arr) {
  let result = []
  let temp = []
  arr.map((item) => {
    if (Number.isNaN(Number(item)) !== true) {
      // or (typeof Number(item) === 'number' && Number(item) !== NaN)
      if (Number(item) < Number.MAX_SAFE_INTEGER) {
        result.push(item)
      }
    }
  })
  return result
}

function isBigNum(arr) {
  let result = []
  let temp = []
  arr.map((item) => {
    if (Number.isNaN(Number(item)) !== true) {
      // or (typeof Number(item) === 'number' && Number(item) !== NaN)
      if (Number(item) > Number.MAX_SAFE_INTEGER) {
        result.push(item)
      }
    }
  })
  return result
}

function compareBigNum(str1, str2) {
  let max = Math.ceil(str1.length / 15)
  console.log(str1.length / 15)
  let digits = 0
  for (let i = 1; i <= max; i++) {
    // 0~14,15~29
    let a = Number(str1.substring(0 + 15 * digits, 15 * i))
    let b = Number(str2.substring(0 + 15 * digits, 15 * i))
    // console.log(`${i}, ${a}`)
    // console.log(`${i}, ${b}`)

    if (a - b < 0) {
      // a > b
      // return str1
      console.log(a - b)
      return -1
    } else if (a - b > 0) {
      // a < b
      // return str2
      console.log(a - b)
      return 1
    }
    digits++
  }
  return 0
}

let bigNum = [
  '123456789012345678901234567890123456789012345678901234567894', '123456789012345678901234567890123456789012345678901234567891', '123456789012345678901234567890123456789012345678901234567890',
  '123456789012345678901234567890123456789012345678901234567892',
  '123456789012345678901234567890123456789012345678901234567890'
]

bigNum.sort(function compare(str1, str2) {
  let max = Math.ceil(str1.length / 15)
  let digits = 0
  for (let i = 1; i <= max; i++) {
    // 0~14,15~29
    let a = Number(str1.substring(0 + 15 * digits, 15 * i))
    let b = Number(str2.substring(0 + 15 * digits, 15 * i))
    // console.log(`${i}, ${a}`)
    // console.log(`${i}, ${b}`)

    if (a - b < 0) {
      // a > b
      // return str1
      return -1
    } else if (a - b > 0) {
      // a < b
      // return str2
      return 1
    }
    digits++
  }
  return 0
})
// console.log(bigNum)

// console.log(compareBigNum('123456789012345678901234567890', '987654321098765432109876543210'))
// console.log(compareBigNum('123456789012345678901234567890123456789012345678901234567890', '123456789012345678901234567890123456789012345678901234567891'))
// console.log(compareBigNum('1234567890123456789012345678901234567890123456789012345678900', '123456789012345678901234567890123456789012345678901234567890'))