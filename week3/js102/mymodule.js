// module.exports
function double(n) {
  return n * 2
}

// module.exports = double
// module.exports = [1, 2, 3]
// module.exports = 123

//===

// var obj = {
//   double: double,
//   triple: function (n) {
//     return n * 3
//   }
// }

// module.exports = obj

// exports

exports.double = double
exports.triple = function (n) {
  return n * 3
}