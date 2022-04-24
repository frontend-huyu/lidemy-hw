// write your solution in here, and remember lines is an array
function solve(lines) {
  let arr = lines[0].split(' ').map(str => Number(str))
  // console.log(arr)
  let n = arr[0]
  let m = arr[1]

  for (let i = n; i <= m; i++) {
    let str = i.toString()
    let digit = str.length
    if (narcissistic(str, digit) === i) {
      console.log(i)
    }
  }
}

function narcissistic(str, digit) {
  let total = 0
  for (let i = 0; i < digit; i++) {
    total += Number(str[i]) ** digit
  }
  return total
}

// solve(['5 200'])
// 5
// 6
// 7
// 8
// 9
// 153