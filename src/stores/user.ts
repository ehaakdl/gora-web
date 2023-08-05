import {defineStore} from "pinia"

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
            localStorage.removeItem('auth.access_token')
            const accessToken = useCookie('auth.access_token')
            accessToken.value = null
        },
        successLogin(accessToken : string) {
            localStorage.setItem('auth.access_token', accessToken)
        }
    },
})
