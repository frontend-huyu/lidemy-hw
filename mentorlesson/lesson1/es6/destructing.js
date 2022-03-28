const obj = {
  score: 60,
  name: 'Peter'
}

// ES5
// const score = obj.score
// const name = obj.name

// console.log(score) // 60


// // ES6 destructing
// const { score, name } = obj

// console.log(score) // 60


// // it just the same way like this
// const {
//   score, // point to key-name "score", key-name can't be changed
//   name, // point to key-name "name"
// } = obj

// console.log(score) // 60


// so we can write like this
const {
  name,
  score
} = obj
console.log(score) // 60