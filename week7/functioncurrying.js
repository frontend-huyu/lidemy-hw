// function currying
const curry = (fn) => {
  return curried = (...args) => {
    if (fn.length !== args.length) {
      console.log(fn.length, args.length)
      console.log(args)
      return curried.bind(null, ...args)
    }
    console.log(fn.length, args.length)
    console.log(args)
    return fn(...args)
  }
}

const totalNum = (x, y, z) => {
  return x + y + z
}

const multipleNum = (a, b, c) => {
  return a * b * c
}

const curriedTotal = curry(totalNum)
console.log(curriedTotal(10, 20, 30))
console.log(curriedTotal(10)(20))
console.log(curriedTotal(10)(20)(30))
// const curriedMultiple = curry(multipleNum)
// console.log(curriedMultiple(10))

const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}
console.log(addCurry(2)(3)(5))

const multipleCurry = (fn) => {
  return curried = (...args) => {
    if (fn.length !== args.length) {
      // console.log(fn.length, args.length)
      // console.log(args)
      return curried.bind(null, ...args)
    }
    // console.log(fn.length, args.length)
    // console.log(...args)
    return fn(...args)
  }
}

const curriedMultiple = multipleCurry(multipleNum)
console.log(curriedMultiple(1, 2, 3))
// console.log(curriedMultiple(1)(2))
console.log(curriedMultiple(1)(2)(3))