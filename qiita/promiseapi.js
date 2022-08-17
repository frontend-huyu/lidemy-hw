// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//   3,
//   new Promise((resolve, reject) => resolve(4)),
// ]).then(result => {
//   console.log(result)
// })

// 3

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(result => {
//   console.log(result)
// }); // 1

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// Promise.all(urls.map(url => fetch(url)))
//   // 各レスポンスに対し、そのステータスを表示
//   .then(responses => { // (*)
//     for (let response of responses) {
//       alert(`${response.url}: ${response.status}`);
//     }
//   });


// function loadScript(src, callback) {
//   let script = document.createElement('script')
//   script.src = src

//   script.onload = () => callback(null, script)
//   script.onerror = () => callback(new Error(`Script load error for ${src}`))

//   document.head.append(script)
// }

// let loadScriptPromise = function (src) {
//   return new Promise(resolve, reject => {
//     loadScriptPromise(src, (err, script) => {
//       if (err) reject(err)
//       else resolve(script)
//     })
//   })
// }


// function test() {
//   console.log('test')
// }

// function promisify(f) {
//   return function (...args) {
//     return new Promise(resolve, reject => {
//       console.log(this)
//       function callback(err, result) {
//         if (err) {
//           return reject(err)
//         } else {
//           resolve(result)
//         }
//       }

//       args.push(callback)

//       f.call(this, ...args)

//     })
//   }
// }


function loadScript(src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(null, script)
  script.onerror = () => callback(new Error(`Script load error: ${src}`))

  document.head.append(script)
}

// function loadScript(src) {
//   return new Promise(resolve, reject => {
//     let script = document.createElement('script')
//     script.src = src

//     script.onload = () => resolve(script)
//     script.onerror = () => reject(new Error(`Script load error: ${src}`))

//     document.head.append(script)
//   })
// }

// let promise = loadScript('http://....')
// promise.then(
//   script => console.log(`${script.src} is loaded`),
//   error => console.log(`Error: ${error.message}`)
// )

// let loadScriptPromise = function (src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) {
//         return reject(err)
//       } else {
//         resolve(script)
//       }
//     })
//   })
// }

function promisify(f) {
  // at last, return the wrapped Promise to outside
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          return reject(err)
        } else {
          resolve(result)
        }
      }

      // push the promisifying callback function to the end of args
      args.push(callback)

      // call the original function, set this promisifying function in it, and spread function in args
      f.call(this, ...args)
    })
  }
}


