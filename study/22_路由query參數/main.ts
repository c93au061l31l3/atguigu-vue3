import {createApp} from 'vue'
import App from './App.vue'
//引入路由器
import router from '@/router/index'

//創建應用
const app = createApp(App)
//使用路由器
app.use(router)
//掛載整個應用到app容器中
app.mount('#app')