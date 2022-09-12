// let regexp = new RegExp('pattern', 'gmi');
// console.log(regexp instanceof RegExp);
// regexp = /pattern/gmi;
// console.log(regexp instanceof RegExp);

// let tag = 'h2';

// regexp = new RegExp(`<${tag}>`);

// console.log(regexp); // /<h2>/

// tag = /h2/;

// regexp = new RegExp(`<${tag}>`);
// console.log(regexp); // /<\/h2\/>/

// var result = "My name is Yamada".match(/My name is (.*)/d);
// console.log(result.indices[0]); // [0, 17] 文字列全体の開始・終了インデックス
// console.log(result.indices[1]); // [ 11, 17 ]

// console.log("My name is Yamada"[11]); // Y
// const str1 = 'foo bar foo';

// const regex1 = new RegExp('foo', 'gd');

// console.log(regex1.hasIndices); // 出力: true

// // let reg = "あいあ".match(/あ/d);
// let reg = "あいあ".match(/あ/id);

// console.log(reg);
// // [
// //   'あ',
// //   index: 0,
// //   input: 'あいあ',
// //   groups: undefined,
// //   indices: [[0, 1], groups: undefined]
// // ]

// console.log(reg.indices); // [ 0, 1 ]
// console.log(reg.groups); // undefined
// // console.log("あ".match(/\u{3042}/)); // null
// console.log("あ".match(/\u{3042}/u));

// let re = /quick\s(brown).+?(jumps)/ig;
// let result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');

// console.log(result);

// console.log('A'.match(/A/)); // [ 'A', index: 0, input: 'A', groups: undefined ]
// console.log('DABCD'.match(/ABC/)); // [ 'ABC', index: 1, input: 'DABCD', groups: undefined ]

// "." any single character (exclude newlines)
// console.log('AxyzA'.match(/A...A/));
// // [ 'AxyzA', index: 0, input: 'AxyzA', groups: undefined ]
// console.log('A\nA'.match(/A.A/));
// // null // newline is not included
// console.log('A\nA'.match(/A\sA/));
// // [ 'A\nA', index: 0, input: 'A\nA', groups: undefined ]

// ".*"
// console.log('abcdef'.match(/b.*/));
// // [ 'bcdef', index: 1, input: 'abcdef', groups: undefined ]

// "^" at starting position
// console.log('ABCDEF'.match(/^ABC/));
// // [ 'ABC', index: 0, input: 'ABCDEF', groups: undefined ]
// console.log('ABCDEF'.match(/^DEF/));
// // null
// console.log('ABC\nDEF'.match(/^DEF/));
// // null
// console.log('ABC\nDEF'.match(/^DEF/m));
// // [ 'DEF', index: 4, input: 'ABC\nDEF', groups: undefined ]
// // m: multiline

// "[^]"
// console.log('abcdef123\na123'.match(/a[^a-z].*/));
// // [ 'a123', index: 10, input: 'abcdef123\na123', groups: undefined ]
// console.log('abc012[]^$.'.match(/[^a-z0-9](\.*)/g));
// // [ '[', ']', '^', '$.' ]
// console.log('abc012[]^$.'.match(/[^a-z0-9]\.*/g));
// // [ '[', ']', '^', '$.' ]

// console.log('<ABC><DEF>'.match(/(<[^>]*>)/));
// // [ '<ABC>', '<ABC>', index: 0, input: '<ABC><DEF>', groups: undefined ]
// console.log('>ABC><DEF>'.match(/(<[^>]*>)/));
// // [ '<DEF>', '<DEF>', index: 5, input: '>ABC><DEF>', groups: undefined ]
// console.log('<<ABC>><DEF>'.match(/(<[^>]*>)/));
// // [
// //   '<<ABC>',
// //   '<<ABC>',
// //   index: 0,
// //   input: '<<ABC>><DEF>',
// //   groups: undefined
// // ]

// "$" at ending position
// console.log('ABCDEF'.match(/DEF$/));
// // ['DEF', index: 3, input: 'ABCDEF', groups: undefined]
// console.log('ABCDEF\nXYZ'.match(/DEF$/));
// // null
// console.log('ABCDEF\nXYZ'.match(/DEF$/m));
// // [ 'DEF', index: 3, input: 'ABCDEF\nXYZ', groups: undefined ]
// // m: multiline

