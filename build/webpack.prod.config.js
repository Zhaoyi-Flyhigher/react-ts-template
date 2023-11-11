/**
 * webpack生产环境配置
 */
const commonConfig = require("./webpack.base.config");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NODE_ENV = process.env.NODE_ENV;
const prodConfig = {
    mode: NODE_ENV,
    module: {
        rules: [
            {
                test: /\.css$/, 
                use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader"]
            },
            {
                test: /\.less$/, 
                use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader","less-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ]
}

module.exports = merge(commonConfig, prodConfig)