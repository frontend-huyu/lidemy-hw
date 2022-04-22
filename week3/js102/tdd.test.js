const reverse = require('./tdd')

describe('test for reverse', function () {
  test('123 should be 321', function () {
    expect(reverse('123')).toBe('321')
  });

  test('!!! should be !!!', function () {
    expect(reverse('!!!')).toBe('!!!')
  });

  test('"" should be ""', function () {
    expect(reverse('')).toBe('')
  });

})

// note: normal case, edge case