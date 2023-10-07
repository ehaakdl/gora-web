import userApi from '@/api/userApi';
import { defineStore } from 'pinia';

const useUserStore = defineStore({
  // unique id of the store across your application
  id: 'user',

  // a function that returns a fresh state
  state: () => ({

  }),

  // optional getters
  getters: {

  },

  // optional actions
  actions: {
    isLogin() {
      return localStorage.getItem('auth.access_token') != null;
    },
    logout() {
      const useUserApi = new userApi();
      useUserApi.logout();
    },
    successLogin(accessToken : string) {
      localStorage.setItem('auth.access_token', accessToken);
    },
  },
});

export default useUserStore;
