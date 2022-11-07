import{_ as s,o as n,c as a,g as e}from"./app.e8e0456c.js";const p="/vue3-scaffolding-tutorial/assets/css03.14bc8bd1.png",t={},i=e(`<h1 id="sass-webpack" tabindex="-1"><a class="header-anchor" href="#sass-webpack" aria-hidden="true">#</a> Sass &amp; Webpack</h1><p>\u5728\u524D\u9762\u6211\u4EEC\u5DF2\u7ECF\u5728<code>Webpack</code>\u914D\u7F6E\u4E86<code>sass-loader</code>\uFF0C\u63A5\u7740\u6211\u4EEC\u9700\u8981\u4F7F\u7528Sass\u5168\u5C40\u914D\u7F6E\uFF0C\u4EE5\u4FBF\u4E8E\u4F7F\u7528Sass Mixin\u3001Sass Variables\u7B49\u7279\u6027\u3002</p><p>\u5148\u521B\u5EFA\u4E00\u4E2A\u6837\u5F0F\u6587\u4EF6<code>src/assets/css/variables.scss</code>\uFF0C\u4EE5\u53CA\u7ED9<code>src/App.vue</code>\u6DFB\u52A0\u4E0A\u6837\u5F0F\u3002</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// src/assets/css/variables.scss</span>
@charset <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color1</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// src/App.vue</span>
<span class="token selector">.app </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color1</span><span class="token punctuation">;</span>
  <span class="token keyword">@include</span> <span class="token function">size</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6765\u4FEE\u6539<code>Webpack</code>\u7684\u914D\u7F6E\uFF0C\u8BA9\u5B83\u5728\u5168\u5C40\u4E2D\u5F15\u5165\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack/webpack.base.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6DFB\u52A0\u522B\u540D\uFF0C\u53EF\u4EE5\u7B80\u5199</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.scss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;vue-style-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &quot;@/assets/css/variables&quot;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u6211\u4EEC\u518D\u6267\u884C<code>npm run dev</code>\u5C31\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u751F\u6548\u4E86\uFF1A</p><p><img src="`+p+'" alt=""></p>',8),l=[i];function c(o,r){return n(),a("div",null,l)}const d=s(t,[["render",c],["__file","index.html.vue"]]);export{d as default};
