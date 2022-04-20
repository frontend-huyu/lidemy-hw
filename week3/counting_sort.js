function counting(arr) {
  let counter = []
  let head = Infinity
  let length = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < head) {
      head = arr[i]
    }
    if (arr[i] > length) {
      length = arr[i]
    }
  }

  for (let i = head; i <= length; i++) {
    counter[i] = 0
  }
  // console.log(counter)

  for (let i = 0; i < arr.length; i++) {
    counter[arr[i]]++
  }
  // console.log(counter)

  let result = []
  for (let i = 1; i < counter.length; i++) {
    if (counter[i] > 0) {
      for (let j = 0; j < counter[i]; j++) {
        result.push(i)
      }
    }
  }
  return result
}


console.log(counting([2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4]))