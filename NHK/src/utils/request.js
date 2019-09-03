import axios from 'axios'
const service = axios.create({
  timeout: 50000 // request timeout
})
export default service
