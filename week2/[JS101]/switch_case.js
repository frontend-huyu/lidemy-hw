// x~y random number
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let month = getRandom(1, 12)

// if (month === 1) {
//   console.log('January')
// } else if (month === 2) {
//   console.log('February')
// } else if (month === 3) {
//   console.log('March')
// } else {
//   console.log(month)
// }

// month = ''
// month = 0
// month = false

switch (month) {
  case 1:
    console.log('January')
    break
  case 2:
    console.log('February')
    break
  case 3:
    console.log('March')
    break
  case 4:
    console.log('April')
    break
  case 5:
    console.log('May')
    break
  case '':
    console.log('nothing')
    break
  case 0:
    console.log('0')
    break
  case false:
    console.log('false')
    break
  default:
    console.log(month)
}

const months = ['January', 'February', 'March', 'April', 'May']
console.log(months[month - 1])