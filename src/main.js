//使用es6语法引入安装到node中到模块
//格式  import 对象名  from 模块路径
import $ from 'jquery'

//使用jquery对象
$(function(){
    //通过jquery操作dom
    $("li:even").css("background-color", "green");
    $("li:odd").css("background-color","red");
})