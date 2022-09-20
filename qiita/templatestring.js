// let str = `
// <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
// `.trim()
// console.log(str)
// /*
// <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
// */
// let obj = {
//   x: 1,
//   y: 2
// };
// let re = {
//   x: `${obj.x}`,
//   y: `${obj.y}`
// }
// console.log(re)
// // { x: '1', y: '2' } // value is string

// let userName = [
//   { first: 'Taro', last: 'Yamada' },
//   { first: 'Jiro', last: 'Yamada' }
// ];
// let temp = (address) => `
// <table>
//   ${address.map((x) => `
//   <tr><td>${x.first}</td></tr>
//   <tr><td>${x.last}</td></tr>
//   `).join('').trim()}
// </table>
// `.trim();
// console.log(temp(userName))
// /*
// <table>
//   <tr><td>Taro</td></tr>
//   <tr><td>Yamada</td></tr>

//   <tr><td>Jiro</td></tr>
//   <tr><td>Yamada</td></tr>
// </table>
// */

// URL
// const base = 'http://example.com/resouces/';
// const path = '/example.js';

// function getResource(baseURL, pathName) {
//   return `${baseURL.replace(/\/$/, '')}${pathName}`
// }
// console.log(getResource(base, path));
// // http://example.com/resouces/example.js

// tagged template/tagged function
// function fullName(str) {
//   console.log(str)
// }

// fullName(`First name is ${'Taro'}, last name is ${'Yamada'}`);
// // First name is Taro, last name is Yamada

// function fullName(first, ...last) {
//   console.log(arguments);
//   console.log(first);
//   console.log(last);
// }
// fullName`First name is ${'Taro'}, last name is ${'Yamada'}.`
// /*
// [Arguments] {
//   '0': [ 'First name is ', ', last name is ', '.' ],
//   '1': 'Taro',
//   '2': 'Yamada'
// }
// */
// // ['First name is ', ', last name is ', '.']
// // ['Taro', 'Yamada']



// reduce((previousValue, currentValue, currentIndex))
// function stringRaw(strings, ...values) {
//   // console.log(arguments)
//   // [Arguments] {
//   //   '0': [ 'First name is ', ', last name is ', '.' ],
//   //   '1': 'Taro',
//   //   '2': 'Yamada'
//   // }

//   return strings.reduce((first, str, i) => {
//     console.log([first, values[i - 1], str]);
//     return first + values[i - 1] + str;
//   });
// }
// console.log(stringRaw`First name is ${'Taro'}, last name is ${'Yamada'}.`)
// ['First name is ', 'Taro', ', last name is ']
// ['First name is Taro, last name is ', 'Yamada', '.']
/*
 note:
/First name is /${'Taro'}/, last name is /
/    first     /values[0]/     str      / => return value to second time reduce()
/First name is ${'Taro'}, last name is /${'Yamada'}/./
/                  first               / values[1]/str/
*/
// First name is Taro, last name is Yamada.

// console.log(String.raw`First name is ${'Taro'}, last name is ${'Yamada'}.`)
// First name is Taro, last name is Yamada.
// let raw = function (strings, ...values) {
//   let output = '';
//   let i;
//   for (i = 0; i < values.length; i++) {
//     output += strings[i] + values[i];
//     console.log(output)
//   }

//   output += strings[i]
//   return output;
// }
// console.log(raw`First name is ${'Taro'}, last name is ${'Yamada'}.`)
// First name is Taro
// First name is Taro, last name is Yamada
// First name is Taro, last name is Yamada.
/* note:
/First name is /${'Taro'}/
    string[0]  /values[0]/ => output (first time)
/First name is ${'Taro'}/, last name is /${'Yamada'}/
            output      /   string[1]  / values[1] / => output (second time)
/First name is ${'Taro'}, last name is ${'Yamada'}/./
                    output                        /string[2]/
*/

// console.log(raw(['First name is ', ', last name is ', '.'], 'Taro', 'Yamada'))
// First name is Taro
// First name is Taro, last name is Yamada
// First name is Taro, last name is Yamada.

// let a = 5;
// let b = 10;
// console.log(stringRaw`Hello ${a + b} world ${a * b}`)
// ['Hello ', 15, ' world ']
// ['Hello 15 world ', 50, '']
// Hello 15 world 50

// console.log(raw`Hello ${a + b} world ${a * b}`)
// Hello 15
// Hello 15 world 50
// Hello 15 world 50
// console.log(raw(['Hello ', ' world ', ''], 15, 50))
// Hello 15
// Hello 15 world 50
// Hello 15 world 50
// console.log`123${a * b}`
// [ '123', '' ] 50

// note: it is the same with `...`tagged template, we can understand
// the arguments will always be parted to two portion, string and ${}.

// practice
// function saferHTML(strings, ...values) {
//   let result = ''
//   let i
//   for (i = 0; i < values.length; i++) {
//     let value = String.raw`${values[i]}`
//       .replace(/&/g, "&amp;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");
//     result += strings[i] + value
//   }
//   return (result + strings[i]);
// }

// let sender = '<script>alert("abc")</script>'; // malicious code
// let message = saferHTML`<p>${sender} has sent you a message.</p>`;
// console.log(message)
// // <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>


// URL
// const input = 'A&B';
// const escapedURL = String.raw`https://example.com/search?q=${input}&sort=desc`;
// console.log(escapedURL)
// // https://example.com/search?q=A&B&sort=desc
// console.log(encodeURIComponent(input))
// // A%26B

// function escapeURL(strings, ...values) {
//   return strings.reduce((result, str, i) => {
//     let value = String.raw`${values[i - 1]}`
//     return result + encodeURIComponent(value) + str;
//   });
// }

// const input = 'A&B';
// const escapedURL = escapeURL`https://example.com/search?q=${input}&sort=desc`;
// console.log(escapedURL)
// https://example.com/search?q=A%26B&sort=desc

// function escapeURL(strings, ...values) {
//   let output = '';
//   let i;
//   for (i = 0; i < values.length; i++) {
//     let value = String.raw`${values[i]}`
//     output += strings[i] + encodeURIComponent(value);
//   }
//   output += strings[i]
//   return output;
// }
// const input = 'A&B';
// const escapedURL = escapeURL`https://example.com/search?q=${input}&sort=desc`;
// console.log(escapedURL)
// // https://example.com/search?q=A%26B&sort=desc




// about property raw in array
// let a = 5;
// let b = 10;
// function tagged(strings, ...values) {
//   console.log(strings);
//   console.log(strings.raw);
//   console.log(values);
// }
// tagged`123\n${a * b}`
// // [ '123\n', '' ] // unescaped stings
// // [ '123\\n', '' ] // escaped strings
// // [ 50 ] // ${} results
