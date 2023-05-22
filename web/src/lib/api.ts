import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.24.198.166:3333',
})
