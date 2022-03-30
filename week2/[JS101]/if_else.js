let number = 10

if (number & 5 === 0) { // it just execute number & 5 -> 0 -> false
  console.log('it is multiple of 5')
} else {
  console.log('it is not')
}
// it is not

//
if ((number & 5) === 0) {
  console.log('it is multiple of 5')
} else {
  console.log('it is not')
}
// it is multiple of 5

if (!(number & 5)) {
  console.log('it is multiple of 5')
} else {
  console.log('it is not')
}
// it is multiple of 5