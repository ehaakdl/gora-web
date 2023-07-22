import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  srcDir: 'src',
  css: ['vuetify/lib/styles/main.sass'],
  build: { transpile: ["vuetify"] },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
          // @ts-ignore
          config.plugins.push(vuetify())
      );
    },
  ],
})
