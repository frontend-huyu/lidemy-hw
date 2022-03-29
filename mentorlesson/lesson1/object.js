// object
// key-value pair
var obj = {
  name: 'Peter',
  address: 'America',
  phone: '0123456789',
  family: {
    father: {
      name: 'Mick'
    },
    mother: {
      name: 'Mary'
    }
  }
}

console.log(obj)
console.log(obj.name)
console.log(obj.family.father.name)
console.log(obj.family.mother['name'])

// object can include anything like String, Number, Boolean, Array, Object, Function.

var mentor_program = {
  teacher: 'huli',
  week: 16,
  male: true,
  female: false,
  lesson: [1, 2, 3, 4],
  resources: {
    personGithub: 'https://github.com/aszx87410',
    lessonGithub: 'https://github.com/Lidemy'
  },
  add: function () {
    return 123;
  }
}

console.log(mentor_program.teacher)
console.log(mentor_program['week']) // mentor_program.week
console.log(mentor_program.male === true)
console.log(mentor_program.female === true)
console.log(mentor_program.lesson[0])
console.log(mentor_program.resources)
console.log(mentor_program.resources.lessonGithub)
console.log(mentor_program.add()) 