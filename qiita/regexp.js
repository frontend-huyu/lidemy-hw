// let matches = 'JavaScript'.match(/HTML/) || [];

// if (!matches.length) {
//   console.log('No matches');
// }

// String.prototype.replace()
// // $&...
// console.log('I like HTML'.replace(/html/i, '$& and JavaScript'));
// // I like HTML and JavaScript

// // $`...
// console.log('I like HTML'.replace(/html/i, '$` and JavaScript'));
// // I like I like  and JavaScript
// console.log('I like HTML, React'.replace(/html/i, '$` and JavaScript'));
// // I like I like  and JavaScript, React
// console.log('HTML, React'.replace(/html/i, '$` and JavaScript'));
// //  and JavaScript, React

// // "$'..."
// console.log('I like HTML'.replace(/html/i, "$' and JavaScript"));
// // I like  and JavaScript

// $n
// let str = 'I like HTML and JavaScript';
// console.log(str.replace(/(HTML) and (JavaScript)/, '$2 and $1'));
// // I like JavaScript and HTML

// (?<name>...)
// let matchedStr = str.match(/(?<element1>HTML) and (?<element2>JavaScript)/);
// console.log(matchedStr.groups.element1); // HTML
// console.log(matchedStr.groups.element2); // JavaScript

// $<name>
// console.log(str.replace(/(?<element1>HTML) and (?<element2>JavaScript)/, '$<element2> and React'));
// // I like JavaScript and React

// $$...
// str = '!apple!';
// console.log(str.replace(/\w/g, '$$ orange'));
// // !$ orange$ orange$ orange$ orange$ orange!

// regexp
// regexp.test()
// let str = 'I like HTML and JavaScript';
// let regexp = /javascript/i;
// console.log(regexp.test(str)); // true

// with 'g'
// let str = 'ネコとワンちゃん';
// let globalRegexp = /\p{scx=Katakana}/gu;

// console.log(str.match(/\p{scx=Katakana}/gu));
// // [ 'ネ', 'コ', 'ワ', 'ン' ]

// console.log(globalRegexp.lastIndex); // 0 // initially lastIndex = 0
// console.log(globalRegexp.test(str)); // true // index 0 is true
// console.log(globalRegexp.lastIndex); // 1 // next index for test()
// console.log(globalRegexp.test(str)); // true
// console.log(globalRegexp.lastIndex); // 2 // index 2 is false, jump to next index 3
// console.log(globalRegexp.test(str)); // true // index 3 is katakana, return true
// console.log(globalRegexp.lastIndex); // 4 
// console.log(globalRegexp.test(str)); // true
// console.log(globalRegexp.lastIndex); // 5
// console.log(globalRegexp.test(str)); // false
// console.log(globalRegexp.lastIndex); // 0

// with 'y'
// let last = /\p{scx=Hiragana}/yu;
// last.lastIndex = 2
// console.log(last.lastIndex); // 2
// console.log(last.sticky); // true

// console.log(last.test(str)); // true
// console.log(last.lastIndex); // 3
// console.log(last.test(str)); // false
// console.log(last.lastIndex); // 0

// last.lastIndex = 5
// console.log(last.lastIndex); // 5
// console.log(last.test(str)); // true
// console.log(last.lastIndex); // 6
// console.log(last.test(str)); // true
// console.log(last.lastIndex); // 7
// console.log(last.test(str)); // true
// console.log(last.lastIndex); // 8
// console.log(last.test(str)); // false
// console.log(last.lastIndex); // 0

// // Script => sc, Script_Extensions => scx
// console.log('Hello, 你好，こんにちは！'.match(/\p{sc=Han}/ug));
// // [ '你', '好' ]
// console.log('Hello, 你好，こんにちは！'.match(/\p{scx=Han}/ug));
// // [ '你', '好' ]

// console.log('あぁアァ゛゜ー'.match(/\p{sc=Katakana}/ug));
// // [ 'ア', 'ァ' ]
// console.log('あぁアァ゛゜ー'.match(/\p{scx=Katakana}/ug));
// // [ 'ア', 'ァ', '゛', '゜', 'ー' ]

