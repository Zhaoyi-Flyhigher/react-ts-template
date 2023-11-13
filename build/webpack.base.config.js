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
        alias: {
            "@/": path.resolve(process.cwd(), "../src")
        },
    },
    module: {
        rules: [
            {
                test:  /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset/resource",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                    },
                }
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