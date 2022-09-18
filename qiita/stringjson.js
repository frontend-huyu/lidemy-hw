// padStart()
// console.log('123'.padStart(5, '0')); // '00123'

// const fullNumber = '012345678910';
// const lastFourDigits = fullNumber.slice(-4);
// let maskedNumber = lastFourDigits.padStart(fullNumber.length, '*');
// console.log(maskedNumber); // ********8910

// function maskedNum(str, unmaskedLength) {
//   if (/^\d+$/.test(str)) {
//     return '*'.repeat(str.length - unmaskedLength) + str.slice(-(unmaskedLength));
//   }
//   return 'Invalid input';
// }
// console.log(maskedNum('012345678910', 4)) // ********8910
// console.log(maskedNum('a12345678910', 4)) // Invalid input

// str.padEnd(targetLength[, padString])
// console.log('abcdef'.padEnd(10, '.')); // abcdef....

// function bannerString(str, targetLength) {
//   if ((str.length - 1) <= (targetLength - 3)) {
//     return str + '.'.repeat(3);
//   }
//   return str.slice(0, targetLength - 3) + '.'.repeat(3);
// }

// let input = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
// console.log(bannerString(input, 30));
// // Lorem ipsum dolor sit amet,...
// console.log(bannerString(input, 60));
// // Lorem ipsum dolor sit amet, consectetur adipiscing elit....
// console.log(bannerString(input, 90));
// // Lorem ipsum dolor sit amet, consectetur adipiscing elit....

// trimStart(), trimEnd(), trim()
// let str = '     Lorem  123 ';
// console.log(str.length);
// // 16
// console.log(str.trimStart(), str.trimStart().length);
// // Lorem  123  11
// console.log(str.trimEnd(), str.trimEnd().length);
// //      Lorem  123 15
// console.log(str.trim(), str.trim().length);
// // Lorem  123 10

// let str = '\t\f\r\n\v\u0020\u00a0\u3000\u2028\u2029Lorem\t\f\r\n\v\u0020\u00a0\u3000\u2028\u2029';
// console.log(str.length);
// // 25
// console.log(str.trimStart().length);
// // 15
// console.log(str.trimEnd().length);
// // 15
// console.log(str.trim().length);
// // 5

// for...of & Array.from
// let str = '🍎🍇🍎🥕🍒';
// for (let item of str) {
//   console.log(item.codePointAt(0));
// }
// // 127822
// // 127815
// // 127822
// // 129365
// // 127826

// function countCodePoints(str, target) {
//   let count = 0;
//   Array.from(str, (x) => {
//     if (x === target) count += 1;
//   })
//   return count;
// }

// console.log(countCodePoints(str, '🍎')); // 2

// JSON
// let user = {
//   name: 'John',
//   age: 30,

//   toString() {
//     return `{name: '${this.name}', age: ${this.age}}`;
//   }
// };
// console.log(user.toString()); // {name: 'John', age: 30}

// Array - String, Number, boolean, null
// let jsonArr = JSON.stringify(['1', 2, 'true', false, null, NaN, Infinity]);
// console.log(jsonArr);
// // ["1",2,"true",false,null,null,null]
// console.log(JSON.parse(jsonArr));
// // [
// //   '1', 2,
// //   'true', false,
// //   null, null,
// //   null
// // ]


// Object
// let jsonObj = JSON.stringify({
//   a: '1',
//   b: 2,
//   c: 'true',
//   d: false,
//   e: null,
//   f: NaN,
//   g: Infinity,
//   h: {
//     a: '5'
//   },
//   i: [4, 5, 6],
//   myMethod() {
//     console.log('myMethod');
//   },
//   [Symbol('id')]: 123,
//   j: Symbol('foo'),
//   k: undefined
// })
// console.log(jsonObj);
// // {"a":"1","b":2,"c":"true","d":false,"e":null,"f":null,"g":null,"h":{"a":"5"},"i":[4, 5, 6]}


// console.log(JSON.parse(jsonObj));
/*
{
  a: '1',
  b: 2,
  c: 'true',
  d: false,
  e: null,
  f: null,
  g: null,
  h: { a: '5' },
  i: [ 4, 5, 6 ]
}
*/

// console.log(JSON.parse(jsonObj, (key, value) => {
//   if (value === null) return
//   return value;
// }));
// // { a: '1', b: 2, c: 'true', d: false, h: { a: '5' }, i: [ 4, 5, 6 ] }

// // object wrapper => json => corresponding value
// // console.log(typeof (new Number(5)));// object
// let num = JSON.stringify(new Number(5));
// console.log(num);
// // 5 // string
// console.log(JSON.parse(num));
// // 5 // number

// // console.log(typeof (new String('abc'))); // object
// let str = JSON.stringify(new String('abc'));
// console.log(str);
// // "abc" // string with double quotes
// console.log(JSON.parse(str));
// // abc // string

