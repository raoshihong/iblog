<template>
    <div>
        <label>username:<input type="text" v-model="username"></label>
        <label>password:<input type="password" v-model="password"></label>
        <input type="button" value="login" @click="login">
        <div>{{username}}</div>
    </div>
</template>
<script>
//通过exort default暴露对象
export default {
    data(){
        return {
            username:"",
            password:""
        }
    },
    methods:{
        login(){
            console.log(this.username);
        }
    }
}
</script>
<style scoped>
</style>