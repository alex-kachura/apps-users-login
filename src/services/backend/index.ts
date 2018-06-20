import axios from 'axios/index'

import { BASE_URL } from '../../consts'

export const fetch = (url: string) => axios.get(`${BASE_URL}${url}`)
  .then(json => json.data)

export const post = (url: string, data: any) => axios.post(`${BASE_URL}${url}`, data)
  .then(json => json.data)

export const put = (url: string, data: any) => axios.put(`${BASE_URL}${url}`, data)
  .then(json => json.data)
