/*
 * @Description:
 * @Author: Xiaokun.jiang
 * @Email: jiangxiaokun@bytedance.com
 * @Date: 2020-04-05 16:59:59
 * @LastEditTime: 2020-04-06 18:45:29
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const isNode = process.env.TARGET === 'node';

module.exports = {
    entry: isNode
        ? {
              cjs_main_node: './src/cjs-main-node.js',
              es_main_node: './src/es-main-node.js'
          }
        : {
              cjs_main: './src/cjs-main.js',
              es_main: './src/es-main.js'
          },
    mode: 'development',
    target: isNode ? 'node' : 'web',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, './src/main.js'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:9000' })
    ]
};
