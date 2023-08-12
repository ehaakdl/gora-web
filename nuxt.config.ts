import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
    // todo ssr 사용하게 수정
    ssr: false,
    srcDir: 'src',
    css: ['vuetify/lib/styles/main.sass'],
    build: {transpile: ["vuetify"]},
    plugins: [
        '~/plugins/vuetify/index.ts',
        '~/plugins/pinia-persistedstate/index.ts',
    ],

    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8080/api/v1',
            API_URL: process.env.API_URL || 'http://localhost:8080'
        }
    },
    modules: [
        '@pinia/nuxt',
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) =>
                // @ts-ignore
                config.plugins.push(vuetify())
            );
        },
        '@nuxtjs/i18n',
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.json',
            },
            {code: 'ko', file: 'ko.json'},
        ],

        defaultLocale: 'ko',
        lazy: true,
        langDir: 'locales/',
    },
    // todo 아래 설정이 프록시 서버 설정 코드 작동안함 원인 분석
    nitro: {
        devProxy: {
            '/api/': "http://127.0.0.1:8080",
        },
        routeRules: {
            '/api/': {
                proxy: {
                    to: process.env.API_BASE_URL || 'http://localhost:8080'
                }
            },
        }
    },
    vite: {
        server: {
            proxy: {
                "/api/": {
                    target: process.env.API_BASE_URL || 'http://localhost:8080',
                    changeOrigin: true,
                },
            },
        },
    },
})
