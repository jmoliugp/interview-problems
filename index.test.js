import {
  decimalToBinary,
  isIsomorphic,
  squareMatrixRotation,
  uniqueArray,
} from '.'

describe('equalLists', () => {
  function equalLists(l1, l2) {
    expect(JSON.stringify(l1)).toEqual(JSON.stringify(l2))
  }

  it('returns its identity given an empty list', () => {
    const input = []
    const output = []

    equalLists(uniqueArray(input), output)
  })

  it('returns its identity given a single element list', () => {
    const input = [1]
    const output = [1]

    equalLists(uniqueArray(input), output)
  })

  it('returns its identity given a multiple elements list', () => {
    const input = [30, 8, 14]
    const output = [30, 8, 14]

    equalLists(uniqueArray(input), output)
  })

  it('removes consecutive repeted elements', () => {
    const input = [9, 1, 1, 1, 2, 2]
    const output = [9, 1, 2]

    equalLists(uniqueArray(input), output)
  })

  it('removes repeated elements', () => {
    const input = [1, 1, 4, 5, 1, 4, 7, 8, 5]
    const output = [1, 4, 5, 7, 8]

    equalLists(uniqueArray(input), output)
  })

  it('removes repeted elements, including non natural numbers', () => {
    const input = [6, 6, Infinity, 13, 2, 13, NaN]
    const output = [6, Infinity, 13, 2, NaN]

    equalLists(uniqueArray(input), output)
  })
})

describe('isIsomorphic', () => {
  it('equal strings are isomorphic', () => {
    expect(isIsomorphic('code', 'code')).toBeTruthy()
  })

  it('strings with different lengths are not isomorphic', () => {
    expect(isIsomorphic('eyes', 'eye')).toBeFalsy()
  })

  it('isomorphic strings', () => {
    expect(isIsomorphic('paper', 'title')).toBeTruthy()
  })

  it('not isomorphic strings', () => {
    expect(isIsomorphic('egg', 'sad')).toBeFalsy()
  })
})

describe('decimalToBinary', () => {
  it('base case', () => {
    expect(decimalToBinary(0)).toBe('0')
    expect(decimalToBinary(1)).toBe('1')
  })

  it('1 digit transformation', () => {
    expect(decimalToBinary(3)).toBe('11')
  })

  it('Big number transformation', () => {
    expect(decimalToBinary(1000)).toBe('1111101000')
  })
})

describe('squareMatrixRotation', () => {
  it('rotates a 3x3 matrix by 90 degrees', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const output = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]

    expect(squareMatrixRotation(input)).toEqual(output)
  })

  it('rotates a 5x5 matrix by 90 degrees', () => {
    const input = [
      [6, 1, 4, 4, 7],
      [3, 5, 8, 2, 10],
      [0, 2, 6, 9, 4],
      [6, 0, 1, 1, 26],
      [3, 2, 2, 7, 9],
    ]
    const output = [
      [3, 6, 0, 3, 6],
      [2, 0, 2, 5, 1],
      [2, 1, 6, 8, 4],
      [7, 1, 9, 2, 4],
      [9, 26, 4, 10, 7],
    ]

    expect(squareMatrixRotation(input)).toEqual(output)
  })
})
