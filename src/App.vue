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

//将路由单独抽离到一个js文件中
import vueRouter from "./router.js"


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