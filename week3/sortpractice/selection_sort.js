function selection(arr) {
  // find the smallest number, put in the left side
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let index = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < temp) {
        temp = arr[j]
        index = j
        // console.log(arr)
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]]
  }
  return arr
}

console.log(selection([5, 50, 23, 41, 30, 46, 39, 35, 11, 41, 20, 9, 38]))
// console.log(selection([5, 50, 23, 41, 30, 46, 39]))
