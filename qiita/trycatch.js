// function func() {

//   try {
//     return 1;

//   } catch (e) {
//     /* ... */
//   } finally {
//     console.log('finally');
//   }
// }

// console.log(func())
// // finally
// // 1

// try {
//   setTimeout(function () {
//     console.log('123'); // スクリプトはここで死にます
//   }, 1000);
// } catch (e) {
//   console.log("won't work")
// }

// try {
//   lalala; // エラー, 変数が宣言されていません!
// } catch (err) {
//   console.log(err.name); // ReferenceError
//   console.log(err.message); // lalala is not defined
//   console.log(err.stack); // ReferenceError: lalala is not defined at (...スタック呼び出し)

//   // 全体としてエラーを表示する事もできます
//   // エラーは "name: message" として文字列に変換されます
//   console.log(err); // ReferenceError: lalala is not defined
// }

// let json = "{ bad json }";

// try {

//   let user = JSON.parse(json); // <-- エラーが起きたとき...
//   console.log(user.name); // 動作しません

// } catch (e) {
//   // ...実行はここに飛びます
//   console.log("Our apologies, the data has errors, we'll try to request it one more time.");
//   console.log(e.name);
//   console.log(e.message);
// }


// let json = '{"age": 30}'

// try {
//   let user = JSON.parse(json)
//   console.log(user.name) // undefined
// } catch (err) {
//   console.log('dose not execute') // skip
// }

// // let json = '{"age": 30}'
// let json = '{"age": 30, "name": ""}'


// try {
//   // a
//   let user = JSON.parse(json)
//   if (!user.name) {
//     throw new SyntaxError('Incomplete data: no name')
//   }
//   console.log(user.name)
// } catch (err) {
//   if (err instanceof SyntaxError && err.message.indexOf('no name')) {
//     console.log(`JSON Error: ${err.message}`)
//   } else {
//     console.log(`${err.name}: ${err.message}`)
//   }
// }

// // ReferenceError: a is not defined
// // JSON Error: Incomplete data: no name



// function readJsonData() {
//   let json = '{"age": 30, "name": "Mick"}'

//   try {
//     let user = JSON.parse(json)
//     if (!user.name) {
//       throw new SyntaxError('Incomplete data: no name')
//     }
//     // if user.name error occurred, it will jump to catch, and never execute b()
//     b()
//   } catch (err) {
//     if (err.name === 'SyntaxError' && err.message.indexOf('no name')) {
//       console.log(`JSON Error: ${err.message}`)
//     } else {
//       throw err
//     }
//   }
// }

// it is a double-check
// try {
//   readJsonData()
// } catch (err) {
//   console.log(`External catch: ${err}`)
// }

// External catch: ReferenceError: b is not defined


// ues devTool
// prompt(message, default)
// let num = +prompt('Enter a positive integer number?', 35)

// let diff, result

// function fib(n) {
//   // if n is negative or not an integer
//   if (n < 0 || Math.trunc(n) !== n) {
//     throw new Error('Must not be negative, or an integer')
//   }
//   // if n <= 1 is true, return itself, or fib() recursion
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }

// let start = Date.now()

// try {
//   result = fib(num)
// } catch (e) {
//   result = 0
// } finally {
//   diff = Date.now() - start
// }

// console.log(result || 'error occurred')
// console.log(`execute took ${diff / 1000}sec`)

// 35.1
// error occurred
// execute took 0sec

// 35
// 9227465
// execute took 0.138sec


// let json = `{"name": "Mick", "age": 30}`

// class ValidationError extends Error {
//   constructor(message) {
//     // [[HomeObject]] => Error constructor(message)
//     super(message)
//     this.name = 'ValidationError'
//   }
// }

// function test() {
//   throw new ValidationError('Error Occurred!')
// }

// try {
//   test()
// } catch (err) {
//   console.log(err.message)
//   console.log(err.name)
// }

// Error Occurred!
// ValidationError

// Usage
// function readUser(json) {
//   let user = JSON.parse(json)

//   if (!user.age) {
//     throw new ValidationError('No field: age')
//   }
//   if (!user.name) {
//     throw new ValidationError('No field: name')
//   }
//   return user
// }

// try {
//   let user = readUser('{"age": 25}')
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log(`Invalid data: ${err.message}`)
//   } else if (err instanceof SyntaxError) {
//     console.log(`JSON Syntax Error: ${err.message}`)
//   } else {
//     throw err
//   }
// }

// // Invalid data: No field: name


// class ValidationError extends Error {
//   constructor(message) {
//     // [[HomeObject]] => Error constructor(message)
//     super(message)
//     this.name = 'ValidationError'
//   }
// }

// // further extending
// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     // [[HomeObject]] => ValidationError constructor(message) => Error constructor(message)
//     super(`No property: ${property}`)
//     this.name = 'PropertyRequiredError'
//     this.property = property
//   }
// }

// Usage
// function readUser(json) {
//   let user = JSON.parse(json)

//   if (!user.age) {
//     throw new PropertyRequiredError('age')
//   }
//   if (!user.name) {
//     throw new PropertyRequiredError('name')
//   }
// }

// console.log(new PropertyRequiredError instanceof Error) // true
// console.log(new PropertyRequiredError instanceof ValidationError) // true
// console.log(new PropertyRequiredError instanceof PropertyRequiredError) // true

// console.log(Object.getPrototypeOf(ValidationError) === Error) // true
// console.log(Object.getPrototypeOf(PropertyRequiredError) === ValidationError) // true

// console.log(Object.getPrototypeOf(new ValidationError) === ValidationError.prototype) // true
// console.log(Object.getPrototypeOf(new PropertyRequiredError) === PropertyRequiredError.prototype) // true

// try {
//   let user = readUser('{"age": 25}')
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log(`Invalid data: ${err.name}, ${err.message}`)
//   } else if (err instanceof SyntaxError) {
//     console.log(`JSON Syntax Error: ${err.message}`)
//   } else {
//     throw err
//   }
// }

// Invalid data: PropertyRequiredError, No property: name

// if error occurred at the phase of reading data, create the corresponding error message
class ReadError extends Error {
  // [[HomeObject]] => Error constructor(message)
  constructor(message, cause) {
    super(message)
    this.cause = cause
    this.name = 'ReadError'
  }
}

class ValidationError extends Error {
  constructor(message) {
    // [[HomeObject]] => Error constructor(message)
    super(message)
    this.name = 'ValidationError'
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    // [[HomeObject]] => ValidationError constructor(message) => Error constructor(message)
    super(`No property: ${property}`)
    this.name = 'PropertyRequiredError'
    this.property = property
  }
}


// check json data and console the invalid property
function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError('age')
  }
  if (!user.name) {
    throw new PropertyRequiredError('name')
  }
}

// check json data by try...catch
function readUser(json) {
  let user

  // check1: check the err is SyntaxError instance or not
  // 
  try {
    user = JSON.parse(json)
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError('Syntax Error', err)
    } else {
      throw err
    }
  }

  // check2: check the err is ValidationError instance or not
  try {
    validateUser(user)
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError('Validation Error', err)
    } else {
      throw err
    }
  }
}

try {
  readUser('{bad json}')
} catch (err) {
  // catch error throw from readUser()
  if (err instanceof ReadError) {
    console.log(err)
    console.log(`Original error: ${err.cause}`)
  } else {
    throw err
  }
}
// ReadError: Syntax Error
// at readUser ....
// Original error: SyntaxError: Unexpected token b in JSON at position 1
