import axios, { AxiosRequestConfig } from 'axios/index'

import { AUTH_TOKEN_KEY, BASE_URL } from '../../consts'

export const fetch = (url: string, config?: AxiosRequestConfig) => axios.get(`${BASE_URL}${url}`)
  .then(json => json.data)

export const post = (url: string, data: any, config?: AxiosRequestConfig) => axios.post(`${BASE_URL}${url}`, data)
  .then(json => json.data)

export const put = (url: string, data: any, config?: AxiosRequestConfig) => axios.put(`${BASE_URL}${url}`, data)
  .then(json => json.data)

export const setAuthorizationHeaders = () => {
  axios.defaults.headers.common.Authorization = localStorage.getItem(AUTH_TOKEN_KEY)
}
