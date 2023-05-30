// webpack.config.js
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production', // 环境
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, './dist'), // 输出文件夹
    filename: 'img-type-js.js', // 文件名称
    libraryTarget: 'umd', // 打包方式
    library: 'img-type-js', // 类库名称
  },
  plugins: [
    new CleanWebpackPlugin(), // 清除上一次打包内容
    new HtmlWebpackPlugin({
      title: 'img-type-js',
      template: './index.html', //模板的含义即对应的html文件
    }),
  ],
}