// "^...$" & "^^" "$$" & "\^" "\$"
// console.log('abcde'.match(/^a...e$/));
// // [ 'abcde', index: 0, input: 'abcde', groups: undefined ]
// console.log('abc\ncd'.match(/^a..d$/m));
// // null
// console.log('abc\ncd\nabcd'.match(/^a..d$/m));
// // [ 'abcd', index: 7, input: 'abc\ncd\nabcd', groups: undefined ]
// console.log('abc\nd'.match(/^abc$/m));
// // [ 'abc', index: 0, input: 'abc\nd', groups: undefined ]

// console.log('^abc'.match(/^^a/));
// // null
// console.log('abc$'.match(/a$$/));
// // null

// console.log('^abc'.match(/\^a/));
// // [ '^a', index: 0, input: '^abc', groups: undefined ]
// console.log('^abc$'.match(/\^abc\$/));
// // [ '^abc$', index: 0, input: '^abc$', groups: undefined ]

// "[...]" bracket expression
// console.log('abcd-abcd'.match(/[a-c]/g));
// // ['a', 'b', 'c', 'a', 'b', 'c']
// // console.log('abcd-abcd'.match(/[a-c]/g).global); // undefined
// // console.log(/[a-c]/g.global); // true

// console.log('abcd-abcd'.match(/[abc-]/g));
// // [
// //   'a', 'b', 'c',
// //   '-', 'a', 'b',
// //   'c'
// // ]
// console.log('dd-dd'.match(/[-abc]/));
// // [ '-', index: 2, input: 'dd-dd', groups: undefined ]

// console.log('abcde'.match(/[^abc]/));
// // [ 'd', index: 3, input: 'abcde', groups: undefined ]
// console.log('abcdef'.match(/[^abc]*/));
// // [ '', index: 0, input: 'abcdef', groups: undefined ]
// console.log('abcdef'.match(/[^abc]+/));
// // [ 'def', index: 3, input: 'abcdef', groups: undefined ]
// console.log('abcde\nf'.match(/[^abc]+/));
// // [ 'de\nf', index: 3, input: 'abcde\nf', groups: undefined ]

// "[$^/*+.(){}[]]"
// console.log('$^/*+.{}()[]'.match(/[.+*/$^]/g));
// // [ '$', '^', '/', '*', '+', '.' ]
// console.log('$^/*+.{}()[]'.match(/[(){}[]]/g));
// // [ '[]' ]
// console.log('()'.match(/[(){}[]]/));
// // null
// console.log('{}'.match(/[(){}[]]/));
// // null
// console.log('abcdef'.match(/[(abc){1}]/));
// // [ 'a', index: 0, input: 'abcdef', groups: undefined ]

// console.log('abcdef'.match(/(abc){1}/));
// // [ 'abc', 'abc', index: 0, input: 'abcdef', groups: undefined ]

// (...) marked pattern (capturing group)
// console.log('abcdef'.match(/(abc)(def)/));
// [
//   'abcdef',
//   'abc',
//   'def',
//   index: 0,
//   input: 'abcdef',
//   groups: undefined
// ]

// (...)+(...)
// console.log('abcabcabcdef'.match(/(abc)+(def)/));
// [
//   'abcabcabcdef',
//   'abc',
//   'def',
//   index: 0,
//   input: 'abcabcabcdef',
//   groups: undefined
// ]

// (...)*(...)
// console.log('abcabcabcdef'.match(/(abc)*(def)/));
// // [
// //   'abcabcabcdef',
// //   'abc',
// //   'def',
// //   index: 0,
// //   input: 'abcabcabcdef',
// //   groups: undefined
// // ]
// console.log('xyzxyzxyzdef'.match(/(abc)*(def)/));
// // [
// //   'def',
// //   undefined,
// //   'def',
// //   index: 9,
// //   input: 'xyzxyzxyzdef',
// //   groups: undefined
// // ]

// (...)?(...)
// console.log('abcabcabcdef'.match(/(abc)?(def)/));
// // [
// //   'abcdef',
// //   'abc',
// //   'def',
// //   index: 6,
// //   input: 'abcabcabcdef',
// //   groups: undefined
// // ]
// console.log('xyzxyzxyzdef'.match(/(abc)?(def)/));
// // [
// //   'def',
// //   undefined,
// //   'def',
// //   index: 9,
// //   input: 'xyzxyzxyzdef',
// //   groups: undefined
// // ]