// // object(dateString) => json => string
// // console.log(typeof (new Date())); // object
// let date = JSON.stringify(new Date());
// console.log(date);
// // "2022-09-15T19:13:11.133Z" // string with double quotes
// console.log(JSON.parse(date));
// // 2022-09-15T19:13:11.133Z // string
// console.log(Date.parse(JSON.parse(date)));
// // 1663269191133 // number
// console.log(Date.parse(date));
// // NaN

// circular structure/circular references
// let room = {
//   number: 10
// }

// let guests = {
//   title: 'Party',
//   participants: ['Taro', 'Jiro']
// };
// guests.place = room;
// room.occupiedBy = guests;

// console.log(guests.place, room.occupiedBy);
// /*
// <ref *1> {
//   number: 10,
//   occupiedBy: {
//     title: 'Party',
//     participants: [ 'Taro', 'Jiro' ],
//     place: [Circular *1]
//   }
// } <ref *1> {
//   title: 'Party',
//   participants: [ 'Taro', 'Jiro' ],
//   place: { number: 10, occupiedBy: [Circular *1] }
// }
// */
// console.log(JSON.stringify(guests));
// // TypeError: Converting circular structure to JSON

// type
// console.log(typeof (JSON.stringify(''))); // string
// console.log(typeof (JSON.stringify({}))); // string
// console.log(typeof (JSON.stringify([]))); // string

// newline/terminator in json
// const horizontalTab = '\u0009'; // '\t'
// const verticalTab = '\u000b'; // '\v'
// const formFeed = '\u000c'; // '\f'
// const carriageReturn = '\u000d'; // '\r'
// const lineFeed = '\u000a'; // '\n'

// const whiteSpace = '\u0020';
// const nonBreakingSpace = '\u00a0';
// const ideographicSpace = '\u3000';
// const lineSeparator = '\u2028';
// const paragraphSeparator = '\u2029';

// const reverseSolidus = '\u005c'; // '\\' backslash

// console.log(JSON.parse('"foo"')); // foo 
// console.log(JSON.parse('"\u0009"'));
// // SyntaxError: Unexpected token    in JSON at position 1

// const json = JSON.stringify({
//   horizontalTab: '\u0009',
//   verticalTab: '\u000b',
//   formFeed: '\u000c',
//   carriageReturn: '\u000d',
//   lineFeed: '\u000a',
//   whiteSpace: '\u0020',
//   nonBreakingSpace: '\u00a0',
//   ideographicSpace: '\u3000',
//   lineSeparator: '\u2028',
//   paragraphSeparator: '\u2029',
//   reverseSolidus: '\u005c'
// });
// console.log(json);
// /*
// {"horizontalTab":"\t","verticalTab":"\u000b","formFeed":"\f","carriageReturn":"\
// r","lineFeed":"\n","whiteSpace":" ","nonBreakingSpace":" ","ideographicSpace":"
//  ","lineSeparator":"","paragraphSeparator":"","reverseSolidus":"\\"}
// */
// console.log(JSON.parse(json));
// // {
// //   horizontalTab: '\t',
// //   verticalTab: '\x0B',
// //   formFeed: '\f',
// //   carriageReturn: '\r',
// //   lineFeed: '\n',
// //   whiteSpace: ' ',
// //   nonBreakingSpace: ' ',
// //   ideographicSpace: '　',
// //   lineSeparator: '',
// //   paragraphSeparator: '',
// //   reverseSolidus: '\\'
// // }

// let str = '"abc\u2028def\u2029ghi"';
// console.log(JSON.parse(str));
// // abc def ghi

// str = `"abc\u2028def\u2029ghi"`
// console.log(JSON.parse(str));
// // abc def ghi

// // newline/terminator at the head or tail
// str = '"\u0009abc\u2028def\u2029ghi"';
// console.log(JSON.parse(str));
// // SyntaxError: Unexpected token    in JSON at position 1

// str = '"abc\u2028def\u2029ghi\u000b"';
// console.log(JSON.parse(str));
// /*
// SyntaxError: Unexpected token
//                                in JSON at position 12
// */

// str = `"\u0009abc\u2028def\u2029ghi"`
// console.log(JSON.parse(str));
// // SyntaxError: Unexpected token    in JSON at position 1

// str = `"abc\u2028def\u2029ghi\u000b"`
// console.log(JSON.parse(str));
// /*
// SyntaxError: Unexpected token
//                                in JSON at position 12
// */


// let json = '"\u2028abc\u2028def\u2029ghi\u2029"';

// // trim()
// function trimmedJsonString(json) {
//   let str = json.slice(1, json.length - 1);
//   return `"${str.trim()}"`;
// }
// console.log(JSON.parse(trimmedJsonString(json)));
// // abc def ghi

