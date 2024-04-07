import {createApp} from 'vue'
import App from './App.vue'

//1.引入pinia
import { createPinia } from 'pinia'


const app = createApp(App)
//2.創建pinia
const pinia = createPinia()
//3.安裝pinia
app.use(pinia)

app.mount('#app')