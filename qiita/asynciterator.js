// (async function* () { }).constructor
// let num = 10;
// const asyncGeneratorFn = (async function* () { }).constructor;
// let createAsyncGenerator = new asyncGeneratorFn(
//   'a',
//   'num',
//   'yield a * num'
// );
// let asyncGen = createAsyncGenerator(5, num);
// console.log('start');
// asyncGen
//   .next()
//   .then((result) => console.log(result));
// console.log('end');
// start
// end
// { value: 50, done: false }
// // 
// let arr = [1, 2, 3];
// const asyncGeneratorFn = (async function* () { }).constructor;
// let createAsyncGenerator = new asyncGeneratorFn(
//   'a',
//   'arr',
//   'yield arr.map((item) => item * a)'
// );
// let asyncGen = createAsyncGenerator(5, arr);
// console.log('start');
// asyncGen
//   .next()
//   .then((result) => console.log(result));
// console.log('end');
// // start
// // end
// // { value: [ 5, 10, 15 ], done: false }

//
// async function*
// async function* foo(a, arr) {
//   yield await Promise.resolve(arr.map((item) => item * a));
// }
// foo(5, [1, 2, 3])
//   .next()
//   .then((result) => console.log(result));
// // { value: [ 5, 10, 15 ], done: false }


// @@asyncIterator
// let arr = [1, 2, 3];
// // arr[Symbol.asyncIterator] = async function* () {
// //   for (let i = 0; i < this.length; i++) {
// //     yield this[i];
// //   }
// // };
// async function useForAwait(arr) {
//   console.log('start for await');
//   // for await...of call @@asyncIterator => [Symbol.asyncIterator]
//   for await (let item of arr) {
//     console.log(item)
//   }
//   console.log('end for await');
// }
// console.log('start');
// useForAwait(arr);
// console.log('end');
// // start
// // start for await
// // end
// // 1
// // 2
// // 3
// // end for await




// // compare with calling @@iterator
// async function useSpread(arr) {
//   console.log('start for await');
//   // Spread syntax call @@iterator => [Symbol.iterator]
//   console.log([...arr]);
//   console.log('end for await');
// }
// console.log('start');
// useSpread(arr);
// console.log('end');
// // start
// // start for await
// // [1, 2, 3]
// // end for await
// // end

// // Object
// let obj = {
//   0: 'a',
//   1: 'b',
//   length: 2,
//   async*[Symbol.asyncIterator]() {
//     for (let i = 0; i < this.length; i++) {
//       yield this[i];
//     }
//   }
// };
// let objAsyncIterator = async function (obj) {
//   console.log('start for await');
//   for await (let item of obj) {
//     console.log(item)
//   }
//   console.log('end for await');
// }
// console.log('start');
// objAsyncIterator(obj);
// console.log('end');
// // start
// // start for await
// // end
// // a
// // b
// // end for await


// // for...of in function
// function controlledFn(iterable) {
//   console.log('for...of in controlledFn start');
//   for (let item of iterable) {
//     console.log(item);
//   }
//   console.log('for...of in controlledFn end');
// }
// // for...of in async function
// async function useIterator(iterable) {
//   console.log('for...of in useIterator start');
//   for (let item of iterable) {
//     console.log(item);
//   }
//   console.log('for...of in useIterator end');
// }
// // await for...of in async function
// async function useAsyncIterator(iterable) {
//   console.log('await for...of in async function start');
//   for await (let item of iterable) {
//     console.log(item)
//   }
//   console.log('await for...of in async function end');
// }
// // iterable with [Symbol.iterator] property
// let arr = [1, 2, 3];
// // result
// console.log('test start');
// controlledFn(arr);
// console.log('test end');
// // test start
// // for...of in controlledFn start
// // 1
// // 2
// // 3
// // for...of in controlledFn end
// // test end

// console.log('test start');
// useIterator(arr);
// console.log('test end');
// // test start
// // for...of in useIterator start
// // 1
// // 2
// // 3
// // for...of in useIterator end
// // test end

// console.log('test start');
// useAsyncIterator(arr);
// console.log('test end');
// // test start
// // await for...of in async function start
// // test end
// // 1
// // 2
// // 3
// // await for...of in async function end

