// todo 로그인 체크 후 리다이렉션
import {useUserStore} from "~/stores/user";

export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()

    if (to.path == '/login') {
        userStore.logout()
        return
    } if(to.path == '/user-register' || to.path == '/email-verify'){
        return
    } else {
        if (!userStore.isLogin) {
            return navigateTo('/login')
        }
    }
});
