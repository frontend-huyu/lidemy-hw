var add = require('./index.js')

// simple test
test('adds 1 + 2 to equal 3', function () {
  expect(add(1, 2)).toBe(3);
})

// describe handler
describe('outer', () => {
  console.log('describe outer-a'); // 1

  describe('describe inner 1', () => {
    console.log('describe inner 1'); // 2
    test('test 1', () => {
      console.log('test for describe inner 1'); // // 1
      expect(add(-1, 0)).toEqual(-1);
    });
  });

  console.log('describe outer-b'); // 3

  test('test 1', () => {
    console.log('test for describe outer'); // // 2
    expect(add('', 0)).toEqual('0');
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2'); // 4
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2'); // // 3
      expect(add('', '')).toEqual('');
    });
  });

  console.log('describe outer-c'); // 5
});