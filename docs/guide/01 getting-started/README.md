---
title: 起步
---

# 起步
::: tip
阅读中遇到卡壳时，可以参考 [配套项目](https://github.com/haibin-007/vue3-scaffolding-tutorial-example) 。
:::

## 空文件夹
首先，我们来创建一个空文件夹。

```shell
mkdir vue3-scaffolding-tutorial-example
cd vue3-scaffolding-tutorial-example
```

## 说明文档
接着创建`README.md`文件，用于项目说明。
```md
# vue3-scaffolding-tutorial-example
```

## git忽略配置
接着是git忽略配置文件`.gitignore`，Github官方提供了不同环境下的[.gitignore模板](https://github.com/github/gitignore)  
我们这里直接使用提供的`Node.gitignore`即可。


## index.html
 
模仿Vue Cli的目录结构创建public和src目录
```shell
mkdir public
mkdir src
```

顺便也把最基础的index.html也创建了吧，放到`public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vue3-scaffolding-tutorial-example</title>
</head>
<body>
  
</body>
</html>
```

