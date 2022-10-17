// // recursion and stack
// console.time('for Loop');
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(2, 1000))
// console.timeEnd('for Loop');
// // for Loop: 4.052ms

// console.time('Recursion');
// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(2, 1000))
// console.timeEnd('Recursion');
// // Recursion: 3.997ms

// // recursive traversals
// let company = {
//   sales: [ // case1: [{}, {}]
//     { name: 'John', salary: 1000 },
//     { name: 'Alice', salary: 1600 }
//   ],
//   development: { // case2: {[{},{}],[]}
//     sites: [
//       { name: 'Peter', salary: 2000 },
//       { name: 'Alex', salary: 1800 },
//     ],
//     internals: [
//       { name: 'Jack', salary: 1300 },
//     ]
//   }
// };
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // case1
//     return department.reduce((previous, current) => {
//       return previous + current.salary;
//     }, 0);
//   } else { // case2
//     let sum = 0;
//     for (let sub of Object.values(department)) {
//       sum += sumSalaries(sub);
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company));

// tasks
// sum all numbers till the given one
// // formula
// function sumTo(num) {
//   return num * (num + 1) / 2;
// }
// console.log(sumTo(100)); // 5050

// calculate factorial
// // recursion
// function factorial(num) {
//   return (num !== 1) ? num * factorial(num - 1) : 1
// }
// console.log(factorial(5)); // 120

// function factorial(num) {
//   // n = 0 => false
//   return num ? num * factorial(num - 1) : 1;
// }
// console.log(factorial(5)); // 120

// // fibonacci numbers
// function fib(num) {
//   // f(n) = f(n-1) + f(n-2)
//   // 1 => 1, 0 => 0
//   return num <= 1 ? num : fib(num - 1) + fib(num - 2);
// }
// console.log(fib(10)); // 55

// // Output a single-linked list
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }
// printList(list);
// function sumList(list) {
//   let sum = 0;
//   sum += list.value;

//   if (list.next) {
//     sum += sumList(list.next);
//   }
//   return sum;
// }
// console.log(sumList(list)); // 10

// // Output a single-linked list in the reverse order
// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next);
//   }
//   console.log(list.value);
// }
// printReverseList(list);
// // 4
// // 3
// // 2
// // 1
// // 
// function printReverseList2(list) {
//   let arr = [];
//   let temp = list;
//   while (temp) {
//     arr.push(temp.value);
//     temp = temp.next;
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
// printReverseList2(list);
// // 4
// // 3
// // 2
// // 1

// // Rest parameters and spread syntax
// function sumAll(...args) {
//   console.log(args); // [ 1, 2, 3 ]
//   let sum = 0;
//   // args is array, it is iterable
//   for (let arg of args) sum += arg;
//   return sum;
// }
// console.log(sumAll(1, 2, 3));


// function showName(firstName, lastName, ...titles) {
//   console.log(firstName + ' ' + lastName); // Julius Caesar
//   console.log(titles[0], titles[1]); // Consul Imperator
//   console.log(titles.length); // 2
// }
// showName('Julius', 'Caesar', 'Consul', 'Imperator');

// // THe "arguments" variable
// function showName() {
//   console.log(arguments.length); // 2
//   console.log(arguments[0], arguments[1]); // Julius Caesar
// }
// showName('Julius', 'Caesar');

// // arrow function don't have "arguments"
// let arrowFn = () => {
//   console.log(arguments);
//   // ReferenceError: arguments is not defined
// }
// arrowFn(1, 2, 3);

// // Spread syntax
// console.log(Math.max(1, 2, 3)); // 3
// let arr = [1, 2, 3];
// console.log(Math.max(...arr)) // 3

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(Math.max(...arr1, ...arr2)); // 8
// console.log(Math.max(...arr1, ...arr2, 25)); // 25
// console.log([0, ...arr1, 2, ...arr2]);
// // [
// //   0, 1, -2, 3, 4,
// //   2, 8, 3, -8, 1
// // ]

// // Copy an array
// let arr = [[1], 2, 3];
// let arrCopy = [...arr];
// console.log(arr[0] === arrCopy[0]); // true
// // note: Spread syntax is shallow copy, if value was array/object, they are equal

