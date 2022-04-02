const arrMultiplicand = [1, 2, 3, 4, 5, 6, 7, 8, 9] // 不変の
const arrMultiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9] // 可変の

function table9to9(arr1, arr2) {
  let result = 0
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result = `${arr1[i]}*${arr2[j]} = ${arr1[i] * arr2[j]}`
      console.log(result)
    }
  }
}

table9to9(arrMultiplicand, arrMultiplier)