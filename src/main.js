import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/routes/index'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const pinia = createPinia()
const app = createApp(App)
app.use(bootstrap)
app.use(router)
app.use(pinia)
app.mount('#app')
