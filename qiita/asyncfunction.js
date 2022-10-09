// const fs = require('fs');
// note: require() is synchronous

// const readFile = function (fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (error, data) => {
//       if (error) return reject(error);
//       resolve(data);
//     });
//   });
// };

// generator function
// const gen = function* () {
//   const f1 = yield readFile('/directory/file1');
//   const f2 = yield readFile('/directory/file2');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };
// // note: generator's pointer always comes one after another,
// // so it works synchronously

// async function
// const asyncReadFile = async function () {
//   const f1 = await readFile('/directory/file1');
//   const f2 = await readFile('/directory/file2');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };

// // co module simplifies generator without calling next(),
// // and it returns Promise object which can use callback in Promise chain
// let co = require('co');
// co(gen).then(function () {
//   console.log('Generator is completed')
// });

// // internal implementation
// const fs = require('fs');

// const readFile = function (fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (error, data) => {
//       if (error) return reject(error);
//       resolve(data);
//     });
//   });
// };

// const gen = function* () {
//   const f1 = yield readFile('/directory/file1');
//   const f2 = yield readFile('/directory/file2');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };
// // note: yield is a two-way syntax

// // manually run
// let g = gen();
// // value was Promise object
// // first, get file1 and put value into callback
// g.next().value.then(function (data) {
//   // second, send file1 back to f1, then get file2 and put into callback
//   g.next(data).value.then(function (data) {
//     // finally, send file2 back to f2
//     g.next(data);
//   });
// });

// // automatically run
// function run(gen) {
//   const g = gen();

//   function next(data) {
//     // for the first time we call next(), there doesn't have "data", that means we runs "g.next()"
//     let result = g.next(data);
//     // if all the file loading were done, it returned value back finally,
//     if (result.done) return result.value;
//     // if not, we use Promise chain to send value back and  call next() again until all the files were done
//     result.value.then(function (data) {
//       next(data);
//     });
//   }
//   next();
// }
// // note: we can use next() to point to where yield is,
// // and send value back to yield by next() at the same time
// run(gen);

// // co module
// function co(gen) {
//   let contextOfCo = this;
//   return new Promise((resolve, reject) => {
//     // check gen if generator(function)
//     // if it is, change generator's context with co function
//     if (typeof gen === 'function') gen = gen.call(contextOfCo);

//     // avoiding gen is null/undefined or it didn't have next function(not generator), return and suspend
//     if (!gen || typeof gen.next !== 'function') return resolve(gen);

//     onFulfilled();
//     function onFulfilled(resolve) {
//       let result;
//       // let generator run automatically
//       try {
//         result = gen.next(resolve);
//       } catch (e) {
//         return reject(e);
//       }
//       next(result);
//     }
//   });
// }

// function next(result) {
//   // first: check generator state
//   if (result.done) return resolve(result.value);
//   // second: ensure return value is Promise object
//   // toPromise - RxJS
//   let value = toPromise.call(contextOfCo, result.value);
//   // third: if value is Promise object, use Promise chain to call onFulfilled function again
//   // isPromise() - npm
//   if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
//   // forth: if value is not a function, Promise, generator, array, or object
//   return onRejected(
//     new TypeError(
//       'You may only yield a function, promise, generator, array, or object, '
//       + 'but the following object was passed: "'
//       + String(result.value)
//       + '"'
//     )
//   );
// }

// // usage
// // let actions execute asynchronously
// // when all of them are completed, it will continue to next step
// // array
// co(function* () {
//   let resolve = yield [
//     Promise.resolve(1),
//     Promise.resolve(2)
//   ];
//   console.log(resolve);
// }).catch(onerror);
// // object
// co(function* () {
//   let resolve = yield {
//     1: Promise.resolve(1),
//     2: Promise.resolve(2)
//   };
//   console.log(resolve);
// }).catch(onerror);

// co(function* () {
//   let values = [n1, n2, n3];
//   yield values.map(somethingAsync);
// });

// function* somethingAsync(x) {
//   // do something async
//   return y
// }
// // note: the argument in map() works simultaneously



