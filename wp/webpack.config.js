var HtmlWebpackPlugin = require('html-webpack-plugin'); // html-webpack-plugin@4.5.1 // https://webpack.docschina.org/plugins/html-webpack-plugin/
// npm install --save-dev html-webpack-plugin

var path = require('path');
module.exports = {

    mode: "development",

    entry: "./entry.js",

    output: {
        // __dirname 绝对路径
        // path: __dirname + "/dist",
        path: path.resolve(__dirname, './dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader"
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },

            {
                test: /\.jpg$/,
                // test: /\.(jpg|png)$/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]'
                }
            },
        ],
        // plugins: [new HtmlWebpackPlugin()] module 下没有这个 plugins
        // 命令行 webpack , 出现如下报错
        // Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
        //     - configuration.module has an unknown property 'plugins'. These properties are valid:
        //     object { defaultRules?, exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, noParse?, rules?, strictExportPresence?, strictThisContextOnImports?, unknownContextCritical?, unknownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp? }
        //     -> Options affecting the normal modules (`NormalModuleFactory`).
    },
    plugins: [new HtmlWebpackPlugin()]
}

// npm install --save-dev html-webpack-plugin@next // 失败
// npm install --save-dev html-webpack-plugin@3  // 成功生成  filename: "index_bundle.js" 但index.html带错误


