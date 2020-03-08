<template>
    <div>
        <login></login>
    </div>
</template>
<script>
//引入Login.vue组件
import login from './components/Login.vue'

//使用export default将组件对象暴露出去
export default {//不用指定el属性,自动绑定当前template上的根节点
    components:{
        "login":login
    }
}
</script>
<style scoped>

</style>