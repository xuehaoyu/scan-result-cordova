
import axios from 'axios'

axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(res => {
  return res
})

export default axios
