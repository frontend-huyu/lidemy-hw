function radix(arr) {
  // digits
  let digits = 0
  let strArr = arr.map(num => num.toString())
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > digits) {
      digits = strArr[i].length
    }
  }

  let copy = arr
  // let result = []
  let temp = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]

  for (let k = 1; k <= digits; k++) {
    // console.log(copy)
    // console.log(temp)
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 10; j++) {
        if (copy[i] % 10 === j) {
          temp[j].splice(temp.length, 0, arr[i])
        }
      }
    }
    // console.log(k, temp)
    let shiftArr = []
    for (let i = 0; i < temp.length; i++) {
      while (temp[i].length > 0) {
        shiftArr.push(temp[i].shift())
      }
    }
    arr = shiftArr

    for (let i = 0; i < shiftArr.length; i++) {
      copy[i] = Math.floor(shiftArr[i] / 10 ** k)
    }
    // console.log(k, shiftArr)
    // console.log(arr)
  }
  return arr
}
radix([3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127])
// radix([3221, 1, 10, 9680, 577, 9420, 7, 5622])



