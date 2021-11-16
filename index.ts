// Removes duplicates of an array and returns an array of only unique elements.
// [1, 2, 3, 5, 1, 5, 9, 1, 2, 8] => [1, 2, 3, 5, 9, 8]
export function uniqueArray(array: number[]): number[] {
  const alreadyAdded: { [key: number]: boolean | undefined } = {}
  const res: number[] = []

  array.forEach(element => {
    if (alreadyAdded[element] === undefined) {
      res.push(element)
      alreadyAdded[element] = true
    }
  })

  return res
}