// // replace()
// function replacedJsonString(json) {
//   let str = json.slice(1, json.length - 1);
//   return `"${str.replace(/^\s+|\s+$/, '')}"`;
// }
// console.log(JSON.parse(replacedJsonString(json)));
// // abc def ghi

// function replacedBySpace(json) {
//   let str = json.slice(1, json.length - 1);
//   return `"${str.replace(/\s+/g, ' ')}"`;
// }
// console.log(JSON.parse(replacedBySpace(json)));
// //  abc def ghi 

// let json = '"\u2028\u2028abc\u2028def\u2029ghi\u2029\u2029"';
// function escapedJsonString(json) {
//   let str = json.slice(1, json.length - 1);
//   return `"${str.
//     replace(/\u2028/g, '\\u2028').
//     replace(/\u2029/g, '\\u2029')}"
//     `;
// }
// console.log(JSON.parse(escapedJsonString(json)));
// //   abc def ghi

// replacer
// let room = {
//   number: 10
// };
// let guests = {
//   title: 'Party',
//   participants: ['Taro', 'Jiro']
// };
// guests.place = room;
// room.occupiedBy = guests;
// console.log(JSON.stringify(guests, ['title', 'participants']))


// let room = {
//   number: 10
// };
// let guests = {
//   title: 'Party',
//   participants: [{ name: 'Taro' }, { name: 'Jiro' }],
//   place: room
// };
// room.occupiedBy = guests;

// console.log(JSON.stringify(guests, ['title', 'participants']));
// // {"title":"Party","participants":[{},{}]}
// console.log(JSON.stringify(guests, ['title', 'participants', 'name', 'place', 'number']));
// // {"title":"Party","participants":[{"name":"Taro"},{"name":"Jiro"}],"place":{"number":10}}
// console.log(JSON.stringify(guests, ['title', 'number', 'name', 'place', 'participants']));
// // {"title":"Party","place":{"number":10},"participants":[{"name":"Taro"},{"name":"Jiro"}]}

// console.log(JSON.stringify(guests, ['occupiedBy']));
// // {}
// console.log(JSON.stringify(guests, ['title', 'occupiedBy']));
// // {"title":"Party"}
// console.log(JSON.stringify(guests, ['place', 'occupiedBy']));
// // TypeError: Converting circular structure to JSON

// console.log(JSON.stringify(guests, (key, value) => {
//   return (key === 'occupiedBy') ? undefined : value;
// }));
// // {"title":"Party","participants":[{"name":"Taro"},{"name":"Jiro"}],"place":{"number":10}}

