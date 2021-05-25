import { createApp } from 'vue'
import App from './App'
import router from './router'
import '@/styles/main.scss'

createApp(App).use(router).mount('#app')
