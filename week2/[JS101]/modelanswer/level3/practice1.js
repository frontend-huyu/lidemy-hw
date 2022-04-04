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

function sort(arr) {
  var result = []
  var length = arr.length
  for (var i = 0; i < length; i++) {
    var minIndex = findMin(arr)
    result.push(arr[minIndex])
    arr.splice(minIndex, 1)
  }
  return result
}
console.log(sort([6, 8, 3, 2]))

sort([6, 8, 3, 2])
sort([1, 2, 7, 5])