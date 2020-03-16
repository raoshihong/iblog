<template>
    <div>
        <router-link to="/login">go login</router-link>
        <router-link to="/userlist">go user list</router-link>
        <router-view></router-view>
    </div>
</template>
<script>

import Router from "./router.js"

export default {
    router:Router
}
</script>
<style scoped>

</style>