function findMin(arr) {
  var min = arr[0]
  var minIndex = 0
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
      minIndex = i
    }
  }
  return minIndex
}

function findNthMin(arr, nth) {
  for (var i = 1; i <= nth - 1; i++) {
    var minIndex = findMin(arr)
    // arr.splice(minIndex, 1) // it will change original array
    arr = arr.filter(function (item, index) {
      return index !== minIndex
    })
  }
  var realMinIndex = findMin(arr)
  return arr[realMinIndex]
}

console.log(findNthMin([1, 3, 5, 7, 9], 3))

findNthMin([1, 2, 3, 4, 5], 1) // 1
findNthMin([1, 3, 5, 7, 9], 3) // 5
findNthMin([1, 1, 1, 1, 1], 2) // 1

// note: splice(arr[i], delete items)
// var arr = [1, 2, 3]
// arr.splice(0, 1) //
// console.log(arr) // [ 2, 3 ]

