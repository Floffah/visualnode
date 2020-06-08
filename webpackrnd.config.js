const path = require('path');
const common = require('./common');
const webpack = require('webpack');

module.exports = {
    mode: common.mode,
    devtool: 'source-map',
    target: 'electron-renderer',
    entry: "./src/render/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'visualnode.render.js',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/preset-react'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/library.json')
        })
    ]
}
