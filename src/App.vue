<template>
  <div>
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>        
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/header/header';

export default {
  components: {
    vHeader
  }
};
</script>

<style lang="stylus">
  @import 'common/stylus/index.styl';

  .tab 
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item 
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        color rgb(77, 85, 93)
        &.active
          color #f01414
</style>
