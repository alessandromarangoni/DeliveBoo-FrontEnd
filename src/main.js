import { createApp } from 'vue'
import './style.scss'
import './variables.scss'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import { router } from './router';

createApp(App).use(router).use(vuetify).mount('#app')
