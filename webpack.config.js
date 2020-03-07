//因为要使用到路径,所以使用node语法引入path模块
const path = require("path");

//通过module.exports暴露一个对象出去供外部使用
module.exports  = {
    mode: "development",//设置开发模式
    //设置源文件入口
    entry: "./src/main.js",
    //设置输出口
    output:{
        path: path.join(__dirname,"dist"),//设置输出目录
        filename: "bundle.js"//设置输出文件名
    },
    devServer:{
        open:true,
        port:9090,
        contentBase:"src",
        hot:true
    }
}