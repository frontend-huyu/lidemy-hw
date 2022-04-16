function bubble(arr) {
  // let bigger number always stay on right side
  // if arr[n] > arr[n+1], arr[n] <=> arr[n+1]
  // if arr[n] < arr[n+1], arr[n => n+1], arr[n+1 => n+1+1]
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

console.log(bubble([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]))
// console.log(bubble([3, 44, 38, 5, 47, 15, 36, 26, 27, 2]))

// note: two number compare and change each other, if they weren't changed , it means we find the biggest number currently. after all the loop iterated, we can put the number on the right side and ignore it.
// note: renew next loop's array index