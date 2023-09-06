import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8080',
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  console.log('Request made with ', config);

  const token = localStorage.getItem('auth.access_token') ? localStorage.getItem('auth.access_token') : '';
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

instance.interceptors.response.use((response) => {
  console.log('Response:', response);
  return response;
}, (error) => Promise.reject(error));

export default instance;
