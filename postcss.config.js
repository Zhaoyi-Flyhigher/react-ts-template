/**
 * webpack自动帮助补充css浏览器的兼容前缀
 */
module.exports = {
    plugins: [
        require("autoprefixer")
    ]
};