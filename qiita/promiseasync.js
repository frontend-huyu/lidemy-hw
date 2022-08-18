
// async function f() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000)
//   });

//   let result = await promise;

//   console.log(result);
// }

// f();


// function test() {
//   return '123'
// }
// test().then(result => {
//   console.log(result)
// })
// TypeError: test(...).then is not a function

// function test() {
//   return Promise.resolve('123')
// }
// test().then(result => {
//   console.log(result)
// })
// 123


// async function fn() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000)
//   })

//   let result = await promise

//   console.log('before result')
//   console.log(result)
//   console.log('after result')
// }

// fn()
// console.log('after fn')


// after fn

// before result
// done!
// after result

// async function test() {
//   let promise = await new Promise((resolve, reject) => {
//     setTimeout(() => resolve('123'), 3000)
//   })

//   // promise.then((result) => {
//   //   console.log(result)
//   // })
//   Promise.resolve(promise)
//     .then((result) => {
//       console.log(result)
//     })

//   return promise
// }

// console.log(test())

// UnhandledPromiseRejectionWarning: TypeError: promise.then is not a function

// async function fn() {
//   try {
//     let response = await Promise.reject(new Error('Whoops!'))
//     // throw new Error("Whoops!")
//   } catch (err) {
//     console.log(err.message)
//   }
// }


async function test() {
  let promise = await new Promise((resolve, reject) => {
    setTimeout(() => resolve('123'), 3000)
  })
  return promise
}

test()
  .then(result => console.log(result)) // 123

console.log(test().toString()) // [object Promise]
console.log(test() instanceof Promise) //true


class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`)
    this.name = 'HttpError'
    this.response = response
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new HttpError(response)
      }
    })
}

// function demoGithubUser() {
//   let name = prompt('Enter a name?', 'iliakan')
//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Full name: ${user.name}`)
//       return user
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status === 404) {
//         alert('No such user, please reenter')
//       } else {
//         throw err
//       }
//     })
// }

// async function demoGithubUser() {
//   let user
//   while (true) {
//     let name = prompt('Enter a name?', 'iliakan')

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`)
//       break
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status === 404) {
//         alert(`No such user, please reenter`)
//       } else {
//         throw err
//       }
//     }
//   }

//   alert(`Full name: ${user.name}`)
//   return user
// }

// demoGithubUser()