// // use JSON.stringify() to convert to String
// console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
// arr.push(4);
// console.log(arr); // [ [ 1 ], 2, 3, 4 ]
// console.log(arrCopy); // [ [ 1 ], 2, 3 ]

// // Copy an object
// let obj = { a: 1, b: 2, c: ['3', '4'] };
// let objCopy = { ...obj };
// console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
// console.log(obj === objCopy); // false
// console.log(obj.c === objCopy.c); // true // shallow copy


// // filter through function
// let comparedArr = [1, 2, 3, 4, 5, 6, 7];

// // filter inBetween
// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   }
// }
// console.log(comparedArr.filter(inBetween(3, 6))); // [ 3, 4, 5, 6 ]
// console.log(comparedArr.filter((x) => x >= 3 && x <= 6)); // [ 3, 4, 5, 6 ]
// // note: inBetween(3, 6)(x)
// // filter inArray
// function inArray(arr) {
//   return function (element) {
//     return arr.includes(element);
//   };
// }
// console.log(comparedArr.filter(inArray([1, 2, 10]))); // [ 1, 2 ]
// console.log(comparedArr.filter((x) => [1, 2, 10].includes(x))); // [ 1, 2 ]
// // note: inArray([1, 2, 10])(x)
// // console.log(inArray([1, 2, 10])(1)); // true
// // console.log(inArray([1, 2, 10])(2)); // true
// // console.log(inArray([1, 2, 10])(7)); // false

