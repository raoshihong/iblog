<template>
    <div>
        <label>username:<input type="text" v-model="username"></label>
        <label>password:<input type="password" v-model="password"></label>
        <input type="button" value="login">
        <div>{{username}}</div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            username:"",
            password:""
        }
    }
}
</script>
<style scoped>

</style>