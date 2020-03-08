<template>
    <div>
        app首页
        <router-link to="/login">登录</router-link>
        <router-link to="/user">用户</router-link>
        <!-- 匹配到路由对应到视图展示在这块 -->
        <router-view></router-view>
    </div>
</template>
<script>

//引入自定义组件
import Login from "./components/Login.vue"
import User from "./components/User.vue"
import UserList from "./components/UserList.vue"
import UserDetail from "./components/UserDetail.vue"

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
                    path:'list',
                    component:UserList
                },
                {
                    path:'detail',
                    component:UserDetail
                }
            ]
        }
    ]
});

export default {
    components:{
        //注册组件
        "login":Login,
        "userList":UserList
    },
    router:vueRouter//注册router
}
</script>
<style scoped>

</style>