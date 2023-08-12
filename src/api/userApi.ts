export class userApi {
    logout(accessToken: string) {
        const config = useRuntimeConfig()
        const headers = useRequestHeaders(['Authorization'])
        debugger
        return useFetch(config.public.API_BASE_URL + `/logout`, { headers })
        //
        // return $fetch(config.public.API_BASE_URL + `/logout`, {
        //         method: 'GET',
        //         onRequest(context: FetchContext): Promise<void> | void {
        //             context.options.headers.Authorizatio
        //             debugger
        //         },
        //         headers: {
        //             'Authorization': accessToken,
        //         }
        //     }
        // )
    }
}

