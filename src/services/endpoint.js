import axios from 'axios'

const endpointService = () => {
  const serviceS = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })

  return serviceS
}

export default endpointService
