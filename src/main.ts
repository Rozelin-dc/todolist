import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPuls from 'element-plus'
import 'element-puls/lib/theme-chalk/index.css'
import VueClipboard from 'vue-clipboard2'

const app = createApp(App)
app.use(VueClipboard)

app.use(ElementPuls)

app.use(router)
app.mount('#app')
