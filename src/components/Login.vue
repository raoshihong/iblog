<template>
    <div>
        <el-button @click="visible = true">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
        <p>Try Element</p>
        </el-dialog>
    </div>
</template>
<script>
//引入vue
import Vue from "vue"
//引入Element模块
import ElementUI from "element-ui"
//引入Element需要的css
import "element-ui/lib/theme-chalk/index.css"

//明确声明要使用ElementUI模块,跟vue-router一样
Vue.use(ElementUI);

export default {
    data(){
        return { visible: false }
    }
}
</script>