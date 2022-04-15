function join(arr, str) {
  let result = ''
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i] + str
  }
  return result += arr[arr.length - 1]
}

console.log(join([1, 2, 3], ''))
console.log(join(["a", "b", "c"], "!"))
console.log(join(["a", 1, "b", 2, "c", 3], ','))