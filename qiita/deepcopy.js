// function copyObject(obj) {
//   let copy = {}
//   for (let i in obj) {
//     copy[i] = obj[i]
//   }

//   return copy
// }

function copyObject(obj) {
  let copy = {}
  const keys = Object.keys(obj)
  const objLength = keys.length


  for (let i = 0; i < objLength; i++) {
    if (Array.isArray(obj[keys[i]])) {

      copy[keys[i]] = [...obj[keys[i]]]

    } else if (typeof obj[keys[i]] === 'function') {

      copy[keys[i]] = new obj[keys[i]]

    } else if (typeof obj[keys[i]] === 'object' && obj[keys[i]] !== 'null') {

      copy[keys[i]] = copyObject(obj[keys[i]])

    } else {

      copy[keys[i]] = obj[keys[i]]

    }
  }
  return copy
}

const add = function (a, b, c) {
  this.a = a
  this.b = b
  this.c = c
  this.total = function () {
    return this.a + this.b + this.c
  }
}

const greet = function (something) {
  this.name = something

  this.greeting = function () {
    this.a = '123'
    return `Hello ${this.name}`
  }
}

const obj = {
  a: 1,
  b: '2',
  c: [0, 1, 2],
  add: add,
  innerMethod: {
    greet: greet,
    g: [3, 4, 5]
  }
}

const copies = copyObject(obj)
// console.log(copies)
// {
//   a: 1,
//   b: '2',
//   c: [ 0, 1, 2 ],
//   add: add {
//     a: undefined,
//     b: undefined,
//     c: undefined,
//     total: [Function (anonymous)]
//   },
//   innerMethod: {
//     greet: greet {
//       name: undefined,
//       greeting: [Function (anonymous)]
//     },
//     g: [ 3, 4, 5 ]
//   }

copies.c.push(3)

// console.log(copies.c) // [ 0, 1, 2, 3 ]
// console.log(obj.c) // [ 0, 1, 2, 3 ]

copies.add.a = 1
copies.add.b = 2
copies.add.c = 3
// console.log(copies.add.total()) // 6
// console.log(copies.add instanceof obj.add) // true
// console.log(copies.add)
// add { a: 1, b: 2, c: 3, total: [Function (anonymous)] }

copies.innerMethod.greet.name = 'Amy'
console.log(copies.innerMethod.greet.greeting()) // Hello Amy
console.log(copies.innerMethod.greet instanceof obj.innerMethod.greet) // true
console.log(copies.innerMethod.greet)
// greet {
//   name: 'Amy',
//   greeting: [Function (anonymous)],
//   a: '123'
// }

// const arr = [0, 1, 2]
// copies.innerMethod.greet.arr = arr
// console.log(copies.innerMethod.greet)
// greet {
//   name: undefined,
//   greeting: [Function (anonymous)],
//   arr: [ 0, 1, 2 ]
// }


// console.log(copies.innerMethod.greet.greeting()) // Hello undefined
// note: 'copies.innerMethod.greet' is an object


const newGreeting = new copies.innerMethod.greet.greeting()

console.log(newGreeting instanceof copies.innerMethod.greet.greeting) // true
console.log(newGreeting) // { a: '123' }
console.log(newGreeting.a) // 123

// copies.innerMethod.greet.greeting = function () {
//   this.a = '456'
//   return `Hello ${this.name}`
// }

// console.log(copies.innerMethod.greet.greeting) // [Function (anonymous)]

// const newGreeting = new copies.innerMethod.greet.greeting()

// console.log(newGreeting instanceof copies.innerMethod.greet.greeting) // true
// console.log(newGreeting) // { a: '456' }
// console.log(newGreeting.a) // 456

// console.log(obj)
// {
//   a: 1,
//   b: '2',
//   c: [ 0, 1, 2 ],
//   add: [Function: add],
//   innerMethod: { greet: [Function: greet], g: [ 3, 4, 5 ] }
// }

// Update 9.30.22
const shallowClone = (obj) => {
  const type = Object.prototype.toString
  if (type.call(obj).includes('Array')) {
    return [...obj]
  }
  return Object.assign({}, obj);
};

function deepClone(obj) {
  const newObj = shallowClone(obj);

  Object.keys(newObj)
    .filter((key) => typeof newObj[key] === 'object')
    .forEach((key) => {
      newObj[key] = deepClone(newObj[key])
    });
  return newObj;
}

const obj = {
  level: 1,
  nest: {
    level: 2,
    arr: ['a', 'b', 'c'],
    myMethod() {
      console.log('my method')
    }
  }
};
const cloneObj = deepClone(obj);
console.log(cloneObj);
// {
//   level: 1,
//   nest: { level: 2, arr: [ 'a', 'b', 'c' ], myMethod: [Function: myMethod] }
// }
console.log(cloneObj.nest === obj.nest); // false