// // * matches the preceding element zero or more times
// console.log('ac'.match(/ab*c/));
// // [ 'ac', index: 0, input: 'ac', groups: undefined ]
// console.log('abc'.match(/ab*c/));
// // [ 'abc', index: 0, input: 'abc', groups: undefined ]
// console.log('abbbc'.match(/ab*c/));
// // [ 'abbbc', index: 0, input: 'abbbc', groups: undefined ]

// console.log('x'.match(/[xyz]*/)); // [ 'x', ... ]
// console.log('y'.match(/[xyz]*/)); // [ 'y', ... ]
// console.log('z'.match(/[xyz]*/)); // [ 'z', ... ]
// console.log('zx'.match(/[xyz]*/)); // [ 'zx', ... ]
// console.log('zyx'.match(/[xyz]*/)); // [ 'zyx', ... ]
// console.log('xyzzy'.match(/[xyz]*/)); // [ 'xyzzy', ... ]

// console.log('axcdyfgzi'.match(/[xyz]*/));
// // [ '', index: 0, input: 'axcdyfgzi', groups: undefined ]
// console.log('axyz'.match(/[xyz]*/));
// // [ '', index: 0, input: 'axyz', groups: undefined ]
// console.log('xyza'.match(/[xyz]*/));
// // [ 'xyz', index: 0, input: 'xyza', groups: undefined ]
// console.log('a\nxyz'.match(/[xyz]*/));
// // [ '', index: 0, input: 'a\nxyz', groups: undefined ]
// // note: [...]* means it matchs every element in starting position, or just ''

// "+" matches the preceding element one or more times
// console.log('ac'.match(/ab+c/));
// // null
// console.log('abc'.match(/ab+c/));
// // [ 'abc', index: 0, input: 'abc', groups: undefined ]
// console.log('abbbc'.match(/ab+c/));
// // [ 'abbbc', index: 0, input: 'abbbc', groups: undefined ]

// console.log('x'.match(/[xyz]+/)); // [ 'x', ... ]
// console.log('y'.match(/[xyz]+/)); // [ 'y', ... ]
// console.log('z'.match(/[xyz]+/)); // [ 'z', ... ]
// console.log('zx'.match(/[xyz]+/)); // [ 'zx', ... ]
// console.log('zyx'.match(/[xyz]+/)); // [ 'zyx', ... ]
// console.log('xyzzy'.match(/[xyz]+/)); // [ 'xyzzy', ... ]

// console.log('axcdyfgzi'.match(/[xyz]+/));
// // [ 'x', index: 1, input: 'axcdyfgzi', groups: undefined ]
// console.log('axyz'.match(/[xyz]+/));
// // [ 'xyz', index: 1, input: 'axyz', groups: undefined ]
// console.log('xyza'.match(/[xyz]+/));
// // [ 'xyz', index: 0, input: 'xyza', groups: undefined ]
// console.log('a\nxyz'.match(/[xyz]+/));
// // [ 'xyz', index: 2, input: 'a\nxyz', groups: undefined ]

// "?" matches the preceding element zero or one time
// console.log('ac'.match(/ab?c/));
// // [ 'ac', index: 0, input: 'ac', groups: undefined ]
// console.log('abc'.match(/ab?c/));
// // [ 'abc', index: 0, input: 'abc', groups: undefined ]
// console.log('apples'.match(/apples?/));
// // [ 'apples', index: 0, input: 'apples', groups: undefined ]
// console.log('apple'.match(/apples?/));
// // [ 'apple', index: 0, input: 'apple', groups: undefined ]
// console.log('apple\napples'.match(/apples?/g));
// // [ 'apple', 'apples' ]

// console.log('123'.match(/-?[0-9]/));
// // [ '1', index: 0, input: '123', groups: undefined ]
// console.log('-123'.match(/-?[0-9]/));
// // [ '-1', index: 0, input: '-123', groups: undefined ]
// console.log('123'.match(/-?[0-9]+/));
// // [ '123', index: 0, input: '123', groups: undefined ]
// console.log('-123'.match(/-?[0-9]+/));
// // [ '-123', index: 0, input: '-123', groups: undefined ]

// console.log('-123-456'.match(/-?(123)+(-456)/));
// // [
// //   '-123-456',
// //   '123',
// //   '-456',
// //   index: 0,
// //   input: '-123-456',
// //   groups: undefined
// // ]

