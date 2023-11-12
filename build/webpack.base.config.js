/**
 * webpack公共配置
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    devtool: false,
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name].js",
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
    },
    module: {
        rules: [
            // {
            //     test: /\.ts|.tsx$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: 'babel-loader',
            //             // options: {
            //             //     presets: ['@babel/preset-typescript']
            //             // }
            //         }
            //     ],
            // },
            {
                test: /\.js|.ts|.tsx$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader' 
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset/resource",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                    },
                },
                // generator: {
                //     // 将图片文件输出到 static/imags 目录中
                //     // 将图片文件命名 [hash:8][ext][query]
                //     // [hash:8]: hash值取8位
                //     // [ext]: 使用之前的文件扩展名
                //     // [query]: 添加之前的query参数
                //     filename: "imags/[hash:8][ext][query]",
                // },
            },
            {
                test: /\.(ttf|woff2?|map4|map3|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "media/[hash:8][ext][query]",
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};