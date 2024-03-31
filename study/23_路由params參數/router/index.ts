//創建一個路由器，並暴露
//引入createRouter
import { createRouter ,createWebHashHistory,createWebHistory} from "vue-router";

//引入路由組件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'
import Detail from "@/components/Detail.vue"; //引入嵌套的子路由

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Home},
        {
            path:'/news',
            component:News,
            children:[ //嵌套的子路由
                {
                    name:'nameDetail',
                    path:'detail/:id/:title/:content?', //params參數要先佔位，?:表示可不傳
                    component:Detail
                }
            ]
        },
        {path:'/about',component:About},
    ]
})

export default router;