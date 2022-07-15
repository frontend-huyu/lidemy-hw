let obj = {
  a: 1,
  b: 'abc'
}

let obj1 = obj
let obj2 = obj

delete obj.a
delete obj2.b
obj1.c = 5
obj2.d = 'efg'

console.log(obj1) // { c: 5, d: 'efg' }
console.log(obj2) // { c: 5, d: 'efg' }
console.log(obj) // { c: 5, d: 'efg' }

obj = {
  f: function () { }
}

console.log(obj1) // { c: 5, d: 'efg' }
console.log(obj2) // { c: 5, d: 'efg' }
console.log(obj) // { f: [Function: f] }

obj2 = obj
console.log(obj2) // { f: [Function: f] }