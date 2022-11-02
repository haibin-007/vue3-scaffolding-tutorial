---
title: Webpack & ESLint
---

# Webpack & ESLint

为了能够在构建过程中就能发现ESlint的错误，这里我们可以使用插件`eslint-webpack-plugin`让`ESLint`和`Webpack`进行绑定。
```shell
npm i -D eslint-webpack-plugin
```
再在`webpack/webpack.base.js`进行配置即可。
```js {4,18-20}
// webpack.base.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), 
      favicon: path.resolve(__dirname, '../public/logo.svg'), // 顺便加入favicon
    }),
    new ESLintWebpackPlugin({
      extensions: ['js','ts','vue']
    }),
  ]
}
```