// generator basic
// function* gen() {
//   let a = yield 1;
//   let b = yield a + 2;
//   yield b + 3;
// }

// let iterator = gen();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next(4)); // { value: 6, done: false }
// console.log(iterator.next()); // { value: NaN, done: false }

// function* gen() {
//   try {
//     let a = yield 1;
//     let b = yield a + 2;
//     yield b + 3;
//   } catch (e) {
//     console.log(e); // test error
//   }
// }
// let iterator = gen();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.throw('test error')); // { value: undefined, done: true }
// console.log(iterator.return('123'));

// callback ⇒ generator
// // callback hell
// const request = require('request');
// const url = 'https://www.google.com';

// request(url, function (error, response) {
//   if (!error && response.statusCode === 200) {
//     console.log('got it 1');
//     request(url, function (error, response) {
//       if (!error && response.statusCode === 200) {
//         console.log('got it 2');
//         request(url, function (error, response) {
//           if (!error && response.statusCode === 200) {
//             console.log('got it 3');
//           }
//         })
//       }
//     })
//   }
// });


// // improve callback hell => generator
// const request = require('request');

// function* requestGen() {
//   function sendRequest(url) {
//     request(url, function (error, response) {
//       if (!error && response.statusCode === 200) {
//         console.log(response.body);

//         iterator.next(response.body); // always for the next time
//       }
//     })
//   }
//   const url = 'https://www.google.com';

//   const r1 = yield sendRequest(url);
//   console.log('r1', r1);
//   const r2 = yield sendRequest(url);
//   console.log('r2', r2);
//   const r3 = yield sendRequest(url);
//   console.log('r3', r3);
// }

// const iterator = requestGen();
// iterator.next(); // for the first time
// // note: tight coupling and low reusability

// // callback vs. Promise
// function demo(str, callback) {
//   console.log(str);
//   callback();
// }
// demo('I am str', () => {
//   console.log('I am callback');
// });
// // I am str
// // I am callback

// // Promise
// function PromiseDemo() {
//   return new Promise((resolve, reject) => {
//     console.log('number in Promise')
//     resolve('I am Promise');
//   })
// }

// PromiseDemo().then((result) => {
//   console.log(result);
// });
// console.log('1');
// PromiseDemo().then((result) => {
//   console.log(result);
// });
// console.log('2');
// // number in Promise
// // 1
// // number in Promise
// // 2
// // I am Promise
// // I am Promise

// //
// // improve generator tight coupling problem => thunk function
// function Thunk(fn) { // fn => request
//   return function (...args) {
//     return function (callback) {
//       // fn.call => request.call(), args => url
//       // callback => (first time)request's callback => (second time)custom next()
//       return fn.call(this, ...args, callback);
//     }
//   }
// }

// function run(fn) {
//   let gen = fn(); // run generator

//   // custom next method === request's callback, data => response
//   function next(error, data) {
//     // in the first time, result => gen.next()
//     // when we call gen.next second time forward, data => request's response
//     let result = gen.next(data);

//     if (result.done) return;

//     // result.value => return function(callback) { return request.call(this, url, callback) }
//     // result.value(callback) => custom next()
//     result.value(next);
//   }

//   next();
// }

// const request = require('request');
// const requestThunk = Thunk(request);

// // generator
// function* requestGen() {
//   const url = 'https://www.google.com';
//   let r1 = yield requestThunk(url);
//   console.log(r1.body);
//   let r2 = yield requestThunk(url);
//   console.log(r2.body);
//   let r3 = yield requestThunk(url);
//   console.log(r3.body);
// }

// run(requestGen);

// /**
//  * generator.next() always send value back to
//  * yield first, then execute method.
//  */


// Thunk => co
// function Thunk(fn) {
//   return function (...args) {
//     return function (callback) {
//       return fn.call(this, ...args, callback);
//     }
//   }
// }

// const request = require('request');
// const requestThunk = Thunk(request); // fn => request

