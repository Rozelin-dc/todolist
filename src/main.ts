import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.use(ElementUI)

createApp(App)
  .use(router)
  .mount('#app')