// "A|B" matches either A or B
// console.log('abbdef'.match(/abc|def/));
// // [ 'def', index: 3, input: 'abbdef', groups: undefined ]
// console.log('abcdef'.match(/(abc)|(d)/));
// // [
// //   'abc',
// //   'abc',
// //   undefined,
// //   index: 0,
// //   input: 'abcdef',
// //   groups: undefined
// // ]
// console.log('abbdef'.match(/(abc)|(d)/));
// // [ 'd', undefined, 'd', index: 3, input: 'abbdef', groups: undefined ]

// {n}/{n,}/{n,m} matches the preceding element n~m times
// console.log('aaaaaa'.match(/a{3}/));
// // [ 'aaa', index: 0, input: 'aaaaaa', groups: undefined ]
// console.log('aaaaaa'.match(/a{3,5}/));
// // [ 'aaaaa', index: 0, input: 'aaaaaa', groups: undefined ]
// console.log('aaaaaa'.match(/a{3,}/));
// // [ 'aaaaaa', index: 0, input: 'aaaaaa', groups: undefined ]

// console.log('202209'.match(/[0-9]{4}/));
// // [ '2022', index: 0, input: '202209', groups: undefined ]
// console.log('2022\n09'.match(/[0-9]{5}/));
// null

// *?
// console.log('<abc><def>'.match(/<.*>/));
// // [ '<abc><def>', index: 0, input: '<abc><def>', groups: undefined ]
// console.log('<abc><def>'.match(/<.*?>/));
// // [ '<abc>', index: 0, input: '<abc><def>', groups: undefined ]
// console.log('<<><>>'.match(/<.*>/));
// // [ '<<><>>', index: 0, input: '<<><>>', groups: undefined ]
// console.log('<<><>>'.match(/<.*?>/));
// // [ '<<>', index: 0, input: '<<><>>', groups: undefined ]
// console.log('<>'.match(/<.*?>/));
// // [ '<>', index: 0, input: '<>', groups: undefined ]

// +?
// console.log('<abc><def>'.match(/<.+>/));
// // [ '<abc><def>', index: 0, input: '<abc><def>', groups: undefined ]
// console.log('<abc><def>'.match(/<.+?>/));
// // [ '<abc>', index: 0, input: '<abc><def>', groups: undefined ]
// console.log('<<><>>'.match(/<.+>/));
// // [ '<<><>>', index: 0, input: '<<><>>', groups: undefined ]
// console.log('<<><>>'.match(/<.+?>/));
// // [ '<<>', index: 0, input: '<<><>>', groups: undefined ]
// console.log('<>'.match(/<.+?>/));
// // null

// ??
// console.log('<abc><def>'.match(/ab?/));
// // [ 'ab', index: 1, input: '<abc><def>', groups: undefined ]
// console.log('<abc><def>'.match(/ab??/));
// // [ 'a', index: 1, input: '<abc><def>', groups: undefined ]
// console.log('<ac><def>'.match(/ab??/));
// // [ 'a', index: 1, input: '<ac><def>', groups: undefined ]

// {n,m}?
// console.log('aaaaaa'.match(/a{3,5}/));
// // [ 'aaaaa', index: 0, input: 'aaaaaa', groups: undefined ]
// console.log('aaaaaa'.match(/a{3,5}?/));
// // [ 'aaa', index: 0, input: 'aaaaaa', groups: undefined ]

// (...) => [0]...[n]
// console.log('abcabc'.match(/(abc)/));
// // [ 'abc', 'abc', index: 0, input: 'abcabc', groups: undefined ]
// console.log('abcabc'.match(/(abc)/)[1]);
// // abc
// let yymd = '2022.09.05'.match(/([0-9]{4}).([0-9]{2}).([0-9]{2})/);
// console.log(yymd);
// // [
// //   '2022.09.05',
// //   '2022',
// //   '09',
// //   '05',
// //   index: 0,
// //   input: '2022.09.05',
// //   groups: undefined
// // ]
// console.log(yymd[1], yymd[2], yymd[3]);
// // 2022 09 05

