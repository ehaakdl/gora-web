// todo 로그인 체크 후 리다이렉션
export default defineNuxtRouteMiddleware((to) => {
    if(to.path == '/login'){
        return
    }
    if (to.path == '/') {
        return navigateTo('/login')
    }
});
