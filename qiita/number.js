// Math
// console.log(Number('123_456')); // MaM
// console.log(parseInt('123_456')); // 123
// console.log(parseFloat('1.00_123')); // 1

// console.log(Number(123_456)); // 123456
// console.log(parseInt(123_456)); // 123456
// console.log(parseFloat(1.00_123)); // 1.00123

// let a = 0b11111111; // binary from of 255
// let b = 0o377; // octal from of 255
// console.log(a === b); // true

// let num = 255;
// console.log(num.toString(16)); // 'ff'
// console.log(num.toString(8)); // '377'
// console.log(num.toString(2)); // '11111111'
// console.log(num.toString()); // '255'

// num = 123456;
// console.log(num.toString(36)); // '2n9c'

// num = Number.MAX_SAFE_INTEGER;
// console.log(num) // 9007199254740991

// let a = 3.95;
// let b = -1.1;
// console.log(Math.floor(a)); // 3
// console.log(Math.floor(b)); // -2

// let a = 3.05;
// let b = -1.95;
// console.log(Math.ceil(a)); // 4
// console.log(Math.ceil(b)); // -1

// let a = 3.5;
// let b = -1.45;
// console.log(Math.round(a)); // 4
// console.log(Math.round(b)); // -1

// a = 3.49;
// b = -1.5;
// console.log(Math.round(a)); // 3
// console.log(Math.round(b)); // -1

// b = -1.51;
// console.log(Math.round(b)); // -2

// let a = 3.5;
// let b = -1.45;
// console.log(Math.trunc(a)); // 3
// console.log(Math.trunc(b)); // -1

// a = 3.49;
// b = -1.5;
// console.log(Math.trunc(a)); // 3
// console.log(Math.trunc(b)); // -1

// b = -1.51;
// console.log(Math.trunc(b)); // -1

// random for 1 ~ 10
// function getRandomOneToTen() {
//   return Math.floor(Math.random() * 10) + 1;
// }
// console.log(getRandomOneToTen());

// console.log(Math.max(1, 2, 3)); // 3

// let arr = [4, 5, 6];
// console.log(Math.max(...arr)); // 6

// console.log(Math.min(1, 2, 3)); // 1

// let arr = [4, 5, 6];
// console.log(Math.min(...arr)); // 4

// console.log(Math.abs(3 - 5)); // 2
// console.log(Math.abs(5 - 3)); // 2
// console.log(Math.abs(1)); // 1

// console.log(Math.pow(7, 3)); // 343
// console.log(Math.pow(4, 0.5)); // 2 // sqrt(4) // 4^(1/2)
// console.log(Math.pow(9, 0.5)); // 3 // sqrt(9) // 9^(1/2)
// console.log(Math.pow(4, -2)); // 0.0625 // 1/(4^2)

// Number
// let num = 12.34;
// console.log(num.toFixed(1)); // '12.3'
// num = 0.1234;
// console.log(num.toFixed(1)); // '0.1'

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 - 0.3); // 5.551115123125783e-17
// console.log(5.551115123125783e-17.toFixed(20)); // '0.00000000000000005551'

// console.log(Number.EPSILON); // 2.220446049250313e-16
// console.log(Number.EPSILON === Math.pow(2, -52)); // true
// console.log(Number.EPSILON.toFixed(20)); // '0.00000000000000022204'
// console.log(0 < Number.EPSILON && Number.EPSILON < 1); // true

// console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

// expect the difference of floating point is less than 2^-50
// const maxFloat = Number.EPSILON * Math.pow(2, 2)
// console.log(maxFloat); // 8.881784197001252e-16
// console.log((0.1 + 0.2 - 0.3) < maxFloat); // true

// let a = 0.1;
// let b = 0.2;
// let c = 0.3;

// if ((a + b - c) < maxFloat) {
//   console.log(`Correct! ${a} + ${b} = ${c}`);
// }

// function withinErrorMargin(left, right) {
//   return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
// }

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(withinErrorMargin(0.1 + 0.2, 0.3)); // true
// console.log(1.1 + 1.3 === 2.4); // false
// console.log(withinErrorMargin(1.1 + 1.3, 2.4)); // true

// console.log(Number.isFinite(1 / 0)); // false // Infinity
// console.log(Number.isFinite(0 / 1)); // true // 0
// console.log(Number.isFinite(0 / 0)); // false // NaN
// console.log(Number.isFinite(-Infinity)); // false
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(NaN)); // false
// console.log(Number.isFinite('foo')); // false // not number
// console.log(Number.isFinite('0')); // false // not number

