import axios from './axios'

export const getUserInfo = (option) => axios.get('/api/getUser',option);

export const getJsSdk = (option) => axios.post('/api/getJsSdk',option);

export const getOauth = (option) => axios.get('/api/oauth',option);