// // sort by field
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(fieldName) {
//   return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1
// }
// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));
// console.log(users.sort(byField('surname')));

// Function object, NFE(Named Function Expression)
// The `name` property
// function sayHi() {
//   console.log('Hi');
// }
// console.log(sayHi.name); // sayHi

// // function expression as default value
// function foo(anotherFn = function () { }) {
//   console.log(anotherFn.name);
// }
// foo(); // anotherFn

// let user = {
//   sayHi() { },
//   sayBye() { }
// };
// console.log(user.sayHi.name); // sayHi
// console.log(user.sayBye.name); // sayBye

// let arr = [function test() { }, function () { }];
// console.log(arr[0].name); // test
// console.log(arr[1].name); // <empty string>


// The "length" property
// function f1(a) { }
// console.log(f1.length); // 1
// function f2(a, b) { }
// console.log(f2.length); // 2
// function many(a, b, ...more) { }
// console.log(many.length); // 2

// function ask(question, ...handlers) {
//   let isYes = confirm(question);

//   // handlers = [() => console.log('You said yes'),  (result) => console.log(result)]
//   for (let handler of handlers) {
//     // zero-argument function will be called when the answer is positive
//     // function with arguments will always be called and returns an answer
//     if (handler.length === 0) {
//       // Ok => both handlers are called
//       // cancel => only the second one
//       if (isYes) handler();

//     } else {
//       handler(isYes);
//     }
//   }
// }

// ask(
//   'Question?',
//   () => console.log('You said yes'),
//   (result) => console.log(result)
// );

// // Custom properties
// function sayHi() {
//   console.log('Hi');
//   sayHi.counter++;
//   // console.log(this.counter === sayHi.counter);
//   // TypeError: Cannot read properties of undefined (reading 'counter')
// }
// sayHi.counter = 0;

// console.log(sayHi); // [Function: sayHi] { counter: 0 }
// sayHi(); // Hi
// sayHi(); // Hi
// console.log(`Called ${sayHi.counter} times`); // Called 2 times

// let test = new sayHi();
// console.log(test); // sayHi {}
// console.log(test.counter); // undefined

// // function object
// // closure storing
// function makeCounter() {
//   function counter() {
//     // store as function counter's own property
//     return counter.count++;
//   }
//   counter.count = 0; // initial value
//   return counter;
// }
// // external function is unable to see internal function's property
// console.log(makeCounter); // [Function: makeCounter]
// let counter = makeCounter(); // returns function counter
// console.log(counter()); // 0
// console.log(counter()); // 1

// counter.count = 10;
// console.log(counter()); // 10

// // Custom properties vs. this(internal scope)
// function thisCounter() {
//   this.count = 0;
//   // arrow function doesn't have its own scope("this"),
//   // it will inherit scope from outer scope
//   this.add = () => {
//     return ++this.count;
//   }
// }
// console.log(thisCounter); // [Function: thisCounter] // doesn't have function object

// let counter2 = new thisCounter();
// // with keyword "new", this.property will convert to instance's own property
// console.log(counter2); // thisCounter { count: 0, add: [Function (anonymous)] }
// console.log(counter2.add()); // 1
// console.log(counter2.add()); // 2


// task
// // Set and decrease for counter
// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return ++count;
//   }
//   counter.set = (value) => count = value;
//   counter.decrease = () => --count;
//   return counter;
// }
// let counter = makeCounter();
// console.log(counter);
// // [Function: counter] {
// //   set: [Function(anonymous)],
// //   decrease: [Function(anonymous)]
// // }
// console.log(counter()); // 1
// console.log(counter.set(10)); // 10
// console.log(counter.decrease()); // 9

// // Sum with an arbitrary amount of brackets
// function sum(a) {
//   let currentSum = a;
//   function innerSum(b) {
//     currentSum += b;
//     // for next calling // currying
//     return innerSum;
//   }

//   // custom method
//   innerSum.showValue = function () {
//     return currentSum;
//   }
//   // innerSum.showValue = () => currentSum;

//   return innerSum;
// }

// console.log(sum(1)(2).showValue()); // 3
// console.log(sum(5)(-1)(2).showValue()); // 6
// console.log(sum(6)(-1)(-2)(-3).showValue()); // 0


// Scheduling: setTimeout and setInterval
// // Canceling with clearTimeout
// let timerId = setTimeout(() => console.log('never happens'), 1000);
// console.log(timerId); // Timeout {...}
// clearTimeout(timerId);
// console.log(timerId); // still exist

// // setInterval
// let timerId = setInterval(() => console.log('tick'), 2000);
// setTimeout(() => {
//   clearInterval(timerId);
//   console.log('stop');
// }, 5000);
// // tick
// // tick
// // stop

// Nested setTimeout
// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   timerId = setTimeout(tick, 2000);
// }, 1000);

// // task
// // Output every second
// // Using setInterval
// function printNumbers(from, to) {
//   let current = from;
//   let timerId = setInterval(function () {
//     console.log(current);
//     if (current === to) {
//       clearTimeout(timerId);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(1, 5);

// // Using nested setTimeout
// function printNumbers(from, to) {
//   let current = from;
//   setTimeout(function go() {
//     console.log(current);
//     if (current < to) {
//       // recursion
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }
// printNumbers(5, 10);

// Decorators and forwarding, call/apply
// Transparent caching

// // call()
// let obj = {
//   returnOne() {
//     return 1;
//   },
//   myMethod() {
//     return this.returnOne();
//   }
// }
// console.log(obj.myMethod()); // 1

// function test(fn) {
//   let result = fn()
//   return result;
// }
// console.log(test(obj.myMethod));
// // TypeError: Cannot read properties of undefined (reading 'objMethod')

// function test(fn) {
//   let result = fn.call(obj);
//   return result;
// }
// console.log(test(obj.myMethod)); // 1

// function test(fn) {
//   return function () {
//     let result = fn.call(obj);
//     return result;
//   }
// }
// console.log(test(obj.myMethod)()); // 1

// function test(fn) {
//   let obj = null;
//   return function () {
//     let result = fn.call(obj);
//     return result;
//   }
// }
// console.log(test(obj.myMethod)()); // 1
// // TypeError: Cannot read properties of null(reading 'returnOne')

// let worker = {
//   someMethod() {
//     return 1;
//   },
//   slow(x) {
//     console.log(`Called with ${x}`);
//     return x * this.someMethod();
//   }
// };

// function cachingDecorator(fn) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = fn.call(worker, x);
//     cache.set(x, result);
//     return result;
//   };
// }
// console.log(cachingDecorator(worker.slow));
// // [Function (anonymous)]
// console.log(cachingDecorator(worker.slow)(2));
// // Called with 2
// // 2