// // ES9
// console.log('Hello, 你好，こんにちは！'.match(/\p{General_Category=Letter}/ug));
// console.log('Hello, 你好，こんにちは！'.match(/\p{gc=Letter}/ug));
// console.log('Hello, 你好，こんにちは！'.match(/\p{Letter}/ug));
// // [
// //   'H', 'e', 'l', 'l',
// //   'o', '你', '好', 'こ',
// //   'ん', 'に', 'ち', 'は'
// // ]

// // \p{General_Category}
// console.log(/\p{Other_Symbol}/u.test('☕')); // true
// console.log('0xAF'.match(/0x\p{Hex_Digit}\p{Hex_Digit}/u));
// // [ '0xAF', index: 0, input: '0xAF', groups: undefined ]

// for email practice
// let regexp = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}$/g;

// let str1 = '-12ab@cd-34.56-ef_';
// let str2 = '.@1.ab'
// // console.log(regexp.test(str1)) // true

// console.log(regexp.lastIndex); // 0
// console.log(regexp.test(str2)); // true
// console.log(regexp.lastIndex); // 6
// console.log(regexp.test(str2)); // false

// let regexp = /^[a-z0-9]+\.?([a-z0-9]+\.?){5,}@g(oogle)?mail\.com$/;

// function validateGmail(str) {
//   let examArr = str.split('@')

//   if (examArr[0].length < 6 || examArr[1].length > 30) return 'Sorry, username must be between 6 and 30 characters.';

//   let usernameReg = /^[a-z0-9]+\.?([a-z0-9]+\.?){5,}/;
//   let gmailReg = /g(oogle)?mail\.com$/;
//   if (usernameReg.test(examArr[0]) && gmailReg.test(examArr[1])) return 'Valid format';

//   return 'Invalid format';
// }

// let email1 = '0.bcdefg@googlemail.com';
// let email2 = 'a.b.c.d.e.f.g@gmail.com';
// let email3 = '0bcdefg@googlemail.com';
// let email4 = '0..bcdefg@gmail.com';
// let email5 = 'abcdefghijklmnopqrstuvwxyz1230@gmail.com';
// let email6 = '0.b..cdefg@gmail.com';

// console.log(validateGmail(email1)); // Valid format
// console.log(validateGmail(email2)); // Valid format
// console.log(validateGmail(email3)); // Valid format
// console.log(validateGmail(email4)); // Invalid format
// console.log(validateGmail(email5)); // Valid format
// console.log(validateGmail(email6)); // Invalid format

// check MAC-address: 6 two-digits hex numbers separated by a colon
// let regexp = /^[0-9A-F]{2}(:[0-9A-F]{2}){5}$/;

// console.log(regexp.test('01:32:54:67:89:AB'));

// .+
// console.log('a "witch" and her "broom" is one'.match(/".+"/g));
// // [ '"witch" and her "broom"' ]
// console.log('a "witch" and her "broom" is one'.match(/"[^"]+"/g));
// // [ '"witch"', '"broom"' ]

// let str = '<span class="my">';
// let regexp = /<(([a-z]+)\s*([^>]*))>/;
// let result = str.match(regexp);
// console.log(result);

// matchALL()
// let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

// console.log(results);
// // Object [RegExp String Iterator] {}
// // note: matchAll() returns an iterable object

// // use Array.from
// // results = Array.from(results);
// // console.log(results);
// // [
// //   ['<h1>', 'h1', index: 0, input: '<h1> <h2>', groups: undefined],
// //   ['<h2>', 'h2', index: 5, input: '<h1> <h2>', groups: undefined]
// // ]

// // use destructuring
// let [tag1, tag2] = results;
// console.log(tag1);
// // [ '<h1>', 'h1', index: 0, input: '<h1> <h2>', groups: undefined ]
// console.log(tag2);
// // [ '<h2>', 'h2', index: 5, input: '<h1> <h2>', groups: undefined ]

// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
// let str = '2022-09-10';
// let groups = str.match(dateRegexp).groups;
// console.log(groups);
// [Object: null prototype] { year: '2022', month: '09', day: '10' }

// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
// let str = '2019-10-30 2020-01-01';

// use Array.from()
// Array.from(array-like, map())
// let results = Array.from(
//   str.matchAll(dateRegexp),
//   (item) => {
//     let { year, month, day } = item.groups;
//     console.log(`${day}.${month}.${year}`);
//   }
// );
// // 30.10.2019
// // 01.01.2020

// use forEach()
// let results = [...str.matchAll(dateRegexp)];
// results.forEach((item) => {
//   let { year, month, day } = item.groups;
//   console.log(`${day}.${month}.${year}`);
// })
// // // 30.10.2019
// // // 01.01.2020

// use for...of
// let results = str.matchAll(dateRegexp);
// for (let result of results) {
//   let { year, month, day } = result.groups
//   console.log(`${day}.${month}.${year}`);
// }
// // 30.10.2019
// // 01.01.2020

// let str = '2019-10-30 2020-01-01 2020-02-02 2020-03-03 2020-04-04 2020-05-05 2020-06-06 2020-07-07';

// let generatorObj = {
//   dateRegexp: /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g,

//   *[Symbol.matchAll](str) {
//     for (const item of str.matchAll(this.dateRegexp)) {
//       let { year, month, day } = item.groups
//       yield `${day}.${month}.${year}`
//     }
//   }
// };

// function getFive(str) {
//   let results = [...str.matchAll(generatorObj)];
//   let arr = [];
//   for (let i = 0; i < 5; i++) {
//     arr.push(results[i]);
//   }
//   return arr;
// }
// console.log(getFive(str));
// // [
// //   '30.10.2019',
// //   '01.01.2020',
// //   '02.02.2020',
// //   '03.03.2020',
// //   '04.04.2020'
// // ]


// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
// let str = '2019-10-30 2020-01-01 2020-02-02 2020-03-03 2020-04-04 2020-05-05 2020-06-06 2020-07-07';

// class GetFiveDate {
//   static *[Symbol.matchAll](str, regexp) {
//     for (const item of str.matchAll(regexp)) {
//       let { year, month, day } = item.groups
//       yield `${day}.${month}.${year}`
//     }
//   }

//   getFive(str, regexp) {
//     let results = GetFiveDate[Symbol.matchAll](str, regexp)
//     let arr = [];
//     for (let i = 0; i < 5; i++) {
//       arr.push(results.next().value)
//     }
//     return arr
//   }
// }

// let test = new GetFiveDate();
// console.log(test.getFive(str, dateRegexp))
// // [
// //   '30.10.2019',
// //   '01.01.2020',
// //   '02.02.2020',
// //   '03.03.2020',
// //   '04.04.2020'
// // ]

// match()
// find css color
// let regexp = /#[a-f0-9]{3}\b|#[a-f0-9]{6}\b/gi;
// // let regexp = /#([a-f0-9]{3}){1,2}\b/gi;
// let str = 'color: #3f3; background-color: #AA00ef; and: #abcd';
// console.log(str.match(regexp));
// // [ '#3f3', '#AA00ef' ]

// find all numbers
// let regexp = /-?\d+(\.\d+)?/g;
// let str = '-1.5 0 2 -123.4.';
// console.log(str.match(regexp));
// // [ '-1.5', '0', '2', '-123.4' ]

// parse an expression
// let regexp = /-?\d+(\.\d+)?\s*[\+\-\*\/]\s*-?\d+(\.\d+)?/;
// let str = '1.2 + 3.4';
// console.log(str.match(regexp));
// // [
// //   '1.2 + 3.4',
// //   '.2',
// //   '.4',
// //   index: 0,
// //   input: '1.2 + 3.4',
// //   groups: undefined
// // ]

// let regexp = /(-?\d+(?:\.\d+))?\s*([\+\-\*\/])\s*(-?\d+(?:\.\d+)?)/;
// let str = '1.2 + 3.4';
// console.log(str.match(regexp));
// // [
//   '1.2 + 3.4',
//   '1.2',
//   '+',
//   '3.4',
//   index: 0,
//   input: '1.2 + 3.4',
//   groups: undefined
// ]

