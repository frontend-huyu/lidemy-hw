// const add = require('./utils.js')

// console.log(add(3, 5)) // 8

// ES6
// import { add, PI } from './utils.js'
// console.log(add(3, 5)) // 8
// console.log(PI) // 3.14

// if we use node.js to run it, it will show SyntaxError
// SyntaxError: Cannot use import statement outside a module

/* solution for node.js:
add
{
  "type": "module"
}
into package.json 
(Solution for the script tag in HTML file, please check the Reference)

Reference: https://stackoverflow.com/questions/58211880/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-import
*/

/* important memo:
you should always use the full file name, like 'utils.js' to import,
otherwise it will still show 'Error [ERR_MODULE_NOT_FOUND]'

Reference: https://stackoverflow.com/questions/61291633/expressjs-is-return-error-err-module-not-found-if-i-import-the-file-without-j
*/



// import { addFunction, PI } from './utils.js'
// console.log(addFunction(3, 5)) // 8
// console.log(PI) // 3.14

// import { addFunction as a, PI } from './utils.js' // change import alias
// console.log(a(3, 5)) // 8
// console.log(PI) // 3.14

import * as utils from './utils.js' // * usa usually means anything
console.log(utils.addFunction(3, 5)) // 8
console.log(utils.PI) // 3.14

// import add, { PI } from './utils.js'
// console.log(add(3, 5)) // 8
// console.log(PI) // 3.14

