import axios from '@/composable/axios';
import { defineStore } from 'pinia';
import { LoginRequest, SignupRequest } from 'types.d/user';



const useUserStore = defineStore({
  // unique id of the store across your application
  id: 'user',

  // optional actions
  actions: {
    logout() {
      axios.get('/api/v1/logout');
    },
    successLogin(accessToken : string) {
      localStorage.setItem('auth.access_token', accessToken);
    },
    login(req:LoginRequest) {
      return axios.post('/api/v1/login', {
        email: req.email,
        password: req.password,
      })
    },

    signup(req:SignupRequest) {
      return axios.post('/api/v1/signup', {
        email: req.email,
        password: req.password,
      });
    },

    downloadGameClient() {
      return axios.get('/api/v1/download/client', {
        responseType: 'blob',
      });
    },
    isLogin() {
      return localStorage.getItem('auth.access_token') != null;
    },
    verifyUserEmail(accessToken:string) {
      return axios.post(`/api/v1/user/email-verify?accessToken=${accessToken}`);
    },
    sendVerifyUserEmail(email:string) {
      return axios.post(`/api/v1/user/email/verify-send?email=${email}`);
    },
  },
});

export default useUserStore;
