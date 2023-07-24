import {defineStore} from "pinia"

export const useUserStore = defineStore({
    // unique id of the store across your application
    id: 'user',

    // a function that returns a fresh state
    state: () => ({
        isLogined: false
    }),

    // optional getters
    getters: {
        isLogin: (state) => state.isLogined,
    },

    // optional actions
    actions: {
        logout() {
            this.isLogined = false
        },
        successLogin() {
            this.isLogined = true
        }
    },
    persist:true
})
