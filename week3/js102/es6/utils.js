// function add(a, b) {
//   return a + b
// }

// module.exports = add

// ES6
// export function add(a, b) {
//   return a + b
// }
// export const PI = 3.14

//
// function add(a, b) {
//   return a + b
// }
// const PI = 3.14

// export {
//   add,
//   PI
// }

//
function add(a, b) {
  return a + b
}
const PI = 3.14

export {
  add as addFunction, // change export alias
  PI
}

// export default function add(a, b) {
//   return a + b
// }
// export const PI = 3.14
// note: use 'export default' => import add from './utils'
