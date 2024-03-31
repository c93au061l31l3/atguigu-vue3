//創建一個路由器，並暴露
//引入createRouter
import { createRouter ,createWebHashHistory} from "vue-router";

//引入路由組件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'


const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/home',component:Home},
        {path:'/news',component:News},
        {path:'/about',component:About},
    ]
})

export default router;