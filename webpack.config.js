const path = require('path');
const common = require('./common');

module.exports = {
    mode: common.mode,
    devtool: 'source-map',
    target: 'electron-main',
    entry: "./src/main/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'visualnode.main.js',
    }
}
