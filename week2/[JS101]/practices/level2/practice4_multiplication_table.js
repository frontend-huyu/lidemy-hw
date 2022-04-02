function table(n) {
  let result = 0
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < arr.length; i++) {
    result = `${n}*${arr[i]} = ${n * arr[i]}`
    console.log(result)
  }
}

table(1)
table(7)