---
title: TypeScript & ESLint
---

# TypeScript & ESLint
首先得安装相应的三个插件`typescript`、`@typescript-eslint/parser`、`@typescript-eslint/eslint-plugin`。
```shell
npm install -D 
  typescript # TypeScript
  @typescript-eslint/parser # TypeScript 解析器
  @typescript-eslint/eslint-plugin # TypeScript 规则集和插件功能
```
再来修改ESLint配置文件
```js {6-17}
// .eslintrc.js
module.exports = {
  ...
  overrides: [
    ...
    {
      files: ["**/*.{ts,tsx}"],              // 只处理 ts 和 tsx 文件
      parser: "@typescript-eslint/parser",   // 解析 TypeScript
      parserOptions: {
        project: ["./tsconfig.json"],        // 指定ts配置文件
      },
      extends: [
        "plugin:@typescript-eslint/recommended",                          // 官方语法检查
        "plugin:@typescript-eslint/recommended-requiring-type-checking",  // 类型检查
      ],
      plugins: ["@typescript-eslint"],
    }
  ]
};
```
这下你会发现之前`src/index.ts`的ESLint报错提示消失了。