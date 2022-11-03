import { defineClientConfig } from '@vuepress/client'
import AdSpace from './ad-space/ad-space.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('ad-space', AdSpace)
  },
  setup() {},
  rootComponents: [AdSpace],
})