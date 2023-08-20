export class userApi {


    async logout(accessToken:string) {
        return await useFetch('/api/v1/logout', {
            onRequest({request, options}) {
                // Set the request headers
                options.headers = options.headers || {}
                options.headers.Authorization = accessToken
            }
        })
    }
}

