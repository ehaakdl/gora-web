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
    modules: [
        '@pinia/nuxt',
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) =>
                // @ts-ignore
                config.plugins.push(vuetify())
            );
        },
        '@nuxtjs/i18n',
        'nuxt-proxy'
    ],
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8080',
            API_URL: process.env.API_URL || 'http://localhost:8080'
        },
        proxy: {
            options: [
                {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                    pathFilter: [
                        '/api',
                    ],
                },
            ],
        },
    },
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
})
