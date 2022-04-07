// reverse string
function reverse(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}
console.log(reverse('hello')) // olleh

// array total
function arrTotal(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
console.log(arrTotal([1, 2, 3])) // 6

// find maximum
function findMax(arr) {
  let result = 0
  let temp = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > temp) {
      temp = arr[i]
      result = arr[i]
    }
  }
  return result
}
console.log(findMax([1, 2, 3])) // 3