// function parse(expr) {
//   let regexp = /(?<a>-?\d+(?:\.\d+))?\s*(?<operator>[\+\-\*\/])\s*(?<b>-?\d+(?:\.\d+)?)/;

//   let result = expr.match(regexp);
//   if (!result) return [];
//   result.shift();

//   // return [...result]
//   return [result.groups.a, result.groups.operator, result.groups.b];
// }

// console.log(parse('-1.23 * 3.45')); // [ '-1.23', '*', '3.45' ]

// \n & \k<name>
// let str = 'He said: \"She\'s the one!\".';
// let regexp = /(['"](.*?)["])/g;
// console.log(str.match(regexp)); // [ `"She's the one!"` ]

// \n
// let regexp = /(['"])(.*?)\1/g; // it is the same with /(["])(.*?)(["])/g
// console.log(str.match(regexp)); // [ `"She's the one!"` ]

// \k<name>
// let regexp = /(?<quote>['"])(.*?)\k<quote>/g;
// console.log(str.match(regexp)); // [ `"She's the one!"` ]

// x|y
// regexp for time: hh:mm
// let str = '00:00 10:10 23:59 25:59 1:2'
// let regexp = /([01]\d|2[0-3]):[0-5]\d/g;
// console.log(str.match(regexp)); // [ '00:00', '10:10', '23:59' ]

// find bb-tag pairs
// let str = `
//   [b]hello![/b]
//   [quote]
//     [url]http://google.com[/url]
//   [/quote]
//   [url]
//     [b]http://google.com[/b]
//   [/url]
// `;
// let regexp = /\[(b|url|quote)].*?\[\/\1]/gs;
// console.log(str.match(regexp));
// // [
// //   '[b]hello![/b]',
// //   '[quote]\n    [url]http://google.com[/url]\n  [/quote]',
// //   '[url]\n    [b]http://google.com[/b]\n  [/url]'
// // ]
// // note: \[], /s

// find quoted strings
// let str = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';
// let regexp = /"(\\.|[^"\\])*"/g;
// console.log(str.match(regexp));
// // [ '"test me"', '"Say \\"Hello\\"!"', '"\\\\ \\""' ]

// double (?=...)
// let str = '1 turkey costs 30€';
// let regexp = /\d+(?=\s)(?=.*30)/;
// console.log(str.match(regexp));
// // [ '1', index: 0, input: '1 turkey costs 30€', groups: undefined ]

// x(?!y)
// let str = '2 turkeys cost 60€';
// let regexp = /\d+(?!€)/;
// console.log(str.match(regexp));
// // [ '2', index: 0, input: '2 turkeys cost 60€', groups: undefined ]

// (?<=y)x
// let str = '1 turkey costs $30';
// let regexp = /(?<=\$)\d+/;
// console.log(str.match(regexp));
// // [ '30', index: 16, input: '1 turkey costs $30', groups: undefined ]

// (?<!y)x
// let str = '2 turkeys cost $60';
// let regexp = /(?<!$)\d+/;
// console.log(str.match(regexp));
// // [ '2', index: 0, input: '2 turkeys cost $60', groups: undefined ]

// (?=(...))
// let str = '1 turkey costs 30€';
// let regexp = /\d+(?=(€|kr))/;
// console.log(str.match(regexp));

// (?<=(...|...))
// str = '1 turkey costs $30';
// regexp = /(?<=(\$|£))\d+/;
// console.log(str.match(regexp));

// find non-negative integers
// let str = '0 12 -5 123 -18 -1000';
// let regexp = /(?<![-\d])\d+/g;
// console.log(str.match(regexp)) // [ '0', '12', '123' ]

// space
// console.log('\u2028'.match(/\s/));
// // [ ' ', index: 0, input: ' ', groups: undefined ]
// console.log('\u2029'.match(/\s/));
// // [ ' ', index: 0, input: ' ', groups: undefined ]

// regexp.exec()
// let str = 'app le orange';

