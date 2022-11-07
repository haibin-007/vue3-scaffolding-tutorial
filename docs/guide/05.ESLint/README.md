---
title: ESLint
---

# ESLint

到这里我们算是把最基础的构建部分给弄好了。  
既然要构建企业级的脚手架，代码的规范性肯定也少不了，这里我们选取当下前端最热门的代码规范检查工具`ESLint`。

接着我们安装`eslint`以及创建它的配置文件`.eslintrc.js`，顺便也把`.eslintignore`忽略文件也创建了
```shell
npm i -D eslint
```
```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,  // 支持浏览器环境
    node: true,     // 识别 CommonJS
    es6: true,      // 识别 ES 的代码
  },
  // 继承ESLint的规则集
  extends: [
    "eslint:recommended",           // ESLint自带
  ]
};

// .eslintignore  需要时再添加配置项

```



我们要知道ESLint规则默认配置是**没有限制**的也就是**无规则**的，需要什么规范我们就自己手动去配置里加规则，这里使用了`eslint`自身提供的规则集`eslint:recommended`。


随意在`src/index.js`里加代码试试效果。
```js {2}
console.log('hello world!');
const test = 123;
```

![](./eslint01.png)

这里可以看到提示信息违反了规则`no-unused-vars`，也就是不允许声明未使用的变量，再手动加上去使用就可以避免违反规则了。

```js {3}
console.log('hello world!');
const test = 123;
console.log(test);
```



但我们想象一下，如果每次有违反规则的时候我们都得手动去修复是不是特别麻烦？况且我们一般都是统一用业界写好的规则集，没有多少人会特地去熟悉这么多的规则。

那这个痛点我们该怎么来解决呢？
