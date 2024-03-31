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
                    path:'detail', //params參數要先佔位，?:表示可不傳
                    component:Detail,
                    //寫法1:將路由收到的所有params參數作為props傳給路由組件
                    //props:true 

                    //寫法2:函數式，可以自己決定將甚麼作為props傳給路由組件
                    props(route){ //接收route組件作為參數
                        return route.params //也可以是query
                    }

                     //寫法3:對象寫法，
                    // props:{
                    //     a:100,
                    //     b:200,
                    //     c:300
                    // }
                }
            ]
        },
        {path:'/about',component:About},
    ]
})

export default router;