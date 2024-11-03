/*
 * @Author: Diana Tang
 * @Date: 2024-11-03 22:08:59
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-components/config/webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const mode = 'development';
module.exports = {
  mode: mode,
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'), 
  },
  resolve:{
    extensions:['.js','.jsx','.ts','.tsx'],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
     }
  },
  module: {
    rules: [
      // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']  // 注意顺序很重要！
        
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html', // HTML 模板
        inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(), // 热模块替换插件
],
devServer: {
  hot: true,
  static: {
    directory: path.join(__dirname, '../public'),
  },
  port: 3000,
}
};