import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'url';
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
  ],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
    },

  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
        ],
      }),
    ],
  },
});