// let m = 'I am trying to figure out how to write regexp.\n And how it works in JavaScript.';
// console.log(m.match(/\bre/));
// // [
// //   're',
// //   index: 39,
// //   input: 'I am trying to figure out how to write regexp.\n' +
// //     ' And how it works in JavaScript.',
// //   groups: undefined
// // ]
// // note: regexp
// console.log(m.match(/re\b/));
// // [
// //   're',
// //   index: 19,
// //   input: 'I am trying to figure out how to write regexp.\n' +
// //   ' And how it works in JavaScript.',
// //   groups: undefined
// // ]
// // note: figure
// console.log(m.match(/\Bva/));
// [
//   'va',
//   index: 70,
//   input: 'I am trying to figure out how to write regexp.\n' +
//     ' And how it works in JavaScript.',
//   groups: undefined
// ]
// note: JavaScript

// m = 'I like JavaScript. I want to learn more about programming.';
// console.log(m.match(/\bJavaScript\b/));
// // [
// //   'JavaScript',
// //   index: 7,
// //   input: 'I like JavaScript. I want to learn more about programming.',
// //   groups: undefined
// // ]

// \d
// console.log('1a2b'.match(/\d/));
// // [ '1', index: 0, input: '1a2b', groups: undefined ]
// console.log('1a2b'.match(/\d/g));
// // [ '1', '2' ]

// console.log('123'.match(/^\d+$/));
// // [ '123', index: 0, input: '123', groups: undefined ]
// console.log('1 2 3'.match(/^\d+$/));
// // null

// console.log('1aa2'.match(/^\d..\d$/));
// // [ '1aa2', index: 0, input: '1aa2', groups: undefined ]

// \D
// console.log('1a2b'.match(/\D/));
// // [ 'a', index: 1, input: '1a2b', groups: undefined ]
// console.log('1a2b'.match(/\D/g));
// // [ 'a', 'b' ]

// \w
// console.log('a!b@c#A$B%C^0&1*2(){}[]'.match(/\w/g));
// // [
// //   'a', 'b', 'c',
// //   'A', 'B', 'C',
// //   '0', '1', '2'
// // ]

// \W
// console.log('a!b@c#A$B%C^0&1*2(){}[]'.match(/\W/g));
// // [
// //   '!', '@', '#', '$',
// //   '%', '^', '&', '*',
// //   '(', ')', '{', '}',
// //   '[', ']'
// // ]

// \s
// console.log('abc\nABC\r012\t()\f{}\v[]'.match(/\s/g));
// [ '\n', '\r', '\t', '\f', '\x0B' ]

// SP
// console.log('a b'.match(/\x20/));
// // [ ' ', index: 1, input: 'a b', groups: undefined ]
// console.log('a b'.match(/\u0020/));
// // [ ' ', index: 1, input: 'a b', groups: undefined ]
// console.log('a b'.match(/\s/));
// // [ ' ', index: 1, input: 'a b', groups: undefined ]
// console.log('a b'.match(/ /));
// // [ ' ', index: 1, input: 'a b', groups: undefined ]

// NBSP
// console.log('a b'.match(/\u00A0/));
// // [ ' ', index: 1, input: 'a b', groups: undefined ]
// console.log('\u00A0'.match(/\s/));
// // [ ' ', index: 0, input: ' ', groups: undefined ]
// // note: $nbsp(html)

// Ideographic space(全角スペース)
// console.log('　'.match(/\u3000/));
// // [ '　', index: 0, input: '　', groups: undefined ]
// console.log('　'.match(/\s/));
// // [ '　', index: 0, input: '　', groups: undefined ]

// \S
// console.log('abc\nABC\r012\t()\f{}\v[]'.match(/\S/g));
// [
//   'a', 'b', 'c', 'A',
//   'B', 'C', '0', '1',
//   '2', '(', ')', '{',
//   '}', '[', ']'
// ]

// [\b]
// console.log('\x08'.match(/[\b]/));
// // [ '\b', index: 0, input: '\b', groups: undefined ]
// console.log('abc\bdef'.match(/[\b]/));
// // [ '\b', index: 3, input: 'abc\bdef', groups: undefined ]
// console.log('\b'.match(/\b/));
// // null

// \0
// let n = String.fromCharCode('\u0000');
// console.log(n.match(/\0/));
// // [ '\x00', index: 0, input: '\x00', groups: undefined ]
// console.log('\x00'.match(/\0/));
// // [ '\x00', index: 0, input: '\x00', groups: undefined ]

// console.log(''.match(/\0/));
// // null

// console.log('\x00'.match(/\x00/));
// // [ '\x00', index: 0, input: '\x00', groups: undefined ]
// console.log('\x00'.match(/\u0000/));
// // [ '\x00', index: 0, input: '\x00', groups: undefined ]

