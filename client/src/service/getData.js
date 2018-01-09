import axios from './axios'

export const getUserInfo = (option) => axios.get('/api/getUser',option);