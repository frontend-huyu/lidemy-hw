// module
var os = require('os')

console.log(os.platform()) // win32

// module.exports
// var myModule = require('./mymodule.js')
// var myModule = require('./mymodule')

// console.log(myModule) // [Function: double]
// console.log(myModule(3)) // 6

//===

// var myModule = require('./mymodule')
// console.log(myModule.double(2), myModule.triple(10)) // 4 30

/*
obj = {
  double: double,
  triple: function (n) {
    return n * 3
  }
}
myModule = obj
*/

// exports
var myModule = require('./mymodule')
console.log(myModule) // { double: [Function: double] }
// { double: [Function: double], triple: [Function(anonymous)] }
console.log(myModule.double(5), myModule.triple(3)) // 10 9

/*
exports = {
  double: double,
  triple: function (n) {
  return n * 3
  }
}
*/

// note: difference between module.exports and exports:
// 'module.exports' export anything, like number, array, object, etc.
// 'exports' export anything wrapped by {}