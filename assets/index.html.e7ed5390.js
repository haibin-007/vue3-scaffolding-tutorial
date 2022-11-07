import{_ as s,o as e,c as n,g as a}from"./app.e8e0456c.js";const t="/vue3-scaffolding-tutorial/assets/vue02.e2233b4f.png",o="/vue3-scaffolding-tutorial/assets/vue03.fbeb8f7d.png",c={},p=a('<h1 id="vue-typescript" tabindex="-1"><a class="header-anchor" href="#vue-typescript" aria-hidden="true">#</a> Vue &amp; TypeScript</h1><p><img src="'+t+`" alt=""></p><p>\u5728<code>src/index.ts</code>\u53EF\u4EE5\u770B\u5230<code>TypeScript</code>\u8FD8\u65E0\u6CD5\u8BC6\u522B<code>vue</code>\u7EC4\u4EF6\u7C7B\u578B\uFF0C\u6240\u4EE5\u8FD8\u9700\u8981<strong>\u624B\u52A8</strong>\u65B0\u5EFA\u6587\u4EF6<code>src/@types/shims-vue.d.ts</code>\u7ED9<code>vue</code>\u6587\u4EF6\u58F0\u660E\u4E0B\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// src/@types/shims-vue.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;*.vue&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ComponentOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> componentOptions<span class="token operator">:</span> ComponentOptions<span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> componentOptions<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u6267\u884C<code>npm run dev</code>\u770B\u4E0B\u6548\u679C\uFF1A</p><p><img src="`+o+'" alt=""></p><p>\u62A5\u9519\u4FE1\u606F\u53EF\u4EE5\u770B\u51FA\u8FD8\u7F3A\u5C11<code>loader</code>\u6765\u8F6C\u6362<code>vue</code>\u6587\u4EF6\u7C7B\u578B\uFF0C\u4E0B\u4E00\u8282\u6211\u4EEC\u6765\u914D\u7F6E<code>Webpack</code>\u3002</p>',7),d=[p];function i(r,l){return e(),n("div",null,d)}const m=s(c,[["render",i],["__file","index.html.vue"]]);export{m as default};
