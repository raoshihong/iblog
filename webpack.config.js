const path = require("path");

//引入html-webpack-plugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode:"development",
    entry: "./src/main.js",
    output:{
        path: path.join(__dirname,"dist"),
        filename: "bundle.js"
    },
    devServer:{//配置webpack-dev-server
        port:9090,
        hot:true,
        contentBase:"src",
        open:true
    },
    plugins:[//添加插件
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:path.join(__dirname,"./src/index.html")
        })
    ],
    resolve:{//指定资源解析规则
        alias:{
            //import Vue from 'vue' 以vue开头的引入,都使用模块下的vue/dist/vue.js
            'vue$':'vue/dist/vue.js'
        }
    }
}