// \cX
// (CR LF)
// let n = '\u000D\u000A';
// console.log(n.match(/\cM/));
// // [ '\r', index: 0, input: '\r\n', groups: undefined ]
// n = '\x0D\x0A';
// console.log(n.match(/\cM/));
// // [ '\r', index: 0, input: '\r\n', groups: undefined ]
// console.log('abc\nABC\r012\t()\f{}\v[]'.match(/\cM/g));
// // [ '\r' ]

// \xhh
// (CR LF)
// console.log('\x00\x08'.match(/\0/));
// // [ '\x00', index: 0, input: '\x00\b', groups: undefined ]
// console.log('\x00\x08'.match(/[\b]/));
// // [ '\b', index: 1, input: '\x00\b', groups: undefined ]
// console.log('\x08' === '\b'); // true

// \uhhhh
// あ(U+3042)
// console.log('あ'.charCodeAt()); // 12354
// console.log('あ'.codePointAt()); // 12354

// console.log('あ'.charCodeAt().toString(16)); // 3042
// console.log('\u3042'); // あ

// \u{hhhh} & \u{hhhhh}
// // あ(U+3042)
// console.log('\u{3042}'); // あ

// console.log('𩸽'.charCodeAt()); // 55399
// console.log('𩸽'[0].charCodeAt()); // 55399
// console.log('𩸽'[1].charCodeAt()); // 56893

// console.log('𩸽'.charCodeAt().toString(16)); // d867
// console.log('\ud867');

// console.log('𩸽'.codePointAt()); // 171581
// console.log('𩸽'.codePointAt().toString(16)); // 29e3d
// console.log('\u{29e3d}'); // 𩸽

// function isSurrogate(str) {
//   return str.match(/[\uD800-\uDBFF]|[\uDC00-\uDFFF]/g);
// }
// console.log(isSurrogate('𩸽'));
// // [ '\ud867', '\ude3d' ]

// (?=)
// console.log('abcdef'.match(/(abc)(?=def)/));
// // [ 'abc', 'abc', index: 0, input: 'abcdef', groups: undefined ]
// console.log('abcdef'.match(/abc(?=def)/));
// // [ 'abc', index: 0, input: 'abcdef', groups: undefined ]
// console.log('abcdef'.match(/c(?=def)/));
// // [ 'c', index: 2, input: 'abcdef', groups: undefined ]

// console.log('abcdef'.match(/(abc)(def)/));
// // [
// //   'abcdef',
// //   'abc',
// //   'def',
// //   index: 0,
// //   input: 'abcdef',
// //   groups: undefined
// // ]

// (?<=)
// console.log('abcdef'.match(/(?<=abc)(def)/));
// // [ 'def', 'def', index: 3, input: 'abcdef', groups: undefined ]

// (?!)
// console.log('abcxyz'.match(/(abc)(?!def)/));
// // [ 'abc', 'abc', index: 0, input: 'abcxyz', groups: undefined ]

// (?<!)
// console.log('xyzdef'.match(/(?<!abc)(def)/));
// // [ 'def', 'def', index: 3, input: 'xyzdef', groups: undefined ]

// (?:...)
// console.log('abcdefxyz'.match(/(abc)(?:def)(xyz)/));
// // [
// //   'abcdefxyz',
// //   'abc',
// //   'xyz',
// //   index: 0,
// //   input: 'abcdefxyz',
// //   groups: undefined
// // ]
// console.log('abcdefxyz'.match(/(?:abc)(def)(xyz)/));
// // [
// //   'abcdefxyz',
// //   'def',
// //   'xyz',
// //   index: 0,
// //   input: 'abcdefxyz',
// //   groups: undefined
// // ]

// console.log('abcdefxyz'.match(/abc(?:def)xyz/));
// // [ 'abcdefxyz', index: 0, input: 'abcdefxyz', groups: undefined ]
// console.log('abcdefxyz'.match(/(?:abc)defxyz/));
// // [ 'abcdefxyz', index: 0, input: 'abcdefxyz', groups: undefined ]
// console.log('abcdefxyz'.match(/(?:abc)(def)xyz/));
// // [ 'abcdefxyz', 'def', index: 0, input: 'abcdefxyz', groups: undefined ]

