// str.indexOf()
// let str = 'Widget with id';
// console.log(str.indexOf('Widget')); // 0 // 'Widget'
// console.log(str.indexOf('widget')); // -1
// console.log(str.indexOf('id')); // 1 // W'id'get
// console.log(str.indexOf('id', 1)); // 1

// console.log(str.indexOf('id', 2)); // 12 // 'id'

// let str = 'As sly as a fox, as strong as an ox';
// let target = 'as';
// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) !== -1) {
//   console.log(pos);
// }
// 7
// 17
// 27

// str.lastIndexOf()
// console.log(str.lastIndexOf(target, 20)); // 17
// console.log(str.lastIndexOf(target, 10)); // 7

// let str = "Widget with id";

// if (str.indexOf('Widget')) {
//   console.log('We found it');
// }
// // doesn't work, because indexOf return 0

// if (str.indexOf('Widget') !== -1) {
//   console.log('We found it')
// }
// // We found it

// str.includes()
// console.log('Widget'.includes('id')); // true
// console.log('Widget'.includes('id', 3)); // false

// str.startsWith() & str.endsWith()
// console.log('Widget'.startsWith('Wid')); // true
// console.log('\nWidget'.startsWith('Wid')); // false
// console.log('Wid\nget'.endsWith('get')); // true
// console.log('Widget\n'.endsWith('get')); // false

// str.slice(start[, end])
// let str = 'stringify';
// console.log(str.slice(2)); // ringify
// console.log(str.length); // 9
// console.log(str.slice(2, 8)); // ringif // 'y' index is 8, the length is 9
// console.log(str.slice(2, 9)); // ringify
// console.log(str.slice(2, 10)); // ringify

// console.log(str.slice(-4, -1)); // gif

// str.substring()
// let str = 'stringify';
// console.log(str.substring(2, 6)); // ring
// console.log(str.substring(6, 2)); // ring
// console.log(str.substring(-4, -8)); // '' // not supported

// str.localeCompare()
// console.log('a' > 'A');
// // true
// console.log(`a: ${'a'.codePointAt(0)}, A: ${'A'.codePointAt(0)}`);
// // a: 97, A: 65
// console.log('a'.localeCompare('A'));
// // -1
// console.log('a'.localeCompare('A', 'en'));
// // -1
// console.log('a'.localeCompare('A', 'en', { sensitivity: 'base' }));
// // 0
// console.log('a'.localeCompare('A', 'en', { sensitivity: 'accent' }));
// // 0
// console.log('a'.localeCompare('A', 'en', { sensitivity: 'case' }));
// // -1
// console.log('a'.localeCompare('A', 'en', { sensitivity: 'variant' }));
// // -1

/* note:
sensitivity: 'base' => a ≠ b, a = á, a = A
sensitivity: 'accent' => a ≠ b, a ≠ á, a = A
sensitivity: 'case' => a ≠ b, a = á, a ≠ A
sensitivity: 'variant' => a ≠ b, a ≠ á, a ≠ A
The default is "variant" for usage "sort"; it's locale dependent for usage "search".
*/

// console.log('Österreich' > 'Zealand');
// // true // because Ö > Z
// console.log(`Ö: ${'Ö'.codePointAt(0)}, Z: ${'Z'.codePointAt(0)}`);
// // Ö: 214, Z: 90

// console.log('Österreich'.localeCompare('Zealand'));
// // -1
// console.log('Österreich'.localeCompare('Zealand', 'en', { sensitivity: 'base' }));
// // -1

// console.log(`á: ${'á'.codePointAt(0)}, a: ${'a'.codePointAt(0)}`);
// // á: 225, a: 97
// console.log('á'.localeCompare('a'));
// // -1 // compare with codePoint
// console.log('á'.localeCompare('a', 'en', { sensitivity: 'variant' }));
// // 1 // compare with IETF tags

