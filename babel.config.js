
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "ie": "11"
                },
                // 当 useBuiltIns 设置为 "usage" 时，@babel/preset-env 会根据你的代码中使用的 ECMAScript 特性和目标浏览器的版本，自动引入对应的 polyfill，而不是将所有的 polyfill 打包到入口文件中。这样可以减小代码体积，避免无用的 polyfill 被引入当设置为usage时，polyfill会自动按需添加，不再需要手工引入@babel/polyfill
                "useBuiltIns": "usage",
                "corejs": 3,
            }
        ],
        [
            "@babel/preset-react",
            {
                "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
                "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
                "throwIfNamespace": false, // defaults to true
                "runtime": "classic" // defaults to classic
                // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
            }
        ],
        ["@babel/preset-typescript"]
    ],
    plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": false
            }
        ]
    ]
};