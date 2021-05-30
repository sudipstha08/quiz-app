import _ from 'lodash'

/**
 * getOptions gets the options from ENUM
 **/
const getOptions = Enum => {
  const options: any = []
  for (const [key, value] of Object.entries(Enum)) {
    if (isNaN(Number(key))) {
      options.push({ label: _.startCase(key), value })
    }
  }
  return options
}

export { getOptions }
