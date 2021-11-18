// Removes duplicates of an array and returns an array of only unique elements.
// Example:
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

// For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
// to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
// string A to every char of string B.
// Example:
// `paper` and `title` => true
// `egg` and `sad` => false
// `dgg` and `add` => true
export function isIsomorphic(firstString: string, secondString: string) {
  if (firstString.length !== secondString.length) {
    return false
  }

  const firstStringOnAscii = [...firstString].map(currChar =>
    currChar[0].charCodeAt(0),
  )
  const secondStringOnAscii = [...secondString].map(currChar =>
    currChar[0].charCodeAt(0),
  )

  const charsDistance = {}
  let isValid = true

  firstStringOnAscii.forEach((currChar, i) => {
    const distance = firstStringOnAscii[i] - secondStringOnAscii[i]

    if (!charsDistance[currChar]) {
      charsDistance[currChar] = distance
    } else {
      if (charsDistance[currChar] !== distance) {
        isValid = false
      }
    }
  })

  return isValid
}

// Write a recursive function that returns the binary string of a given decimal number
// Example:
// 3 => 11
// 8 => '1000'
// 1000 => '1111101000'
export function decimalToBinary(digit: number) {
  if (digit <= 1) {
    return digit.toString()
  }

  const updatedDigit = Math.floor(digit / 2)

  if (digit % 2 === 0) {
    return decimalToBinary(updatedDigit) + '0'
  } else {
    return decimalToBinary(updatedDigit) + '1'
  }
}

// You are given an n x n 2D matrix (representing an image). Rotate the matrix by 90 degrees (clockwise).
// Example:
// [                   [
//   [1, 2, 3],          [7, 4, 1],
//   [4, 5, 6],   =>     [8, 5, 2],
//   [7, 8, 9],          [9, 6, 3],
// ]                   ]
export function squareMatrixRotation(originalMatrix: number[][]) {
  const rotatedMatrix = originalMatrix.map((array, row) =>
    array.map((_, column) => {
      const x = originalMatrix.length - column - 1
      const y = row
      return originalMatrix[x][y]
    }),
  )

  return rotatedMatrix
}
