import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8080',
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth.access_token') ? localStorage.getItem('auth.access_token') : '';
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = token;
  }
  return config;
}, (error) => {
  // 이메일 noti
  Promise.reject(error);
});

instance.interceptors.response.use((response: AxiosResponse) => {
  if (response.headers.authorization) {
    localStorage.setItem('auth.access_token', response.headers?.authorization);
  }

  return response;
}, (error) => {
  // 이메일 noti
  Promise.reject(error);
});

export default instance;