// let user = {
//   name: 'Taro',
//   age: 26,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };
// console.log(JSON.stringify(user));
// // {"name":"Taro","age":26,"roles":{"isAdmin":false,"isEditor":true}}
// console.log(JSON.stringify(user, null, 2));
/*
{
  "name": "Taro",
  "age": 26,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

// toJSON
// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   room
// };
// console.log(JSON.stringify(room)); // {"number":23}
// console.log(JSON.stringify(meetup)); // {"title":"Conference","room":{"number":23}}

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };
// let meetup = {
//   title: "Conference",
//   room
// };
// console.log(JSON.stringify(room)); // 23
// console.log(JSON.stringify(meetup)); // {"title":"Conference","room":23}

// JSON.parse()
// let str = '{"name": "Taro", "birthday": "1995-07-05T16:00:00.000Z"}';
// let person = JSON.parse(str, (key, value) => {
//   if (key === 'birthday') return new Date(value);
//   return value;
// });
// console.log(`${person.name}'s birthday is ${person.birthday.toDateString()}`);
// // Taro's birthday is Thu Jul 06 1995

// practice
// let room = {
//   number: 10
// };
// let guests = {
//   title: 'Party',
//   participants: [{ name: 'Taro' }, { name: 'Jiro' }],
//   place: room
// };
// room.occupiedBy = guests;
// guests.self = guests;

// console.log(JSON.stringify(guests, (key, value) => {
//   // console.log(key)
//   return (key !== '' && value === guests) ? undefined : value;
// }))
// // {"title":"Party","participants":[{"name":"Taro"},{"name":"Jiro"}],"place":{"number":10}}

// unicode in JSON
// well-formed JSON.stringify
// console.log(JSON.stringify('\ud834')); // "\ud834"
// console.log(JSON.stringify('\udf06\ud834')); // "\udf06\ud834"
// console.log(JSON.stringify('\ud834\udf06')); // "𝌆"
// console.log(JSON.parse(JSON.stringify('\ud834\udf06'))); // 𝌆

// console.log(JSON.stringify('\ud834') === '"\\ud834"'); // true
// console.log(JSON.stringify('\udf06') === '"\\udf06"'); // true

// let str = '\ud834\udf06\ud834abc\ud834\udf06';
// console.log(JSON.stringify(str, (key, value) => {
//   return value.replace(/[\ud800-\udfff]/g, '')
// }));
// // "abc"

// surrogate pair in string
// let str = '\ud834\udf06\ud834abc\ud834\udf06';

// function findSurrogatePair(str) {
//   let arr = Array.from(str, (item) => {
//     if (item.codePointAt() > 65535) {
//       return `0x${item.codePointAt().toString(16)}/`
//     }
//     return item;
//   });
//   return arr.join('')
// }

// function findSurrogatePair(str) {
//   return Array.from(str, (item) => {
//     return (item.codePointAt() > 65535) ?
//       `0x${item.codePointAt().toString(16)}/` : item
//   }).join('');
// }

// let json = JSON.stringify(str, (key, value) => {
//   let fixedString = findSurrogatePair(value);
//   return fixedString.replace(/[\ud800-\udfff]/g, '');
// });
// console.log(json);
// // "0x1d306/abc0x1d306/"

// let jsonToString = JSON.parse(json);
// console.log(jsonToString);
// // \u{1d306}abc\u{1d306} // !?
// console.log('\u{1d306}abc\u{1d306}');
// // 𝌆abc𝌆

// let jsonToString = JSON.parse(json, (key, value) => {
//   return value.replace(/0x[a-f0-9]{5,6}\//g, (item) => {
//     let str = item.slice(0, item.length - 1);
//     return String.fromCodePoint(str);
//   })
// });
// console.log(jsonToString);
// // 𝌆abc𝌆

// // surrogate pair in string
// function surrogateStringToJSON(str) {
//   let fixedString = Array.from(str, (item) => {
//     return (item.codePointAt() > 65535) ?
//       `0x${item.codePointAt().toString(16)}/` : item
//   }).join('').replace(/[\ud800-\udfff]/g, '');

//   return JSON.stringify(fixedString);
// }
// console.log(surrogateStringToJSON(str))
// // "0x1d306/abc0x1d306/"

// function surrogateJSONToString(json) {
//   let fixedJson = json.replace(/0x[a-f0-9]{5,6}\//g, (item) => {
//     let str = item.slice(0, item.length - 1);
//     return String.fromCodePoint(str);
//   })
//   return JSON.parse(fixedJson);
// }
// console.log(surrogateJSONToString(surrogateStringToJSON(str)))
// // 𝌆abc𝌆

// surrogate pair in obj
let obj = {
  string1: '𝌆abc𝌆',
  string2: '\ud834\udf06\ud834abc\ud834\udf06',
  string3: 'def',
  num: 1,
  Boolean: true,
}

let json = JSON.stringify(obj, (key, value) => {
  if (key !== '' && typeof value === 'string') {
    let fixedObj = findSurrogatePair(value);
    return fixedObj.replace(/[\ud800-\udfff]/g, '');
  }
  return value
});
console.log(json);
// {"string1":"0x1d306/abc0x1d306/","string2":"0x1d306/abc0x1d306/","string3":"def","num":1,"Boolean":true}


let jsonToObj = JSON.parse(json, (key, value) => {
  if (key !== '' && typeof value === 'string') {
    return value.replace(/0x[a-f0-9]{5,6}\//g, (item) => {
      let str = item.slice(0, item.length - 1);
      return String.fromCodePoint(str);
    })
  }
  return value;
});
console.log(jsonToObj);
// {string1: '𝌆abc𝌆', string2: '𝌆abc𝌆', string3: 'def', num: 1, Boolean: true}

// surrogate pair in obj
function findSurrogatePair(str) {
  return Array.from(str, (item) => {
    return (item.codePointAt() > 65535) ?
      `0x${item.codePointAt().toString(16)}/` : item
  }).join('');
}

function surrogateObjToJSON(obj) {
  return JSON.stringify(obj, (key, value) => {
    if (key !== '' && typeof value === 'string') {
      return Array.from(value, (item) => {
        return (item.codePointAt() > 65535) ?
          `0x${item.codePointAt().toString(16)}/` : item
      }).join('').replace(/[\ud800-\udfff]/g, '');
    }
    return value
  })
}
console.log(surrogateObjToJSON(obj))

function surrogateJSONToObj(json) {
  return JSON.parse(json, (key, value) => {
    if (key !== '' && typeof value === 'string') {
      return value.replace(/0x[a-f0-9]{5,6}\//g, (item) => {
        let str = item.slice(0, item.length - 1);
        return String.fromCodePoint(str);
      })
    }
    return value;
  })
}
console.log(surrogateJSONToObj(surrogateObjToJSON(obj)))

// console.log(~2); // -3 = -(2+1)
// console.log(~1); // -2 = -(1+1)
// console.log(~0); // -1 = -(0+1)
// console.log(~-1); // 0 = -(-1+1)
