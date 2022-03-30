// BMI = weight / height(m)^2

// solution 1
let weight = 70
let height = 180 / 100
let bmi = weight / height ** 2
console.log(Math.round(bmi)) // 22

// test
// bmi = 24
// bmi = 27
// bmi = 30
// bmi = 35

// solution 2
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// let weight = getRandom(0, 100)
// let height = getRandom(100, 180) / 100
// const bmi = Math.round(weight / height ** 2)
// console.log(bmi)


if (bmi < 18.5) {
  console.log('underweight')
} else if (bmi < 24) {
  console.log('normal')
} else if (bmi < 27) {
  console.log('overweight')
} else if (bmi < 30) {
  console.log('Mild obesity')
} else if (bmi < 35) {
  console.log('Moderate obesity')
} else {
  console.log('Severe obesity')
}