// // or
// function cachingDecorator(fn) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = fn.call(this, x);
//     cache.set(x, result);
//     return result;
//   };
// }
// worker.slow = cachingDecorator(worker.slow);
// // use function parameter fn to store original worker.slow
// console.log(worker.slow(2));
// // Called with 2
// // 2

// let anotherWorker = {
//   slow(min, max) {
//     console.log(`Called with ${min}, ${max}`);
//     return min + max;
//   }
// };

// function cachingHash(fn, hash) {
//   let cache = new Map();
//   return function () {
//     let key = hash(arguments);
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = fn.call(this, ...arguments); // spread
//     cache.set(key, result);
//     return result;
//   };
// }
// function hash(args) {
//   return `${args[0]}, ${args[1]}`;
// }
// // add new property in object "anotherWorker"
// // note: if we will use anotherWorker.slow in other function, then it shouldn't be covered
// // but if we want to protect from being called by other functions or accessed, we should overwrite itself
// anotherWorker.slow = cachingHash(anotherWorker.slow, hash);
// console.log(anotherWorker.slow(3, 5));
// // Called with 3, 5
// // 8
// console.log(`Again ${anotherWorker.slow(3, 5)}`);
// // Again 8

// borrowing a method
// function arrCallArgus() {
//   // console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
//   // arguments is iterable
//   return Array.prototype.join.call(arguments, '');
// }
// console.log(arrCallArgus(1, 2)) // 12

// function arrCallStr() {
//   // console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
//   // arguments is iterable
//   let str = '123';
//   return Array.prototype.join.call(str);
// }
// console.log(arrCallStr()); // 1,2,3

// // iterable object
// function arrCallMap() {
//   let map = new Map([[0, '1'], [1, '2']]);
//   // console.log(map); // Map(2) { 0 => '1', 1 => '2' }
//   return Array.prototype.join.call(map);
// }
// console.log(arrCallMap()); // print nothing

// function arrCallSet() {
//   let set = new Set([1, 2, 3]);
//   return Array.prototype.join.call(set);
// }
// console.log(arrCallSet()); // print nothing

// // Number is not iterable
// function arrCallNum() {
//   let num = 123;
//   return Array.prototype.join.call(num);
// }
// console.log(arrCallNum()); // print nothing


// // task
// // Spy decorator
// function work(a, b) {
//   console.log(a + b);
// }
// // Sinon.JS
// function spy(fn) {
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return fn.apply(this, args);
//   }
//   wrapper.calls = [];
//   return wrapper;
// }
// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9
// for (let args of work.calls) {
//   console.log(`call: ${args.join()}`)
// }
// // call: 1, 2
// // call: 4, 5
// console.log(work.calls); // [ [ 1, 2 ], [ 4, 5 ] ]

// // Delaying decorator
// function foo(x) {
//   console.log(x);
// }
// function delay(fn, ms) {
//   return function () {
//     setTimeout(() => fn.apply(this, arguments), ms);
//   };
// }

// let f1000 = delay(console.log, 1000);
// f1000('test'); // test


// // Debounce decorator
// function debounce(fn, ms) {
//   let timeout = null;
//   return function () {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => fn.apply(this, arguments), ms);
//   }
// }

// let eventHandlers = {
//   wait(x) {
//     console.log(x);
//   }
// }

// debounce(eventHandlers.wait, 1000)('wait for one second'); // wait for one second
// debounce(eventHandlers.wait, 3000)('wait for two seconds'); // wait for two seconds

// // Throttle decorator
// function throttle(fn, ms) {
//   let isThrottled = false
//   let savedArgs = null;
//   let savedThis = null;

//   function wrapper() {
//     if (isThrottled) {
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }
//     isThrottled = true;

//     fn.apply(this, arguments);

//     setTimeout(function () {
//       isThrottled = false;
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = null;
//         savedThis = null;
//       }
//     }, ms);
//   }
//   return wrapper;
// }

// Function binding
// let user = {
//   firstName: 'John',
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// }
// setTimeout(user.sayHi, 1000); // Hello, undefined!

