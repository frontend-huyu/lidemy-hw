const fs = require('fs')
fs.readFile('./input1.txt', 'utf8', (err, data) => {
  // if err occur, return
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
})