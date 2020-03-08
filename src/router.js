//使用vue-router必须依赖vue
import Vue from "vue"
//引入VueRouter,会查找node_modules下的vue-router文件夹
import VueRouter from "vue-router"
//npm 到方式安装,则需要明确使用Vue.use()来安装VueRouter
Vue.use(VueRouter)

//创建路由
const vueRouter = new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/user',
            component:User,
            children:[//定义子路由
                {
                    path:'list',//  /user/list
                    component:UserList
                },
                {
                    path:'detail',//  /user/detail
                    component:UserDetail
                }
            ]
        }
    ]
});

//将vueRouter暴露出去
export default vueRouter;