// const googleRequest = requestThunk('https://www.google.com'); // args => url
// const co = require('co');
// co(function* () {
//   const r1 = yield googleRequest;
//   const r2 = yield googleRequest;
//   const r3 = yield googleRequest;

//   return {
//     r1,
//     r2,
//     r3
//   }
// }).then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// })

// // co(Promise)
// const co = require('co');
// co(function* () {
//   const url = 'https://www.google.com';
//   const r1 = yield fetch(url);
//   const r2 = yield fetch(url);
//   const r3 = yield fetch(url);

//   return {
//     r1,
//     r2,
//     r3
//   }
// }).then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// });


// // example1
// async function getStockPriceByName(name) {
//   // function getStockName(str) {...}
//   // function getStockPrice(stockName) {...}

//   const stock = await getStockName(name);
//   const stockPrice = await getStockPrice(stock);
//   return stockPrice;
// }
// getStockPriceByName('goog').then((result) => {
//   console.log(result);
// });

// // example2
// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
// async function waitToPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }
// waitToPrint('hello world', 1000);
// //
// async function timeout(ms) {
//   await new Promise((resolve) => {
//     setTimeout(resolve, ms); // after "ms" seconds, execute resolve()
//   });
// }
// async function waitToPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }
// // example3 - async function always returns promise
// async function foo() {
//   return 'abc'
// }
// foo().then((result) => {
//   console.log(result);
// });
// // abc
// // example4 - Error handling
// async function foo() {
//   throw new TypeError('Typo');
// }
// foo().then(
//   result => console.log('resolve', result),
//   error => { if (error instanceof TypeError) console.log('reject', error) }
// )


// // usage
// // function declaration
// async function foo() { }
// // function expression
// const foo = async function () { };
// // arrow function
// const foo = async () => { };

// // object method
// let obj = {
//   async foo() {
//     // something
//   }
// };
// obj.foo().then();
// // class method
// class Storage {
//   constructor() {
//     // CacheStorage.open()
//     this.cachePromise = caches.open('avatars');
//   }
//   async getAvatar(name) {
//     const cache = await this.cachePromise;
//     return cache.match(`/avatars/${name}.jpg`);
//   }
// }
// const storage = new Storage();
// storage.getAvatar('jude').then();

// demo
// async function getTitle(url) {
//   // get the response
//   let response = await fetch(url);
//   // wait until text is ready
//   let html = await response.text();
//   // return html title
//   // return html.match(/<title>([\s\S]+)<\/title>/i)[1]; // the result is unexpected
//   return html.match(/<title>([^<]+)<\/title>/i)[1];
// }
// getTitle('https://tc39.github.io/ecma262/').then(
//   result => console.log(result),
//   err => console.log(err)
// );
// // ECMAScript® 2023 Language&nbsp;Specification

// debugger
// this is the result when i use ".match(/<title>([\s\S]+)<\/title>/i)[1]"
// let str = `<title>ECMAScript® 2023 Language&nbsp;Specification</title><script src="ecmarkup.js?cac
// he=YeiTF_tp" defer=""></script></head><body><div id="shortcuts-help">
// <ul>
//   <li><span>Toggle shortcuts help</span><code>?</code></li>
//   <li><span>Toggle "can call user code" annotations</span><code>u</code></li>
// <li><span>Navigate to/from multipage</span><code>m</code></li>
//   <li><span>Jump to search box</span><code>/</code></li>
// </ul></div><div id="menu-toggle"><svg xmlns="http://www.w3.org/2000/svg" style="
// width:100%; height:100%; stroke:currentColor" viewBox="0 0 120 120">
//       <title>Menu`

// console.log(str.match(/<title>([\s\S]+)<\/title>/i)[1]);
// ECMAScript® 2023 Language&nbsp;Specification
// note: in nodejs, it does work very well, maybe the problem occurred in fetch?


// // await with thenable
// class SleepTime {
//   constructor(timeout) {
//     this.timeout = timeout;
//   }
//   then(resolve, reject) {
//     const startTime = Date.now();
//     setTimeout(
//       () => resolve(Date.now() - startTime),
//       this.timeout
//     );
//   }
// }
// (async () => {
//   const sleepTime = await new SleepTime(999);
//   console.log(sleepTime);
// })();

