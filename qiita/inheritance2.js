const Person = {
  nation: 'Japan'
}

const Occupation = {
  career: 'Business Man'
}


// object()
// function object(obj) {
//   function F() { }
//   F.prototype = obj
//   return new F()
// }

// const Taro = object(Person)
// console.log(Taro) // {}

// Taro.career = Occupation.career

// console.log(Taro.nation) // Japan
// console.log(Taro.career) // Business Man

// console.log(Taro.hasOwnProperty('nation')) // false // inherited from Person
// console.log(Taro.hasOwnProperty('career')) // true
// console.log(Taro.__proto__) // { nation: 'Japan' }


// shallow copy
// function extendCopy(obj) {
//   let copy = {}

//   for (let item in obj) {
//     copy[item] = obj[item]
//   }

//   copy.uber = obj
//   return copy
// }

// const Taro = extendCopy(Person)
// console.log(Taro)
// // { nation: 'Japan', uber: { nation: 'Japan' } }

// Taro.career = Occupation.career

// console.log(Taro.nation) // Japan
// console.log(Taro.career) // Business Man
// console.log(Taro.uber) // { nation: 'Japan' }

// Person.birthPlaces = ['Tokyo', 'Osaka', 'Hokaidou']

// const Jiro = extendCopy(Person)
// Jiro.career = Occupation.career

// console.log(Jiro.nation) // Japan
// console.log(Jiro.career) // Business Man
// console.log(Jiro.birthPlaces)
// // [ 'Tokyo', 'Osaka', 'Hokaidou' ]
// console.log(Jiro.uber)
// // { nation: 'Japan', birthPlaces: [ 'Tokyo', 'Osaka', 'Hokaidou' ] }

// Jiro.birthPlaces.push('Fukuoka')
// console.log(Jiro.birthPlaces)
// // [ 'Tokyo', 'Osaka', 'Hokaidou', 'Fukuoka' ]
// console.log(Person.birthPlaces)
// // [ 'Tokyo', 'Osaka', 'Hokaidou', 'Fukuoka' ]

// console.log(Taro.birthPlaces) // undefined

// note: JQuery


// deep copy
function deepCopy(obj, copy) {
  let copies = copy || {}

  for (let item in obj) {
    if (typeof obj[item] === 'object') {
      copies[item] = (obj[item].constructor === Array) ? [] : {}

      deepCopy(obj[item], copies[item])
    } else {
      copies[item] = obj[item]
    }
  }
  return copies
}

Person.birthPlaces = ['Tokyo', 'Osaka', 'Hokaidou']

const Taro = deepCopy(Person)
Taro.career = Occupation.career

console.log(Taro.nation) // Japan
console.log(Taro.career) // Business Man
console.log(Taro.birthPlaces)
// [ 'Tokyo', 'Osaka', 'Hokaidou' ]

Taro.birthPlaces.push('Fukuoka')

console.log(Taro.birthPlaces)
// [ 'Tokyo', 'Osaka', 'Hokaidou', 'Fukuoka' ]
console.log(Person.birthPlaces)
// [ 'Tokyo', 'Osaka', 'Hokaidou' ]

Person.birthPlaces.push(['A', 'B', 'C'])
console.log(Person.birthPlaces)
// [ 'Tokyo', 'Osaka', 'Hokaidou', [ 'A', 'B', 'C' ] ]

Person.birthPlaces.push({
  E: 1,
  F: 2,
  G: 3,
})
console.log(Person.birthPlaces)
// [
//   'Tokyo',
//   'Osaka',
//   'Hokaidou',
//   ['A', 'B', 'C'],
//   { E: 1, F: 2, G: 3 }
// ]
console.log(Person)
// {
//   nation: 'Japan',
//     birthPlaces: [
//       'Tokyo',
//       'Osaka',
//       'Hokaidou',
//       ['A', 'B', 'C'],
//       { E: 1, F: 2, G: 3 }
//     ]
// }
console.log(Taro.birthPlaces)
// [ 'Tokyo', 'Osaka', 'Hokaidou', 'Fukuoka' ]

console.log(Person.birthPlaces[4].E) // 1
// // note: JQuery