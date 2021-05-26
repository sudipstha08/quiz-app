import { API } from '../utils/API'

const fetchData = () => {
  return API.get('/home')
}

export { fetchData }
