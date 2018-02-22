export const padRight = (input: any[] = [], desiredLength = 0) => {
  const paddedInput = [...input]
  while (paddedInput.length < desiredLength) {
    paddedInput.push(null)
  }
  return paddedInput
}
