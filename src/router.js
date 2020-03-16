//使用vue-router必须依赖vue
import Vue from "vue"
//引入VueRouter,会查找node_modules下的vue-router文件夹
import VueRouter from "vue-router"
//npm 到方式安装,则需要明确使用Vue.use()来安装VueRouter
Vue.use(VueRouter)

//引入自定义组件
import Login from "./components/Login.vue"
import UserList from "./components/UserList.vue"

//创建路由
const vueRouter = new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/userlist',
            component:UserList
        }
    ]
});

//将vueRouter暴露出去
export default vueRouter;