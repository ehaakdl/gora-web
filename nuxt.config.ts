import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  srcDir: 'src',
  css: ['vuetify/lib/styles/main.sass'],
  build: { transpile: ['vuetify'] },
  plugins: [
    '~/plugins/vuetify/index.ts',
    '~/plugins/pinia/index.ts',
  ],
  modules: [
    '@pinia/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (config.plugins === undefined) {
          throw new Error('Parameter is not a number!');
        }

        config.plugins.push(vuetify());
      });
    },
    '@nuxtjs/i18n',
    'nuxt-proxy',
  ],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
    },
    proxy: {
      options: [
        {
          target: process.env.BASE_URL || 'http://localhost:8080',
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
      { code: 'ko', file: 'ko.json' },
    ],

    defaultLocale: 'ko',
    lazy: true,
    langDir: 'locales/',
  },
});
