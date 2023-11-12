/**
 * webpack开发环境配置
 */
const path = require("path");
const webpack = require('webpack'); // 用于访问内置插件
const commonConfig = require("./webpack.base.config");
const {merge} = require("webpack-merge");
const ESLintPlugin = require('eslint-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const devConfig = {
    mode: NODE_ENV,
    devServer: {
        // 静态资源目录的路径，设置该参数可以在服务器中访问这些静态资源
        static: path.join(__dirname,"public"),
        // 启用 gzip 压缩，默认是关闭的
        compress: true,
        // 服务器主机名，默认是 localhost
        host: "localhost",
        // 服务器端口，默认是 8080
        port: 3000,
        // 是否自动在浏览器中打开页面，默认是关闭的
        open: true,
        // 启用模块热替换功能，默认是关闭的
        // hot: true,
        // 参数用于设置是否启用 HTML5 history API，用于处理单页应用的路由问题。默认情况下，当使用浏览器的前进/后退按钮时，devServer 会尝试根据 URL 路径查找对应的静态资源，如果找不到就返回 404。如果启用了 historyApiFallback，则会将这些请求重定向到 index.html，然后交给前端路由来处理
        historyApiFallback: true,
        // 需要监听的文件列表，当这些文件发生变化时，自动重启服务器
        // watchFiles: [
        //     "src/**/*.js",
        //     "src/**/*",
        // ]
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use:["style-loader", "css-loader","postcss-loader"]
            },
            {
                test: /\.less$/, 
                use:["style-loader", "css-loader","postcss-loader","less-loader"]
            }
        ]
    },
    plugins: [
        // 模块热替换插件
        new webpack.HotModuleReplacementPlugin(),
        // es-lint
        new ESLintPlugin({extensions: [".js",",ts"]})
    ]
};

// console.log(merge(commonConfig, devConfig));
module.exports = merge(commonConfig, devConfig);