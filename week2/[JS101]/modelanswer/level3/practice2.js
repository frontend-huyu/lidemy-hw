function flatten(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var flatArr = flatten(arr[i])
      flatArr.forEach(function (value) {
        result.push(value)
      })
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten([1, 2, [1, 2], [1, 3], 6]))
console.log(flatten([1, [2, [3, [4]], 5], 6]))