// console.log(['á', 'a'].sort(new Intl.Collator().compare))
// // [ 'á', 'a' ]
// console.log(['á', 'a'].sort(new Intl.Collator('en').compare))
// // [ 'a', 'á' ]
// console.log(['á', 'a', 'A'].sort(new Intl.Collator('en', { caseFirst: 'upper' }).compare))
// // [ 'A', 'a', 'á' ]

// console.log(`あ: ${'あ'.codePointAt(0)}, ア: ${'ア'.codePointAt(0)}`);
// // あ: 12354, ア: 12450
// console.log('あ'.localeCompare('ア', 'en'));
// // -1 // compare with wrong tag
// console.log('あ'.localeCompare('ア', 'ja'));
// // 0
// console.log('あ'.localeCompare('ア', 'jpn'));
// // 0
// console.log('あ'.localeCompare('ア', 'ja-JP'));
// // 0

// console.log('あ'.localeCompare('ア', 'ja', { sensitivity: 'base' }));
// // 0
// console.log('あ'.localeCompare('ア', 'ja', { sensitivity: 'accent' }));
// // 0
// console.log('あ'.localeCompare('ア', 'ja', { sensitivity: 'case' }));
// // 0
// console.log('あ'.localeCompare('ア', 'ja', { sensitivity: 'variant' }));
// // 0

// console.log(`太: ${'太'.codePointAt(0)}, 次: ${'次'.codePointAt(0)}`);
// // 太: 22826, 次: 27425
// console.log('太郎'.localeCompare('次郎', 'ja', { sensitivity: 'base' }));
// // 1
// console.log('太郎'.localeCompare('次郎', 'ja', { sensitivity: 'accent' }));
// // 1
// console.log('太郎'.localeCompare('次郎', 'ja', { sensitivity: 'case' }));
// // 1
// console.log('太郎'.localeCompare('次郎', 'ja', { sensitivity: 'variant' }));
// // 1

// charCodeAt()
// console.log('abc'.charCodeAt(0)); // 97
// console.log('abc'.charCodeAt(1)); // 98

// // surrogate pair
// console.log('𝒳'.length); // 2
// console.log('𝒳'.charCodeAt(0)); // 55349
// console.log('𝒳'.charCodeAt(1)); // 56499

// codePointAt()
// console.log('abc'.codePointAt(0)); // 97
// console.log('abc'.codePointAt(1)); // 98

// // // surrogate pair
// console.log('𝒳'.length); // 2
// console.log('𝒳'.codePointAt(0)); // 119987


// console.log('a'.charCodeAt(0)); // 97
// console.log('a'.charCodeAt(0).toString(16)); // 61

// console.log('a'.codePointAt(0)); // 97
// console.log('a'.codePointAt(0).toString(16)); // 61

// console.log('\u0061'); // a

// console.log('𝒳'.charCodeAt(0)); // 55349
// console.log('𝒳'.charCodeAt(1)); // 56499
// console.log('𝒳'.charCodeAt(0).toString(16)); // d835
// console.log('𝒳'.charCodeAt(1).toString(16)); // dcb3
// console.log('\ud835\udcb3'); // 𝒳

// console.log('𝒳'.codePointAt(0)); // 119987
// console.log('𝒳'.codePointAt(0).toString(16));
// console.log('\u{1d4b3}'); // 𝒳

// console.log('\u{61}'); // a

// String.fromCharCode()
// console.log('abc'.charCodeAt(0, 1, 2)); // 97 // only for one index
// console.log(String.fromCharCode(97)); // a
// console.log(String.fromCharCode(97, 98, 99)); // abc

// // decimal
// console.log('𝒳'.charCodeAt(0)); // 55349
// console.log('𝒳'.charCodeAt(1)); // 56499
// console.log(String.fromCharCode(55349, 56499)); // 𝒳

// // hexadecimal
// console.log('𝒳'.charCodeAt(0).toString(16)); // d835
// console.log('𝒳'.charCodeAt(1).toString(16)); // dcb3
// console.log(String.fromCharCode(0xd835, 0xdcb3)); // 𝒳
// console.log('\ud835\udcb3'); // 𝒳

