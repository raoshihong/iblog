//使用es6语法引入安装到node中到模块
//格式  import 对象名  from 模块路径
import $ from 'jquery'

//通过import引入css
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"

//使用jquery对象
$(function(){
    //通过jquery操作dom
    $("li:even").css("background-color", "green");
    $("li:odd").css("background-color","red");
})