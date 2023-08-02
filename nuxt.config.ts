import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  // todo ssr 사용하게 수정
  ssr: false,
  srcDir: 'src',
  css: ['vuetify/lib/styles/main.sass'],
  build: { transpile: ["vuetify"] },
  plugins:[
    '~/plugins/vuetify/index.ts',
    '~/plugins/pinia-persistedstate/index.ts'
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8080/api/v1'
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
  ],

})
