//引入vue模块
import Vue from "vue"
//引入自定义组件
import App from "./App.vue"

var vm = new Vue({
    el:"#app",
    render:createElement=>createElement(App) //通过render渲染视图
});