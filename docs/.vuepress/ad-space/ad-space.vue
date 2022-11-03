<template>
  <div class='_ad-space'>
    <div 
      :class="['switch',{ 'enable': show }]"
      @click="show=!show"
    >
    </div>
    <div v-show="show" class="content">
      <div class="_ad-space-title">SPONSORS 赞助商</div>
      <div class="_ad-space-sponsors" v-for='(item,index) in sponsors' :key='index'>
        <a 
          v-if="!item.demo" 
          class="sponsors-top" 
          :href="item.url"
          target="_blank"
        >
          <img :src="`/images/${item.logo}.svg`" alt="" srcset="">
          {{item.title}}
        </a>
        <div v-if="!item.demo" class="sponsors-bottom">
          {{item.details}}
        </div>
        <div v-if="item.demo" class="sponsors-text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
  import { ref, reactive } from 'vue'
  const show = ref(true)
  const sponsors = reactive([{
    title: 'Vue.js',
    details: '渐进式JavaScript框架',
    logo: 'vue',
    url: 'https://cn.vuejs.org/'
  },{
    demo: true,
    text: 'your logo'
  }])

</script>
  
<style lang='scss' scoped>
._ad-space {
  z-index: 1000;
  position: fixed;
  right: 0;
  top: 58px;
  width: 224px;
  height: 200px;
  .switch{
    position: relative;
    cursor: pointer;
    width: 10px;
    height: 20px;
    margin: 0 auto -4px auto;
    background-color: #42b883;
    transition: all 0.5s ease;
    &::after{
      content: '';
      position: absolute;
      left: 4px;
      top: 0;
      width: 2px;
      height: 20px;
      background-color: #fff;
    }
    &.enable {
      transform: rotate(90deg);
    }
  }
  &-title {
    font-size: 12px;
    font-weight: bolder;
    color: #42b883;
    text-align: center;
  }
  &-sponsors{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 224px;
    height: 70px;
    padding: 10px 0;
    margin-top: 2px;
    background-color: #f9f9f9;
    .sponsors-top{
      display: flex;
      align-items: center;
      cursor: pointer;
      img{
        width: 30px;
        height: 30px;
        margin-right: 6px;
      }
      font-size: 20px;
      font-weight: bolder;
    }
    .sponsors-bottom{
      font-size: 12px;
      font-weight: bolder;
      color: #42b883;
    }
    .sponsors-text{
      height: 100%;
      line-height: 50px;
      color: rgba(60,60,60,.33);
      font-size: 14px;
    }
  }
}
</style>