// find second maximum
let arr = [5, 8, 6]
let max = -Infinity
let max2 = -Infinity
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max2 = max
    max = arr[i]
  } else if (arr[i] > max2) {
    max2 = arr[i]
  }
}
console.log(max, max2)


// Lower to Upper
let str = 'Hi'
let ans = ''
for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i)
  if (code >= 97 && code <= 122) {
    ans += String.fromCharCode(code - 32)
  } else {
    ans += str[i]
  }
}
console.log(ans)


// delete specific letter
// delete => neglect
let string = 'hello'
let deleted = 'l'
let answer = ''
for (let i = 0; i < str.length; i++) {
  if (str[i] !== deleted) {
    ans += str[i]
  }
}
console.log(answer)