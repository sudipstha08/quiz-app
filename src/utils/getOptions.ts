// getOptions gets the options from ENUM
const getOptions = Enum => {
  const options: any = []
  for (const [key, value] of Object.entries(Enum)) {
    if (isNaN(Number(key))) {
      options.push({ label: key, value })
    }
  }
  return options
}

export { getOptions }
