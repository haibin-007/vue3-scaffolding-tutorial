---
title: Babel
---
# Babel
到这里得开始关注自身代码的需求了，大多数项目最基础也需要使用到ES6语法了。虽然目前有好一部分浏览器都支持，但是难免会有某些不支持的情况，最好的做法全部转成`ES5`再给浏览器解析。

我们选择目前非常热门的ES编译器`Babel`来进行转换，需要安装`@babel/core`和`@babel/preset-env`两个插件和创建`babel.config.js`配置文件。

```shell
npm i -D @babel/core @babel/preset-env 
```
```js
// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env", // ES
      {
        targets: {
          browsers: ["> 0.25%", "not dead"],
        },
      },
    ],
  ],
};
```