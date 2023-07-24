import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import defaults from './defaults'
import theme from './theme'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        defaults
        ,theme
    })
    nuxtApp.vueApp.use(vuetify)
})