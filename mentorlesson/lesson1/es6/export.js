// // ES5 export
// // example1: module.exports = ... -> const ... = require('./...')
// const add = (a, b) => {
//   return a + b
// }

// module.exports = add

// // example2: module.exports = ...
// function add1(a, b) {
//   return a + b;
// }

// function log1(str) {
//   console.log(str)
// }

// module.exports = {
//   add1: add1,
//   log1: log1
// }


// // ES6 export
// // node.js user ensure you have been install babel js first...

// // example1: export default add -> import ... from './...'
// const add2 = (a, b) => {
//   return a + b
// }

// export default add2


// // export two or more functions
// // example2: export const ...
// example2-1: import {..., ...} from './...'
// example2-2: import * as name from "module-name"
// export const add3 = (a, b) => {
//   return a + b
// }

// export const log3 = function (str) {
//   console.log(str)
// }