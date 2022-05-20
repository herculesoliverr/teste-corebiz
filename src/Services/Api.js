import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/api/v1'
})

export { Axios as Api }
