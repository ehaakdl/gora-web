export class userApi {


    logout(accessToken: string) {
        const config = useRuntimeConfig()
        return useFetch('/api/logout', {
            onRequest({request, options}) {
                // Set the request headers
                options.headers = options.headers || {}
                options.headers.Authorization = 'test'
            }
        })
    }
}

