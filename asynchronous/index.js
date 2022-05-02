// // fs.readFileSync(path, options)
// // a Synchronous method

// // include fs module
// const fs = require('fs')

// // call readFileSync() to read input.txt file
// const data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' })

// // display the file data
// console.log(data) // hello, world



// fs.readFileSync(path, options) // a Synchronous method
// fs.readFile(filename, encoding, callback_function) // a Asynchronous method

// include fs module
const fs = require('fs')

// call readFile() to read input1.txt file
fs.readFile('./input1.txt', 'utf8', function (err, data) {
  // display input1
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// call readFileSync() to read input2.txt file
const data = fs.readFileSync('./input2.txt', { encoding: 'utf8', flag: 'r' })

// display input2
console.log(data)

// hello, world(input2.txt file)
// hello, world(input1.txt file)
