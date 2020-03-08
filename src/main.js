//引入vue模块,默认使用的是vue.runtime.common.js,要想使用vue.js,则需要在webpack.config.js中的resolve中配置
import Vue from 'vue'

//引入自定义的组件
import App from './App.vue'

// 将自定义组件渲染到容器中
var vm = new Vue({
    el:"#app",
    render:(creatElement)=>creatElement(App)//直接通过render的方式渲染
})