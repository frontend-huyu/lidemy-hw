function isValid(arr) {
  // loop1: if arr[0], arr[1]... is <= 0, then return 'invalid'
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }

  // loop2: if arr[n] wasn't equal to arr[(n-1)] + arr[(n-1)], return 'invalid', otherwise return 'valid'
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])