// function sleep(interval) {
//   return new Promise((resolve) => {
//     setTimeout(
//       () => resolve(),
//       interval);
//   })
// }
// async function oneToFiveInAsync() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     await sleep(1000);
//   }
// }
// oneToFiveInAsync();
// 1
// 2
// 1007
// 3
// 4
// 5

// 1
// 5 // sleepTime
// 2
// 3
// 4
// 5

// let test = new SleepTime(1000)
// console.log(Object.prototype.toString.call(test.then)) // [object Function]

// test for setTimeout()
// // 1 => 2 => 3
// setTimeout(
//   () => console.log('setTimeout1, wait 1 second'),
//   1000
// );
// setTimeout(
//   () => console.log('setTimeout2, wait 2 seconds'),
//   2000
// );
// setTimeout(
//   () => console.log('setTimeout3, wait 3 seconds'),
//   3000
// );
// // 3 => 2 => 1
// setTimeout(
//   () => console.log('setTimeout3, wait 3 seconds'),
//   3000
// );
// setTimeout(
//   () => console.log('setTimeout2, wait 2 seconds'),
//   2000
// );
// setTimeout(
//   () => console.log('setTimeout1, wait 1 second'),
//   1000
// );
// // setTimeout1, wait 1 second
// // setTimeout1, wait 1 second
// // setTimeout2, wait 2 seconds
// // setTimeout2, wait 2 seconds
// // setTimeout3, wait 3 seconds
// // setTimeout3, wait 3 seconds


// thenable vs. Promise
// class Thenable {
//   then(resolve, reject) {
//     setTimeout(
//       resolve('I am Thenable Object'),
//       1000
//     )
//   }
// }
// async function thenable() {
//   let str = await new Thenable()
//   console.log(str)
// }
// function PromiseToSet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       resolve('I am Promise'),
//       1000
//     )
//   })
// }

// console.log('1');
// thenable();
// console.log('2');
// console.log(PromiseToSet());
// console.log('3');
// 1
// 2
// Promise { 'I am Promise' }
// 3
// I am Thenable Object
//
// console.log('1');
// console.log(PromiseToSet());
// console.log('2');
// thenable();
// console.log('3');
// 1
// Promise { 'I am Promise' }
// 2
// 3
// I am Thenable Object
//

// // thenable vs. promise
// class Thenable {
//   then(resolve, reject) {
//     setTimeout(
//       () => resolve('I am Thenable Object'),
//       1000
//     )
//   }
// }
// async function thenable() {
//   let str = await new Thenable()
//   console.log(str)
// }
// //
// function PromiseToSet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => resolve('I am Promise'),
//       1000
//     )
//   })
// }
// async function test() {
//   let str = await PromiseToSet();
//   console.log(str);
// }

// thenable();
// test();
// // I am Thenable Object
// // I am Promise


// await with reject
// async function foo() {
//   await Promise.reject('something wrong'); // reject will suspend following execution
//   console.log('not work');
// }
// async function foo1() {
//   return 'it works';
// }
// foo().then((result) => console.log(result));
// foo1().then((result) => console.log(result));
// console.log('1');
// // 1
// // it works
// // UnhandledPromiseRejection

// // catch reject
// async function foo() {
//   return Promise.reject('something wrong'); // reject will suspend following execution
// }
// foo()
//   .catch((err) => console.log(err));
// // something wrong

// error handling
// async function foo() {
//   await Promise.reject('something wrong'); // reject will suspend following execution
//   console.log('not work');
// }
// foo()
// .then((result) => console.log(result))
// .catch((err) => console.log(err));
// something wrong


// // better way
// async function foo() {
//   // to prevent suspend, catch the error in function first
//   try {
//     await Promise.reject('something wrong');
//   } catch (err) {
//     console.log(err);
//     return await Promise.resolve('hello world');
//   }
// }
// foo()
//   .then((result) => console.log(result));
// // something wrong
// // hello world

