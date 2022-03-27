function add(a, b) {
  return a + b;
}
// module.exports = add

function log(str) {
  console.log(str)
}
// no value return -> undefined

var arr = [1, 2, 3]
var str = '456'
var obj = {
  name: 'Peter',
  address: 'Taiwan',
  phone: '0123456789',
}

module.exports = {
  add: add,
  log: log,
  arr: arr,
  str: str,
  obj: obj,
}
