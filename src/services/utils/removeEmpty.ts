/* eslint-disable @typescript-eslint/no-unused-vars */
const removeEmptyFromObj = object => {
  return Object.fromEntries(
    Object.entries(object).filter(([_, v]) => v != null),
  )
}

export { removeEmptyFromObj }
