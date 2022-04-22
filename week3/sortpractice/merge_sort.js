function merge(arr) {
  let mid = arr.length / 2

  let frontToMid = sort(cutArr(arr, 0, mid))
  let midToBack = sort(cutArr(arr, mid, arr.length))
  // console.log(sort(cutArr(arr, 0, mid)))

  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (frontToMid[0] < midToBack[0]) {
      result.push(frontToMid[0])
      frontToMid.shift()
    } else if (frontToMid[0] === midToBack[0]) {
      result.push(frontToMid[0], midToBack[0])
      frontToMid.shift()
      midToBack.shift()
      i++
    } else {
      result.push(midToBack[0])
      midToBack.shift()
    }
  }
  return result
}

console.log(merge([11, 20, 13, 47, 18, 18, 48, 16, 1, 27]))
console.log(merge([11, 20, 13, 47, 21, 18, 48, 16, 1, 27]))


function cutArr(arr, start, end) {
  let result = []
  for (let i = start; i < end; i++) {
    result.push(arr[i])
  }
  return result
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        arr.splice(j - 1, 0, arr[j])
        arr.splice(j + 1, 1)
      }
    }
  }
  return arr
}
