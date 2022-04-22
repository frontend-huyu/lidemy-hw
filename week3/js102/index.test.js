const repeat = require('./index')
// console.log(repeat('a', 5))

describe('test for repeat', () => {
  test('a repeat 5 times should be aaaaa', () => {
    expect(repeat('a', 5)).toBe('aaaaa');
  });

  test('abc repeat 1 time should be abc', () => {
    expect(repeat('a', 5)).toBe('aaaaa');
  });

  test('"" repeat 10 times should be ""', () => {
    expect(repeat('', 5)).toBe('');
  });
})

//
// function test1() {
//   expect(repeat('a', 5)).toBe('aaaaa')
// }

// test('a repeat 5 times', test1());

/*
note: 
.toBe()
.toEqual()
*/