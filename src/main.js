//使用es6语法引入安装到node中到模块
//格式  import 对象名  from 模块路径
import $ from 'jquery'

//通过import引入css
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"

//使用class语法声明一个类
class Person{
    constructor(name,age){//定义构造方法
        this.name = name;
        this.age = age;//使用实例属性
    }
    static birthday = "1990-02-02";//定义静态属性
    buy(){//定义实例方法
        console.log(this.name);
        return "aaa";
    }
    static say(){//定义静态方法
        console.log(Person.birthday);
    }
}

//通过构造方法创建对象
const p = new Person("rao",12);
console.log(p);
//调用实例方法
console.log(p.buy());
//调用静态方法
Person.say();

//使用jquery对象
$(function(){
    //通过jquery操作dom
    $("li:even").css("background-color", "green");
    $("li:odd").css("background-color","red");
})