// // iterable add [Symbol.AsyncIterator] property
// arr[Symbol.asyncIterator] = async function* () {
//   for (let i = 0; i < this.length; i++) {
//     yield this[i];
//   }
// };
// // result
// console.log('test start');
// controlledFn(arr);
// console.log('test end');
// // test start
// // for...of in controlledFn start
// // 1
// // 2
// // 3
// // for...of in controlledFn end
// // test end
// //
// console.log('test start');
// useIterator(arr);
// console.log('test end');
// // test start
// // for...of in useIterator start
// // 1
// // 2
// // 3
// // for...of in useIterator end
// // test end
// //
// console.log('test start');
// useAsyncIterator(arr);
// console.log('test end');
// // test start
// // await for...of in async function start
// // test end
// // 1
// // 2
// // 3
// // await for...of in async function end

// // only [Symbol.AsyncIterator]
// arr[Symbol.iterator] = null;
// arr[Symbol.asyncIterator] = async function* () {
//   for (let i = 0; i < this.length; i++) {
//     yield this[i];
//   }
// };
// // controlledFn(arr); // TypeError: iterable is not iterable
// // useIterator(arr); // TypeError: iterable is not iterable
// console.log('test start');
// useAsyncIterator(arr);
// console.log('test end');
// // test start
// // await for...of in async function start
// // test end
// // 1
// // 2
// // 3
// // await for...of in async function end
// /**
//  * [Symbol.iterator] => for...of/for await...of
//  * [Symbol.iterator] & [Symbol.AsyncIterator] => for...of/for await...of
//  * only [Symbol.AsyncIterator] => for await...of
// */


// await spread?
// let arr = [1, 2, 3];
// async function awaitSpread(iterable) {
//   console.log('await spread start');
//   // let asynctest = await [...iterable]; 
//   let asynctest = [...await iterable]; // I think this usage is more functional
//   console.log(asynctest);
//   console.log('await spread end');
// }
// console.log('test start');
// awaitSpread(arr);
// console.log('test end');

// nested iterable
// let arr = [['a', 'b'], ['c', 'd']];
// // for...of => for await...of
// async function test(arr) {
//   console.log('test start');
//   for (let item of arr) {
//     console.log('check')
//     for await (let element of item) {
//       console.log(element)
//     }
//   }
//   console.log('test end');
// }
// console.log('start');
// test(arr);
// console.log('end');
// // start
// // test start
// // check // for...of is synchronous
// // end // for await...of is asynchronous
// // a
// // b
// // check
// // c
// // d
// // test end


// // for await...of => for...of
// async function test(arr) {
//   console.log('test start');
//   for await (let item of arr) {
//     console.log('check');
//     for (let element of item) {
//       console.log(element);
//     }
//   }
//   console.log('test end');
// }
// console.log('start');
// test(arr);
// console.log('end');
// // start
// // test start
// // end // for await...of is asynchronous
// // check
// // a
// // b
// // check
// // c
// // d
// // test end

//
// async function test1(arr) {
//   console.log('test start');
//   // await synchronous result
//   await arr.map((item) => {
//     for (let element of item) {
//       console.log(element);
//     }
//   })
//   console.log('test end');
// }
// console.log('start');
// test1(arr);
// console.log('end');
// // start
// // test start
// // a
// // b
// // c
// // d
// // end
// // test end



// ArrayLike Object with calling `[Symbol.iterator]`
// let arrayLikeObj = {
//   0: ['a', 'b'],
//   1: ['c', 'd'],
//   length: 2
// };
// for...of => for await...of
// async function useArrayLike(arrayLike) {
//   console.log('test start');
//   // asynchronous
//   for (let item of Array.from(arrayLikeObj)) {
//     console.log('check');
//     for await (let element of item) {
//       console.log(element);
//     }
//   }
//   console.log('test end');
// }
// console.log('start');
// useArrayLike(arrayLikeObj);
// console.log('end');
// start
// test start
// check
// end
// a
// b
// check
// c
// d
// test end
//
// for await...of => for...of
// async function useArrayLike(arrayLike) {
//   console.log('test start');
//   // asynchronous
//   for await (let item of Array.from(arrayLikeObj)) {
//     console.log('check');
//     for (let element of item) {
//       console.log(element);
//     }
//   }
//   console.log('test end');
// }
// console.log('start');
// useArrayLike(arrayLikeObj);
// console.log('end');
// // start
// // test start
// // end
// // check
// // a
// // b
// // check
// // c
// // d
// // test end


