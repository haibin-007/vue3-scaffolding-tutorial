import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default defineUserConfig({
  host: '0.0.0.0',
  port: 8080,
  open: false,
  base: '/vue3-scaffolding-tutorial/',
  lang: 'zh-CN',
  title: '从0到1搭建企业级vue3脚手架',
  description: '从“空文件夹”手把手教你搭建企业级vue3脚手架',
  head: [
    ["meta", { name: "keywords", content: "vue3, 脚手架" }],
    ["meta", { name: "author", content: "haibin" }],
    ['link', { rel: 'icon', href: '/vue3-scaffolding-tutorial/images/logo.svg' }]
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-TC06K7PL52'
    }),
    // docsearchPlugin({
    //   // 配置项
    // }),
  ],
  markdown: {
    lineNumbers: true,
  },
  theme: defaultTheme({
    logo: '/images/logo.svg',
    repo: 'https://github.com/haibin-007/vue3-scaffolding-tutorial',
    repoLabel: 'Github',
    navbar: [
      {
        text: "Issue",
        link: "https://github.com/haibin-007/vue3-scaffolding-tutorial/issues",
      },
    ],
    themePlugins: {
      activeHeaderLinks: false
    },
    editLink: false,
    lastUpdated: false,
    contributors: false,
    tip: '提示',
    warning: '注意',
    danger: '警告',
    toggleColorMode: '切换颜色模式',
    sidebarDepth: 2,
    sidebar: [
      // {
      //   text: 'markdown',
      //   collapsible : false,
      //   children: ['/markdown.md']
      // },
      {
        text: "介绍",
        collapsible : false,
        children: [
          "/introduce/book",
        ],
      },
      {
        text: "基础架构",
        collapsible : false,
        children: [
          "/guide/01 getting-started",
          "/guide/02 package_json",
          "/guide/03 构建工具的选择",
          "/guide/04 Webpack",
          "/guide/05 ESLint",
          "/guide/06 Prettier",
          "/guide/07 ESLint & Prettier",
          "/guide/08 Webpack & ESLint",
          "/guide/09 Babel",
          "/guide/10 Babel & Webpack",
          "/guide/11 Babel & ESLint",
          "/guide/12 TypeScript",
          "/guide/13 TypeScript & ESLint",
          "/guide/14 TypeScript & Webpack",
          "/guide/15 Vue",
          "/guide/16 Vue & ESLint",
          "/guide/17 Vue & TypeScript",
          "/guide/18 Vue & Webpack",
          "/guide/19 CSS方案的选择",
          "/guide/20 CSS预处理器",
          "/guide/21 Sass & Webpack",
          "/guide/22 Pnpm",
          "/guide/未完待续",
        ],
      }
    ],
  }),
})