// function test1(fn) {
//   console.log('do something for one second');
//   // fn is function parameter which belongs to function "test1"'s scope
//   return fn();
// }
// test1(user.sayHi);
// // TypeError: Cannot read properties of undefined (reading 'firstName')
// // note: when we put argument into function, actually it means an action on "reassign", so the scope of argument will be changed

// function test2() {
//   console.log('do something for one second');
//   // not as argument, its scope won't be changed
//   return function () {
//     user.sayHi();
//   }
// }
// test2()();
// // do something for one second
// // Hello, John!
// // or
// function test3() {
//   console.log('do something for one second');
//   // not as argument, its scope won't be changed
//   return () => user.sayHi();
// }
// test3()();
// // do something for one second
// // Hello, John!

// setTimeout(() => user.sayHi(), 1000); // Hello, John!

// let user = {
//   firstName: 'John',
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// }
// setTimeout(() => user.sayHi(), 1000);
// user = {
//   sayHi() {
//     console.log(`Reference has been changed`)
//   }
// }
// // Reference has been changed

// bind()
// only property
// let user = {
//   firstName: 'John'
// };
// // method
// function sayBye() {
//   console.log(`Bye, ${this.firstName}`);
// }
// let bye = sayBye.bind(user);
// bye(); // Bye, John

// function greet(phrase) {
//   console.log(`${phrase}, ${this.firstName}`);
// }
// let greeting = greet.bind(user);
// greeting('Hello'); // Hello, John
// // note: we don't have to change scope, we can use "bind()" to combine with "user" which "this" always refers to

// let user = {
//   firstName: 'John',
//   sayHi() {
//     console.log(`Hello, ${this.firstName}`);
//   }
// }
// let sayHi = user.sayHi.bind(user);
// setTimeout(sayHi, 1000);

// user = {
//   sayHi() {
//     console.log(`Reference has been changed`);
//   }
// }
// // Hello, John

// let user = {
//   firstName: 'John',
//   methods: [
//     function sayHi() {
//       console.log(`Hello, ${this.firstName}`);
//     },
//     function sayBye() {
//       console.log(`bye, ${this.firstName}`);
//     }
//   ]
// }

// // bindAll
// for (let method of user.methods) {
//   if (typeof method === 'function') {
//     // bind() in for...of
//     method = method.bind(user);
//     setTimeout(method, 1000);
//   }
// }
// // Hello, John
// // bye, John
// console.log(user.methods[0]);
// // [Function: sayHi]

// // or
// user.methods[0] = user.methods[0].bind(user);
// setTimeout(user.methods[0], 1000);
// // Hello, John
// console.log(user.methods[0]);
// // [Function: bound sayHi]


// // Partial functions
// function multiple(a, b) {
//   return a * b;
// }
// let double = multiple.bind(null, 2);
// console.log(double(3)); // 6
// console.log(double(4)); // 8

// function getBindMultiple(base, multiplier) {
//   return multiple.bind(null, base)(multiplier);
// }
// console.log(getBindMultiple(2, 3)); // 6
// console.log(getBindMultiple(3, 4)); // 12

// // Going partial without context
// let user = {
//   firstName: 'John',
//   say(time, phrase) {
//     console.log(`[${time}] ${this.firstName}:${phrase}`);
//   }
// };
// function partial(fn, ...argsBound) {
//   return function (...args) {
//     return fn.call(this, ...argsBound, ...args);
//   }
// }
// // fn, argsBound(time)
// user.sayNow = partial(user.say, `${new Date().getHours()}: ${new Date().getMinutes()}`)

// // args(phrase)
// user.sayNow('Hello'); // [11: 15] John: Hello

// Going partial without context
let user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}`);
  }
};
function partial(fn, ...argsBound) {
  return function (...args) {
    return fn.call(this, ...argsBound, ...args);
  }
}
// fn, argsBound(time)
user.sayNow = partial(user.say, `${new Date().getHours()}:${new Date().getMinutes()}`)

// args(phrase)
user.sayNow('Hello'); // [11:15] John: Hello


