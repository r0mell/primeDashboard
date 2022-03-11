import axios from 'axios';

const URI = 'http://localhost:3001/api/v1/login'

const useLogin = async credentials => {

   const { data } = await axios.post(URI, credentials)
   return data

}

export default { useLogin } 