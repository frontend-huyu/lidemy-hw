const students = []

const peter = {
  name: 'Peter',
  score: [80, 75, 90],
  address: 'Tokyo',
  phone: '010101110',
  family: {
    father: 'Mick',
    mather: 'Mary'
  }
}
console.log(typeof peter) // object
console.log(peter.name) // Peter
console.log(peter['name']) // Peter

students.push(peter)
console.log(students.length) // 1
console.log(students[0].name) // Peter
console.log(students[0]['name']) // Peter

const key = 'family'
console.log(students[0][key])
// { father: 'Mick', mather: 'Mary' }
console.log(peter.family.mather) // Mary
console.log(students[0]['family']['father']) // Mick


console.log(peter.score[0]) // 80
console.log(students[0].score[1]) // 75