import { uniqueArray } from '.'

function equalLists(l1: any[], l2: any[]) {
  expect(JSON.stringify(l1)).toEqual(JSON.stringify(l2))
}

describe('getCurrentGame', () => {
  it('returns its identity given an empty list', () => {
    const input: number[] = []
    const output: number[] = []

    equalLists(uniqueArray(input), output)
  })

  it('returns its identity given a single element list', () => {
    const input: number[] = [1]
    const output: number[] = [1]

    equalLists(uniqueArray(input), output)
  })

  it('returns its identity given a multiple elements list', () => {
    const input: number[] = [30, 8, 14]
    const output: number[] = [30, 8, 14]

    equalLists(uniqueArray(input), output)
  })

  it('removes consecutive repeted elements', () => {
    const input: number[] = [9, 1, 1, 1, 2, 2]
    const output: number[] = [9, 1, 2]

    equalLists(uniqueArray(input), output)
  })

  it('removes repeted elements', () => {
    const input: number[] = [1, 1, 4, 5, 1, 4, 7, 8, 5]
    const output: number[] = [1, 4, 5, 7, 8]

    equalLists(uniqueArray(input), output)
  })
})
