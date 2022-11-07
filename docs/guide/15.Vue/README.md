---
title: Vue
---

# Vue
现在我们开始来针对Vue做配置了，先来安装Vue。
```shell
npm i -S vue
```
::: tip
我们这里使用的`vue`版本为`v3.2.41`
:::
然后模仿`Vue-Cli`新建一个`App.vue`文件，在`index.ts`配置初始化Vue实例，以及在`public/index.html`配置绑定节点。
```vue
<!-- src/App.vue -->
<template>
  <section class='app'>
    {{text}}
  </section>
</template>
<script lang='ts' setup>
import { ref } from "vue";
const text = ref("hello world!");
</script>

<style lang='scss' scoped>
.app {
  color: red;
}
</style>
```
```ts {14-17}
// src/index.ts
interface Test {
  a: number;
  b: string;
}

const test: Test = {
  a: 111,
  b: "111",
};

console.log(test);

import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");
```
```html {11}
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vue3-scaffolding-tutorial-example</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```