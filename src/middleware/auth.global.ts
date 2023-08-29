
import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware((to) => {
    if(process.server){
        return
    }
    
    const userStore = useUserStore()
    if(to.query.access){
        userStore.successLogin(<string>to.query.access)
    }
    
    if(to.path == '/logout'){
        userStore.logout()
        return
    }else if(to.path == '/login'){ // 무한 리다이렉션 때문에 추가
        userStore.logout()
        return
    }else if(to.path == '/user-register' || to.path == '/email-verify'){
        return
    } else {
        if (!userStore.isLogin()) {
            return navigateTo('/login')
        }
    }
});