// let arrayLikeObj = {
//   0: ['a', 'b'],
//   1: ['c', 'd'],
//   length: 2
// };
// async function awaitElement(item) {
//   for await (let element of item) {
//     console.log(element);
//   }
// }
// async function
// async function asyncFn(arrayLikeObj) {
//   console.log('test start');
//   // Array.from() => synchronous
//   // map() => parallel processing
//   // for await...of => asynchronous
//   Array.from(arrayLikeObj, (item) => awaitElement(item));
//   console.log('test end');
// }
// console.log('start');
// asyncFn(arrayLikeObj);
// console.log('end');
// // start
// // test start
// // test end
// // end
// // a // item = [a, b] => await element: a
// // c // item = [c, d] => await element: c
// // b
// // d
// // note: map() makes item in arrayLike be processed in parallel, 
// // and await makes element processed asynchronously


// // normal function
// function normalFn(arrayLikeObj) {
//   console.log('test start');
//   // synchronous => asynchronous
//   Array.from(arrayLikeObj, (item) => awaitElement(item))
//   console.log('test end');
// }
// console.log('start');
// normalFn(arrayLikeObj);
// console.log('end');
// // start
// // test start
// // test end
// // end
// // a // item = [a, b] => await element: a
// // c // item = [c, d] => await element: c
// // b
// // d

// ArrayLike Object with calling `[Symbol.asyncIterator]`
// let arrayLikeObj = {
//   0: ['a', 'b'],
//   1: ['c', 'd'],
//   length: 2,
//   async*[Symbol.asyncIterator]() {
//     for (let i = 0; i < this.length; i++) {
//       yield this[i]
//     }
//   }
// };


// async function awaitElement(item) {
//   console.log('check');
//   for await (let element of item) {
//     console.log(element);
//   }
// }
// async function useArrayLike(arrayLike) {
//   console.log('test start');
//   // asynchronous
//   // arrayLike didn't have [Symbol.iterator] property
//   // for...of => for await...of => TypeError: arrayLikeObj is not iterable
//   for await (let item of arrayLike) {
//     for (let element of item) {
//       console.log(element);
//     }
//   }
//   console.log('test end');
// }
// console.log('start');
// useArrayLike(arrayLikeObj);
// console.log('end');
// // start
// // test start
// // end
// // a
// // b
// // c
// // d
// // test end

// async function useArrayLike(arrayLike) {
//   console.log('test start');
//   // asynchronous
//   for await (let item of arrayLike) {
//     item.map((element) => awaitElement(element));
//   }
//   console.log('test end');
// }
// console.log('start');
// useArrayLike(arrayLikeObj);
// console.log('end');
// start
// test start
// end // for await (let item of arrayLike)
// check
// check
// a
// b
// check
// check
// test end // for await (let element of item)
// c
// d





// // yield in async generator vs. await in async generator
// async function* test1() {
//   yield 'a';
//   yield 'b';
//   return 2;
// }
// async function* test2() {
//   let result = yield* test1();
//   console.log(result);
//   // let awaitAsyncGeneratorFn = await test1(); // meaningless
//   // console.log(awaitAsyncGeneratorFn); // Object [AsyncGenerator] {}
// }


// for await (let item of test2()) {
//   console.log(item);
// }
// // a
// // b
// // 2 // result


// // AsyncGenerator
// // synchronous generator
// function* syncGenerator(iterable, fn) {
//   // call iterable object's [Symbol.iterator] property
//   const iterator = iterable[Symbol.iterator]();
//   while (true) {
//     const { value, done } = iterator.next();
//     if (done) break;
//     // if generator didn't finsh yet, ouput fn(value)
//     yield fn(value);
//   }
// }

// // asynchronous generator
// async function* asyncGenerator(iterable, fn) {
//   const iterator = iterable[Symbol.iterator]();
//   while (true) {
//     // await => asynchronous
//     const { value, done } = await iterator.next();
//     if (done) break;
//     yield fn(value);
//   }
// }

// // yield await
// async function* readLines(path) {
//   let file = await fileOpen(path);
//   try {
//     // EOF = End of File
//     while (!file.EOF) {
//       // use await to ensure file.readLines() has been completely executed, then send value to yield
//       yield await file.readLines();
//     }
//   } finally {
//     await file.close();
//   }
// }
// // use async function to call asyncGenerator
// (async function () {
//   for await (let line of readLines(filePath)) {
//     console.log(line);
//   }
// })();
// // or another asyncGenerator to call asyncGenerator
// async function* prefixLines(asyncItarable) {
//   for await (let line of asyncItarable) {
//     yield '> ' + line;
//   }
// }
