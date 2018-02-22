export const indexBy = (pointsArray: any[] = [], keyName: string) => {
  const indexedData = new Map()
  pointsArray.forEach(point => {
    const key = point[keyName]
    if (indexedData.has(key)) {
      const previousValue = indexedData.get(key)
      indexedData.set(key, [...previousValue, point])
    } else {
      indexedData.set(key, [point])
    }
  })
  return indexedData
}
