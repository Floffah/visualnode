const path = require('path');
const common = require('./common');
const webpack = require('webpack');

module.exports = {
    mode: common.mode,
    devtool: 'source-map',
    target: 'electron-main',
    context: process.cwd(),
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.sass', '.css'],
        modules: [__dirname, 'node_modules']
    },
    entry: {
        library: [
            'async',
            'react',
            'react-dom',
            'axios',
            'antd',
            'antd/dist/antd.min.css',
            'electron-react-devtools'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'visualnode.dll.js',
        library: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: './dist/[name].json'
        })
    ]
}
