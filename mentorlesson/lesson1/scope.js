// var a exist function-scoped
function test1() {
  var a = 1
  console.log(a)
}
// console.log(a) // a is not defined
test1() // 1

// var b exist globally-scoped variable
var b = 20

function test2() {
  // var b exist function-scoped
  var b = 2
}
console.log('b:', b) // b: 20

// var c
var c = 30

function test3() {
  var c = 3
  console.log('c:', c)
}

test3() // c: 3
console.log('c:', c) // c: 30


// var d
var d = 10 // 1. var d = 10 declared // 4. find global var d, value covered by d = 1
function test4() {
  d = 1 // 3. put 1 into d but not declared, so find var d upward -> global
  console.log('test4d:', d) // 5. test4d: 1
}

test4() // 2. callback
console.log('d:', d) // 6. d: 1


// var e 
function wrapper1() {
  var e = 1 // 2. var e = 1 declared // 5. find var e ,and value covered with 10
  function wrapperInner1() {
    e = 10 // 4. put 10 into e, but can't find var e
  }
  wrapperInner1() // 3. callback
  console.log('e:', e) // 6. e: 10
}

wrapper1() // 1. callback


// var f
function wrapper2() {
  var f = 1 // 2. var f = 1 declared in wrapper scope
  console.log('wrapper_f:', f) // 3. wrapper_f: 1
  function wrapperInner2() {
    var f = 50 // 6. var f = 50 declared in wrapperInner() scope
    f = 10 // 7. var f = 10
    console.log('inner_f:', f) // 8. inner_f: 10
  }
  console.log('belowInner_f:', f) // 4. belowInner_f: 1
  wrapperInner2() // 5. callback
  console.log('afterInnerCallback_f:', f) // 9. afterInnerCallback_f: 1
}

wrapper2() // 1. callback
// wrapper_f: 1
// belowInner_f: 1
// inner_f: 10
// afterInnerCallback_f: 1


// other case: if we don't declare, it would be global variable
g = 30 // global variable
h = 30 // global variable
function test5() {
  console.log(g, h) // 3. 30, 30
  g = 1 // value covered
  h = 2 // value covered
  console.log(g, h) // 4. 1, 2
}
console.log(g, h) // 1. 30, 30
test5() // 2. callback
console.log(g, h) // 5. 1, 2
// 30 30
// 30 30
// 1 2
// 1 2

// in order to avoid confusion, never forget to declare