//因为要使用到路径,所以使用node语法引入path模块
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

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
    devServer:{//配置webpack-dev-server
        open:true,
        port:9090,
        contentBase:"src",
        hot:true
    },
    plugins:[//添加插件
        //创建一个html-webpackPlugin对象,通过html-webpack-plugin指定打包输出的html
        new HtmlWebpackPlugin({
            //指定构造函数的参数,指定打包的html
            title: 'Hello World',
            minify: { // 压缩HTML文件
              removeComments: true, // 移除HTML中的注释
              collapseWhitespace: true, // 删除空白符与换行符
              minifyCSS: true// 压缩内联css
            },
            filename: 'index.html',//指定生成的文件名
            template: path.join(__dirname,'./src/index.html')//指定模版文件,根据模版文件生成对应的html
        })
    ],
    module:{
        //在模块中使用规则
        rules:[
            //loader的加载规则是从右到左,所以是先使用css-loader,再使用style-loader
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|git|bmp|jpeg)$/,use:'url-loader?limit=56600&name=[path][name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader?limit=56600&name=[path][name].[ext]'},
            //指定.js文件使用babel-loader来编译加载,并排除node_modules下的js文件，注意test和exclude的表达式都不能用引号包括
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/}
        ]
    }
}