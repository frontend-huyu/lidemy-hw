function stars(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push('*')
  }
  return arr
}

describe('hw1', function () {
  it('n=1', function () {
    expect(stars(1)).toEqual(['*'])
  })

  it('n=5', function () {
    expect(stars(5)).toEqual(['*', '*', '*', '*', '*'])
  })
})

// note: file name should contain 'test'
// note for CLI: jest jest.test.js / npm run test jest.test.js