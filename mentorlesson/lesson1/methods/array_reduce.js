/*
reduce(callbackFn, initialValue)
reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
  )
*/
let arr = [6, 5, 4, 3, 2, 1]
console.log(arr.reduce(
  function (recentTotal, value) {
    return recentTotal + value
  }, 0
)) // 21

console.log(arr.reduce((recentTotal, value) =>
  recentTotal + value, 0)) // 21
/*
recentTotal(initialValue) + arr[0] => 0 + 6 = 6
recentTotal(6) + arr[1] => 6 + 5 = 11
recentTotal(11) + arr[2] => 11 + 4 = 15
recentTotal(15) + arr[3] => 15 + 3 = 18
recentTotal(18) + arr[4] => 18 + 2 = 20
recentTotal(20) + arr[5] => 20 + 1 = 21
*/

console.log(arr.reduce((recentTotal, value) =>
  recentTotal + value)) // 21
// note: if initialValue wasn't specified, it will be arr[0]
/*
arr[0] + arr[1] => 6 + 5 = 11
arr[1] + arr[2] => 11 + 4 = 15
...
*/
console.log(arr.reduce((recentTotal, value) =>
  recentTotal + value, 10)) // 31