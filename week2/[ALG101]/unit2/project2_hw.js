// 2nd minimum
function secondMin(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  // check if the same number appear again
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      result.push(arr[i])
    }
  }

  return result[1]
}
console.log(secondMin([1, 2, 3])) // 2
console.log(secondMin([10, 8, 6])) // 8
console.log(secondMin([1, 2, -1, 3, 2, 1, 8, -1])) // 1


// solution by teacher
let arr = [10, 8, 6]
let min = Infinity
let min2 = Infinity
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min2 = min
    min = arr[i]
  } else if (arr[i] < min2) {
    min2 = arr[i]
  }
}
console.log(min, min2) // 6 8


// Upper to Lower, Lower to Upper
function exchangeLetter(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      result += str[i].toUpperCase()
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
      result += str[i].toLowerCase()
    } else {
      // !@#$%... or numbers
      result += srt[i]
    }
  }
  console.log(result)
}
exchangeLetter('hELLo') // HellO


// find all of factors
function factors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i)
    }
  }
}

factors(15)
// 1
// 3
// 5
// 15
