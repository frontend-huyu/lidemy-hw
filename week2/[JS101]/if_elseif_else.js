/*
  age >= 65, old man
  65 > age >= 20, young
  age < 20, children
*/

// case 
let age = Math.floor((Math.random() * 100)) + 1
console.log(age)

// age = 0 // or '' or false -> console.log('children')

if (age >= 65) {
  console.log('old man')
} else if (age >= 20) {
  console.log('young')
} else {
  console.log('children')
}


age = 0 // or '' or false // 0, '0', '' is falsy value

// solution 1
if (age >= 65) {
  console.log('old man')
} else if (age >= 20) {
  console.log('young')
} else if (age > 0) {
  console.log('children')
} else {
  console.log('it does not exist...')
}

// solution 2
if (age >= 65) {
  console.log('old man')
} else if (65 > age && age >= 20) {
  console.log('young')
} else if (age < 20 && age > 0) {
  console.log('children')
} else {
  console.log('it does not exist...')
}