// 'g'
// let regexp = /\w+/g;
// console.log(regexp.lastIndex);
// // 0 // initially lastIndex = 0
// console.log(regexp.exec(str));
// // [ 'app', index: 0, input: 'app le orange', groups: undefined ]
// console.log(regexp.lastIndex);
// // 3
// console.log(regexp.exec(str));
// // [ 'le', index: 4, input: 'app le orange', groups: undefined ]
// console.log(regexp.lastIndex);
// // 6

// // 'y'
// regexp = /\w+/y;
// console.log(regexp.lastIndex);
// // 0 // initially lastIndex = 0
// console.log(regexp.exec(str));
// // [ 'app', index: 0, input: 'app le orange', groups: undefined ]
// console.log(regexp.lastIndex);
// // 3
// console.log(regexp.exec(str));
// // null
// console.log(regexp.lastIndex);
// // 0

// lastIndex
// let str = 'app le orange';
// let regexp = /\w+/g;

// regexp.lastIndex = 4;
// console.log(regexp.exec(str));
// // [ 'le', index: 4, input: 'app le orange', groups: undefined ]
// console.log(regexp.lastIndex);
// // 6

// regexp = /\w+/y;
// regexp.lastIndex = 4;
// console.log(regexp.exec(str));
// // [ 'le', index: 4, input: 'app le orange', groups: undefined ]
// console.log(regexp.lastIndex);
// // 6

// regexp.lastIndex = 3;
// console.log(regexp.exec(str));
// // null
// console.log(regexp.lastIndex);
// // 0

// str.split()
// console.log('12-34-56'.split('-')) // [ '12', '34', '56' ]
// console.log('12, 34, 56'.split(/,\s*/)) // [ '12', '34', '56' ]

// Symbol.split
// let str = '12-34-56-78';

// class SplitBySlash {
//   [Symbol.split](separator, str) {
//     let arr = Array.from(str, (x) => {
//       if (!x.indexOf(separator)) {
//         return '\\';
//       }
//       return x
//     })
//     return arr.join('');
//   }
// }

// let test = new SplitBySlash();
// console.log(test[Symbol.split]('-', str));
// // '12\34\56\78'

// str.search(regexp)
// let str = 'A drop of ink may make a million think';
// console.log(str.search(/ink/i)); // 10

// Symbol.search
// let str = '1234123456'
// class MultipleSearch {
//   [Symbol.search](str, target) {
//     let arr = Array.from(str);
//     let indices = []
//     for (let i = 0; i < str.length; i++) {
//       if (arr[i] === target) {
//         indices.push(i)
//       }
//     }
//     return indices;
//   }
// }

// let test = new MultipleSearch()
// console.log(test[Symbol.search](str, '1')); // [ 0, 4 ]

// function replacer
// let str = 'html and css';
// let result = str.replace(/html|css/gi, (str) => str.toUpperCase());
// console.log(result); // HTML and CSS

// let str = 'John Snow';
// let result = str.replace(/(\w+) (\w+)/, (match, name, surname) => `${surname}, ${name}`);
// console.log(result) // Snow, John
// // note: it just like `match()` that returns result[0], result[1], result[2]...

// let str = 'John Snow';
// let result = str.replace(/(?<name>\w+) (?<surname>\w+)/, (...match) => {
//   let groups = match.pop(); // take the last element
//   return `${groups.surname}, ${groups.name}`;
// })
// console.log(result) // Snow, John

// str.replaceAll()
// console.log('12-34-56-78'.replaceAll('-', ':'));
// // 12:34:56:78
// console.log('12-34-56-78'.replace('-', ':'));
// // 12:34-56-78
// console.log('12-34-56-78'.replace(/-/g, ':'));
// // 12:34:56:78


// let { groups: { one, two } } = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
// console.log(one, two);
// // foo bar

// let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
// console.log('2015-01-02'.replace(re, '$<day>/$<month>/$<year>'));
// // 02/01/2015

console.log(`${'\u2028', '\u2029'}`);
console.log(JSON.stringify('\u{D834}'));
console.log(JSON.stringify('\uDF06\uD834'));