// // or
// async function foo() {
//   await Promise.reject('something wrong')
//     .catch((err) => console.log(err));
//   return await Promise.resolve('hello world');
// }
// foo()
//   .then((result) => console.log(result));
// // something wrong
// // hello world

// // use try...catch
// async function foo() {
//   // catch error, and return resolved Promise
//   try {
//     await new Promise((resolve, reject) => {
//       throw new Error('something wrong');
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   // return 'hello world';
//   return await ('hello world'); // await has no effect in here
// }
// foo()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// // note: double check, if return value was reject, we can catch error here
// // Error: something wrong
// // hello world

// //
// async function multipleAwait() {
//   try {
//     const value1 = await firstStep();
//     const value2 = await secondStep(value1);
//     const value3 = await thirdStep(value1, value2);
//     console.log('Final: ', value3);
//   } catch (err) {
//     console.log(err);
//   }
// }

// // retry with for Loop
// const superagent = require('superagent');
// const retryCounter = 3;

// async function test() {
//   let i;
//   for (i = 0; i < retryCounter; ++i) {
//     try {
//       await superagent.get('http://google.com/this-throws-an-error');
//       break;
//     } catch (err) { }
//   }
//   console.log(i);
// }
// test(); // 3

// // synchronous in async function
function getFoo() {
  return 'Foo'
}
function getBar() {
  return 'Bar'
}

// async function syncTest() {
//   let foo = await getFoo();
//   let bar = await getBar();
//   return [foo, bar];
// }
// syncTest().
//   then((result) => console.log(result));
// // [ 'Foo', 'Bar' ]

// // asynchronous in async function
// async function asyncTest1() {
//   let [foo, bar] = await Promise.all(
//     [getFoo(), getBar()]
//   );
//   return [foo, bar];
// }
// asyncTest1()
//   .then((result) => console.log(result));
// // [ 'Foo', 'Bar' ]

// // asynchronous in async function
// async function asyncTest2() {
//   let fooPromise = await new Promise((resolve) => {
//     resolve(getFoo());
//   });
//   let barPromise = await new Promise((resolve) => {
//     resolve(getBar());
//   });
//   return [fooPromise, barPromise];
// }
// asyncTest2()
//   .then((result) => console.log(result));
// // [ 'Foo', 'Bar' ]


// // Promise.allSettled(iterable)
// async function stepByStep() {
//   // asynchronous
//   let data = Promise.allSettled(
//     [getFoo(), getBar(), Promise.reject('something wrong')]
//   );
//   // console.log(data instanceof Promise); // true

//   // asynchronous
//   data
//     .then((result) => {
//       // synchronous
//       for (let obj of result) {
//         if (obj.status === 'fulfilled') {
//           console.log(obj.value);
//         } else {
//           console.log(obj.reason);
//         }
//       }
//     });
// }
// stepByStep();
// // Foo
// // Bar
// // something wrong


// // asynchronous with synchronous
// function test() {
//   // asynchronous => Promise.resolve(resolved Promise) => Microtask Queue(then(onFulfilled[, onRejected]))
//   // synchronous => then(onFulfilled()) => for Loop => Call stack
//   return Promise.resolve(['Foo', 'Bar']).then(
//     (result) => {
//       for (let i = 0; i < result.length; i++) {
//         console.log(result[i]);
//       }
//     }
//   );
// }
// test();
// // Foo
// // Bar

// function test() {
//   // asynchronous => Promise => Microtask, resolved Promise => Microtask queue(then())
//   // synchronous => then(onFulfilled()) => for Loop => Call stack
//   return new Promise((resolve) => {
//     resolve(['Foo', 'Bar'])
//   }).then((result) => {
//     for (let i = 0; i < result.length; i++) {
//       console.log(result[i])
//     }
//   });
// }
// test();
// // Foo
// // Bar

