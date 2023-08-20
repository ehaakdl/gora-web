import { defineStore } from "pinia";
import { userApi } from "~/api/userApi";

export const useUserStore = defineStore({
    // unique id of the store across your application
    id: 'user',

    // a function that returns a fresh state
    state: () => ({

    }),

    // optional getters
    getters: {
        isLogin: (state) => {
            return localStorage.getItem('auth.access_token') != null;
        },
    },

    // optional actions
    actions: {
        logout() {
            const useUserApi = new userApi()
            const accessToken:string|null = localStorage.getItem('auth.access_token')
            localStorage.removeItem('auth.access_token')
            if(accessToken == null){
                return
            }
            
            useUserApi.logout(accessToken)
        },
        successLogin(accessToken : string) {
            localStorage.setItem('auth.access_token', accessToken)
        }
    },
})