// (?<name>...)
// console.log('abcdefxyz'.match(/(?<foo>abc)/));
// // [
// //   'abc',
// //   'abc',
// //   index: 0,
// //   input: 'abcdefxyz',
// //   groups: [Object: null prototype] { foo: 'abc' }
// // ]

// console.log('abcdefxyz'.match(/(?<foo1>abc)+(?<foo2>def)/));
// // [
// //   'abcdef',
// //   'abc',
// //   'def',
// //   index: 0,
// //   input: 'abcdefxyz',
// //   groups: [Object: null prototype] { foo1: 'abc', foo2: 'def' }
// // ]

// `\1...\n`
// console.log("ABB".match(/(A)(B)\2/));
// // [ 'ABB', 'A', 'B', index: 0, input: 'ABB', groups: undefined ]
// console.log("ABA".match(/(A)(B)\1/));
// // [ 'ABA', 'A', 'B', index: 0, input: 'ABA', groups: undefined ]
// console.log("ABABCC".match(/(A)(B)\1\2/));
// // [ 'ABAB', 'A', 'B', index: 0, input: 'ABABCC', groups: undefined ]

// console.log('ab\nabb\nabbb'.match(/a(b)(\1)/));
// // [
// //   'abb',
// //   'b',
// //   'b',
// //   index: 3,
// //   input: 'ab\nabb\nabbb',
// //   groups: undefined
// // ]

// console.log('apple, orange, cherry, peach'.match(/apple(,)\sorange\1/));
// // [
// //   'apple, orange,',
// //   ',',
// //   index: 0,
// //   input: 'apple, orange, cherry, peach',
// //   groups: undefined
// // ]

// /\p{property}
// L(Letter)
// console.log('aA12あぁアァ一二三'.match(/\p{L}/gu));
// // [
// //   'a', 'A', 'あ',
// //   'ぁ', 'ア', 'ァ',
// //   '一', '二', '三'
// // ]
// console.log('aA12あぁアァ一二三'.match(/\p{Ll}/gu));
// // [ 'a' ]
// console.log('aA12あぁアァ一二三'.match(/\p{Lm}/gu));
// // null
// console.log('aA12あぁアァ一二三'.match(/\p{Lo}/gu));
// // [
// //   'あ', 'ぁ',
// //   'ア', 'ァ',
// //   '一', '二',
// //   '三'
// // ]
// console.log('aA12あぁアァ一二三'.match(/\p{Lt}/gu));
// // null
// console.log('aA12あぁアァ一二三'.match(/\p{Lu}/gu));
// // [ 'A' ]

// // N(Number)
// console.log('aA12あぁアァ一二三'.match(/\p{N}/gu));
// // [ '1', '2' ]
// console.log('aA12あぁアァ一二三'.match(/\p{Nd}/gu));
// // [ '1', '2' ]
// console.log('aA12あぁアァ一二三'.match(/\p{Nl}/gu));
// // null
// console.log('aA12あぁアァ一二三'.match(/\p{No}/gu));
// // null

// \p{Script=ScriptProperty} \p{Script_Extensions=ScriptProperty}
// console.log('aA12あぁアァ一二三'.match(/\p{Script=Han}/gu));
// // [ '一', '二', '三' ]
// console.log('aA12あぁアァ一二三'.match(/\p{Script=Hiragana}/gu));
// // [ 'あ', 'ぁ' ]
// console.log('aA12あぁアァ一二三'.match(/\p{Script=Katakana}/gu));
// // [ 'ア', 'ァ' ]

// console.log('ラッキー'.match(/\p{Script_Extensions=Katakana}/gu));
// // [ 'ラ', 'ッ', 'キ', 'ー' ]
// console.log('カービィ'.match(/\p{Script_Extensions=Katakana}/gu));
// // [ 'カ', 'ー', 'ビ', 'ィ' ]
// console.log('゛゜'.match(/\p{Script_Extensions=Katakana}/gu));
// // [ '゛', '゜' ]


// // \P{}
// console.log('aA12あぁアァ一二三'.match(/\P{Script_Extensions=Katakana}/gu));
// // [
// //   'a', 'A', '1',
// //   '2', 'あ', 'ぁ',
// //   '一', '二', '三'
// // ]

// console.log('A ticket to 大阪 costs ¥2000 👌.'.match(/\p{Emoji_Presentation}/u))
// // [
// //   '�',
// //   index: 27,
// //     input: 'A ticket to 大阪 costs ¥2000 �.',
// //       groups: undefined
// // ]