// // asynchronous with asynchronous
// async function test() {
//   // asynchronous => Promise => Microtask, resolved Promise => Microtask queue
//   // asynchronous => setTimeout(callback, timer) => timer to Macrotask => callback to Macrotask queue =>
//   //                 callback => resolve => Microtask => resolve() => resolved Promise => Microtask queue
//   let str1 = new Promise((resolve) => {
//     setTimeout(() => resolve('first'), 2000);
//   });

//   let str2 = new Promise((resolve) => {
//     setTimeout(() => resolve('second'), 1000);
//   });

//   Promise.race([str1, str2]).then((result) => console.log(result));
// }
// test(); // second
// //
// // add "await"
// // await make everything in async function acts synchronously
// // because it needs to wait until Promise is resolved
// async function test() {
//   let str1 = await new Promise((resolve) => {
//     setTimeout(() => resolve('first'), 2000);
//   });

//   let str2 = await new Promise((resolve) => {
//     setTimeout(() => resolve('second'), 1000);
//   });

//   Promise.race([str1, str2]).then((result) => console.log(result));
// }
// test(); // first
//
// // check: Is variable's problem? No.
// async function test() {
//   Promise.race([
//     await new Promise((resolve) => {
//       setTimeout(() => resolve('first'), 2000);
//     }),
//     await new Promise((resolve) => {
//       setTimeout(() => resolve('second'), 1000);
//     })
//   ]).then((result) => console.log(result));
// }
// test(); // first
// //
// async function test() {
//   Promise.race([
//     new Promise((resolve) => {
//       setTimeout(() => resolve('first'), 2000);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => resolve('second'), 1000);
//     })
//   ]).then((result) => console.log(result));
// }
// test(); // second


// // is Promise
// async function isPromise1() {
//   let data = new Promise((resolve, reject) => {
//     resolve('abc');
//   });
//   console.log(data instanceof Promise);
//   data.then((result) => console.log(result));
// }
// // is Promise
// async function isPromise2() {
//   let data = Promise.resolve('abc');
//   console.log(data instanceof Promise);
//   data.then((result) => console.log(result));
// }

// // not Promise
// async function notPromise1() {
//   let data = await new Promise((resolve, reject) => {
//     resolve('abc');
//   });
//   console.log(data instanceof Promise);
//   // data.then((result) => console.log(result));
//   // TypeError: data.then is not a function
// }
// // not Promise
// async function notPromise2() {
//   let data = await Promise.resolve('abc');
//   console.log(data instanceof Promise);
//   // data.then((result) => console.log(result));
//   // TypeError: data.then is not a function
// }

// isPromise1(); // true
// isPromise2(); // true
// notPromise1(); // false
// notPromise2(); // false

// // use then() after Promise, not variable
// async function awaitPromiseChain() {
//   let data = await Promise.resolve('abc')
//     .then((result) => console.log(result));
// }
// awaitPromiseChain(); // abc



// top-level await
// Problem
// // awaiting.js
// let output;
// async function main() {
//   const dynamic = await import(someMission); // import another module
//   const data = await fetch(url);
//   output = someProcess(dynamic.default, data);
// }
// main();
// export { output };
// // note: if we import awaiting.js before actions in async function
// // haven't completed, output will be undefined

// // usage.js
// import { output } from './awaiting.js';

// function outputPlusValue(value) {
//   return output + value; // output could be undefined, it depends on loading
// }
// console.log(outputPlusValue(100));

// // alternative: export Promise
// let output;
// export default (async function main() {
//   const dynamic = await import(someMission);
//   const data = await fetch(url);
//   output = someProcess(dynamic.default, data);
// })();
// export { output };
// note: here export Promise, when we use output in another file,
// we can use await to ensure it is loaded


// // solution: top-level await
// // awaiting.js
// const dynamic = import(someMission);
// const data = fetch(url);
// export const output = someProcess((await dynamic).default, await data);
// // note: use await to ensure modules are loaded

// // usage.js
// import { output } from '.awaiting.js';
// function outputPlusValue(value) {
//   return output + value; // now, output always has value
// }
// console.log(outputPlusValue(100));