// console.log(String.fromCharCode(128970)); // prints nothing, it is over 65535(0xFFFF)

// String.fromCodePoint()
// console.log('𝒳'.codePointAt(0)); // 119987
// console.log('𝒳'.codePointAt(0).toString(16)); // 1d4b3

// console.log(String.fromCodePoint(119987)); // 𝒳 // decimal
// console.log(String.fromCodePoint(0x1d4b3)); // 𝒳 // hexadecimal
// console.log('\u{1d4b3}'); // 𝒳

// // 你: 繁体字中国語（Traditional Chinese）
// console.log('你'.codePointAt(0)); // 20320
// console.log('你'.codePointAt(0).toString(16)); // 4f60

// console.log(String.fromCodePoint(20320)); // 你
// console.log(String.fromCodePoint(0x4f60)); // 你
// console.log('\u4f60'); // 你
// console.log('\u{4f60}'); // 你

// // http://www.isthisthingon.org/unicode/index.phtml?glyph=2F804

// String.fromCodePoint() vs. String.fromCharCode()
// console.log(String.fromCharCode(128970)); // ''
// console.log(String.fromCharCode(0x1F7CA)); // ''

// console.log(String.fromCodePoint(128970)); // 🟊
// console.log(String.fromCodePoint(0x1F7CA)); // 🟊

// String.prototype.normalize()
// console.log('S\u0307'); // Ṡ // S + dot above
// console.log('S\u0307\u0323'); // Ṩ // S + dot above + dot below
// console.log('S\u0323\u0307'); // Ṩ // S + dot below + dot above
// console.log('\u1e68'); // Ṩ // S with two dots


// console.log('S\u0307'.normalize('NFC') === 'S\u0307\u0323'.normalize('NFC')) // false
// console.log('S\u0307'.normalize('NFC') === 'S\u0323\u0307'.normalize('NFC')) // false
// console.log('S\u0307'.normalize('NFC') === '\u1e68'.normalize('NFC')) // false

// console.log('S\u0307\u0323'.normalize('NFC') === '\u1e68'.normalize('NFC')) // true
// console.log('S\u0323\u0307'.normalize('NFC') === '\u1e68'.normalize('NFC')) // true

// NFC
// console.log('é'.length); // 1
// console.log('é'.charCodeAt(0)); // 233

// const latinSmallAcuteE = '\u00e9';
// const unNormalizeE = '\u0065\u0301';
// // console.log(String.fromCodePoint(0x0065)); // e
// const testE1 = 'e\u0307';
// const testE2 = 'e\u0303';

// console.log(`${latinSmallAcuteE}, ${unNormalizeE}`);
// // é, é
// console.log(`${testE1}, ${testE2}`);
// // ė, ẽ

// console.log(latinSmallAcuteE.normalize('NFC') === unNormalizeE.normalize('NFC'));
// // true
// console.log(latinSmallAcuteE.normalize('NFC') === testE1.normalize('NFC'));
// // false
// console.log(latinSmallAcuteE.normalize('NFC') === testE2.normalize('NFC'));
// // false

// console.log(latinSmallAcuteE.normalize('NFC').length, unNormalizeE.normalize('NFC').length);
// // 1 1

// NFD
// console.log('ñ'.length); // 1
// console.log('ñ'.charCodeAt(0)); // 241

// const latinSmallTildeN = '\u00f1';
// const unNormalizeN = '\u006e\u0303';
// // console.log(String.fromCodePoint(0x006e)); // n

// console.log(latinSmallTildeN.normalize('NFD') === unNormalizeN.normalize('NFD'));
// // true
// console.log(latinSmallTildeN.normalize('NFD').length, unNormalizeN.normalize('NFD').length);
// // 2 2

// console.log(latinSmallTildeN.normalize('NFD').charCodeAt(0).toString(16)); // 6e
// console.log(latinSmallTildeN.normalize('NFD').charCodeAt(1).toString(16)); // 303

