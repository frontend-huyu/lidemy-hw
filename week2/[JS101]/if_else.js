let number = 10

if (number % 5 === 0) { // 0 === 0 => true
  console.log('it is multiple of 5')
} else {
  console.log('it is not')
}
// it is multiple of 5

//
if ((number % 5) === 0) { // 0 === 0 => true
  console.log('it is multiple of 5')
  console.log('it is multiple of 5')
} else {
  console.log('it is not')
}
// it is multiple of 5

if (!(number % 5)) { // !0 => true, 0 is falsy value
  console.log('it is multiple of 5')
} else {
  console.log('it is not')
}
// it is multiple of 5