// return value
function add1(a, b) {
  return a + b
}
console.log(add1(1, 2)) // 3

// callback case1
function add2(a, b) {
  console.log(a + b)
}
add2(1, 2) // 3

// callback case2
function add3(a, b) {
  return a + b
}
add3(1, 2) // nothing happened, function just be done and return value, but there is nothing to catch the value

// put function into variable and declare
var add4 = function (a, b) { // anonymous function
  return a + b
}


// take function like variable to put another function into itself
// it can be anonymous function or not
var hello = function () { // anonymous function
  console.log('hellow, wrold!')
}

function exec(fn) {
  fn()
}

exec(hello) // hellow, wrold!

// it also can put function straightly
exec(function () { // anonymous function
  console.log(123)
})


// note: function and anonymous function difference's is readability when we debug