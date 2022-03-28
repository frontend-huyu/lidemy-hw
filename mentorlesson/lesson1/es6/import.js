// // ES5 require
// // example1: const ... = require('./...')
// const add = require('./export')
// console.log(add(1, 2))


// // example2:
// const obj = require('./export')
// obj.log1(123) // 123



// babel js APIs
// it is unsupported for fsevents(windows)
// require("@babel/core").transform("code", {
//   presets: ["@babel/preset-env"],
// });

// // ES6 import
// // example1: import ... from './...'
// import add2 from './export'
// console.log(add2(1, 2))


// // import two or more functions
// // example2-1: import {..., ...} from './...'
// import { add3, log3 } from './export'

// console.log(add3(1, 2))


// // example2-2: import * as name from "module-name"
// import * as myExport from './export'

// console.log(myExport.add3(1, 2))


// import&export about ES6 wasn't tested