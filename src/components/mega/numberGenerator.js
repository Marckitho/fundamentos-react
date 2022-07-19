function generateUniqueNumbers(qty) {
  let min = 1
  let max = 60

  let arr = []

  while (arr.length < qty) {
    let n = Math.round(Math.random() * (max - min)) + min

    if (arr.indexOf(n) === -1) arr.push(n)
  }

  arr.sort((a, b) => a - b)

  return arr
}

export { generateUniqueNumbers }