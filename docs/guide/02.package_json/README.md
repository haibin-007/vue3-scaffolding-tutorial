---
title: package.json
---

# package.json

## npm的由来

在GitHub还没有兴起的年代，前端是通过**网址**来共享代码。比如说你想使用`jQuery`，那么你得点击**jQuery网站**上提供的链接来**下载jQuery**，再放到自己的网站上使用。  

到GItHub兴起之后，社区中也有人使用GitHub的下载功能。但当一个网站依赖的代码越来越多，发现这是一件非常麻烦的事情：  
- 去 jQuery官网 下载jQuery  
- 去 BootStrap官网 下载BootStrap  
- 去 Underscore官网 下载Underscore  
- ...

![Isaac Z. Schlueter](./IsaacZSchlueter.png)

有些程序员就受不鸟了，一个拥有三大美德的程序员 **Isaac Z. Schlueter** （上图）给出一个解决方案：用一个工具把这些代码集中到一起来进行管理。

![Ryan Dahl](./RyanDahl.png)

后面跟Node.js的作者**Ryan Dahl**（上图）合作，成为Node.js内置的包管理器。

所以这个工具也就叫做`npm`，全称是`Node Package Manager`（运行在Node.js上的JavaScript程序），而我们待会要创建的`package.json`也就是这个工具的包描述文件。

它的大致思路是：
1. 让不同插件的作者通过npm publish把代码提交到registry上
2. 社区里的其他人就想用这些插件，就把插件名写到包描述文件`package.json`里
3. 运行`npm install`，npm就会帮他们下载代码到本地的`node_modules`目录里


## 创建package.json
由于Node.js内置了npm，所以我们可以直接使用命令`npm init -y`来进行创建。

::: tip
该项目使用的Node.js版本为`16.13.0`
:::

会生成大致如下包含包自身描述的内容
```json
{
  "name": "vue3-scaffolding-tutorial-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/haibin-007/vue3-scaffolding-tutorial-example.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/haibin-007/vue3-scaffolding-tutorial-example/issues"
  },
  "homepage": "https://github.com/haibin-007/vue3-scaffolding-tutorial-example#readme"
}

```