// console.log(Number.isFinite(2 ** 54)); // true
// // note: not a safe integer, but a finite number

// console.log(Number.isNaN(0 / 0)); // true // NaN
// console.log(Number.isNaN('0')); // false // not number
// console.log(Number.isNaN('foo')); // false // not number

// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(Number.NaN)); // true

// console.log(Number.isNaN({})); // false
// console.log(Number.isNaN('')); // false
// console.log(Number.isNaN(null)); // false
// console.log(Number.isNaN(undefined)); // false

// console.log(Number.parseFloat('1.234abc')); // 1.234
// console.log(Number.parseFloat('1.234efg')); // 1.234
// console.log(Number.parseFloat('1.2a34')); // 1.2
// console.log(Number.parseFloat('a1.234')); // NaN
// console.log(Number.parseFloat('    1.234')); // 1.234 // whitespace is ignored

// console.log(Number.parseInt('1', 2)); // 1
// console.log(Number.parseInt('2', 2)); // NaN // 0 or 1
// console.log(Number.parseInt('1111', 2)); // 15

// console.log(Number.parseInt('1', 8)); // 1
// console.log(Number.parseInt('2', 8)); // 2
// console.log(Number.parseInt('8', 8)); // NaN // 0-7
// console.log(Number.parseInt('9', 8)); // NaN // 0-7
// console.log(Number.parseInt('10', 8)); // 8

// console.log(Number.parseInt('1', 16)); // 1
// console.log(Number.parseInt('2', 16)); // 2
// console.log(Number.parseInt('8', 16)); // 8
// console.log(Number.parseInt('16', 16)); // 22 // 0-9, A-F
// console.log(Number.parseInt('G', 16)); // NaN // 0-9, A-F
// console.log(Number.parseInt('0xff', 16)); // 255

// console.log(Number.parseInt('1', 37)); // NaN

// console.log(Number.isInteger(0.1)); // false
// console.log(Number.isInteger(Math.PI)); // false

// console.log(Number.isInteger(NaN)); // false
// console.log(Number.isInteger(Infinity)); // false
// console.log(Number.isInteger(-Infinity)); // false

// console.log(Number.isInteger('10')); // false
// console.log(Number.isInteger('')); // false
// console.log(Number.isInteger(true)); // false
// console.log(Number.isInteger([1])); // false

// console.log(Number.isInteger(5.0)); // true
// console.log(Number.isInteger(Number.MAX_SAFE_INTEGER + 1)); // true
// // not safe, but it is an integer
// console.log(Number.isInteger(Number.MIN_SAFE_INTEGER - 1)); // true
// // not safe, but it is an integer
// console.log(Number.isInteger(3.0000000000000002)); // true // 2 is missing

// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); // true
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)); // false

// console.log(Number.isSafeInteger(NaN)); // false
// console.log(Number.isSafeInteger(Infinity)); // false
// console.log(Number.isSafeInteger(-Infinity)); // false

// console.log(Number.isSafeInteger(1.2)); // false
// console.log(Number.isSafeInteger(3.0000000000000002)); // true // the same problem

// function isSafe(num) {
//   return (
//     typeof num === 'number'
//     && Math.round(num) === num
//     && Number.MIN_SAFE_INTEGER <= num
//     && num <= Number.MAX_SAFE_INTEGER
//   );
// }

// console.log(isSafe(Number.MAX_SAFE_INTEGER)); // true
// console.log(isSafe(Number.MAX_SAFE_INTEGER + 1)); // false
// console.log(isSafe(Number.MIN_SAFE_INTEGER)); // true
// console.log(isSafe(Number.MIN_SAFE_INTEGER - 1)); // false
// console.log(isSafe(1.2)); // false
// console.log(isSafe(3.0000000000000002)); // true

// console.log(Number.isSafeInteger(9007199254740993)); // false
// console.log(Number.isSafeInteger(990)); // true
// console.log(Number.isSafeInteger(9007199254740993 - 990)); // true
// console.log((9007199254740993 - 990)); // 9007199254740002 // lost precision
// 9007199254740993 - 990 = 9007199254740003, over the Number.MAX_SAFE_INTEGER

// function trusty(left, right, result) {
//   if (
//     Number.isSafeInteger(left)
//     && Number.isSafeInteger(right)
//     && Number.isSafeInteger(result)
//   ) {
//     return result;
//   }
//   throw new RangeError('Operation can not be trusted')
// }

// console.log(trusty(9007199254740993, 990, 9007199254740993 - 990));
// // RangeError: Operation can not be trusted
// console.log(trusty(1, 2, 3)); // 3