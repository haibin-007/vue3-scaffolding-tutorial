import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/vue3-scaffolding-tutorial/',
  lang: 'zh-CN',
  title: '从0到1搭建企业级vue3脚手架',
  description: '从“空文件夹”手把手教你搭建企业级vue3脚手架',
  head: [
    ["meta", { name: "keywords", content: "vue3, 脚手架" }],
    ["meta", { name: "author", content: "haibin" }],
  ],
  plugins: [
    // "@vuepress/active-header-links",
  ],
  markdown: {
    lineNumbers: true,
  },
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'https://github.com/haibin-007/vue3-scaffolding-tutorial',
    navbar: [
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      {
        text: "Issue",
        link: "https://github.com/haibin-007/vue3-scaffolding-tutorial/issues",
      },
    ],
    sidebar: [
      {
        text: 'markdown',
        collapsible : false,
        children: ['/markdown.md']
      },
      {
        text: "介绍",
        collapsible : false,
        children: [
          "/",
          "/guide/test1",
          "/guide/test2"
        ],
      },
      // SidebarItem
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          '/foo/bar.md',
        ],
      },
    ],
  }),
})