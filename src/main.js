//引入vue模块
import Vue from 'vue'

//创建组件
const login = {
    template:"<div>登录组件</div>"
}

//使用vue
var vm = new Vue({
    el:"#app",
    // components:{
    //     "login":login
    // }
    render:function(creatElement){
        return creatElement(login);
    }
});