<template>
  <div class="header">
      <div class="seller-info">
        <div class="avatar-wrapper">
          <img :src="seller.avatar" alt="" class="avatar">
        </div>
        <div class="seller-info-detail">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            <span class="description-detail">{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
          </div>
          <div class="sale" v-if="seller.supports">
            <span class="sale-icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="sale-detail">{{seller.supports[0].description}}</span>            
          </div>
        </div>
        <span class="sale-count" v-if="seller.supports">
          {{seller.supports.length}}个
          <i class="icon-keyboard_arrow_right"></i>
        </span>
      </div>
      <div class="seller-bulletin">
        <span class="bulletin-icon"></span><span class="bulletin-text">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar" alt="">
      </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>

<style scoped lang="stylus">
@import '../../common/stylus/mixin.styl';

.header
  position relative
  background rgba(7, 17, 27, 0.5)
  color #fff
  overflow hidden
  .seller-info
    padding 24px 12px 18px 24px
    font-size 0px
    position relative
    .avatar
      width 64px
      height 64px
      border-radius 2px
    .avatar-wrapper
      display inline-block
      vertical-align top
    .seller-info-detail
      display inline-block
      margin-left 12px
      .title
        font-weight bold
        margin 2px 0 8px 0
        .brand
          display inline-block
          width 30px
          height 18px
          vertical-align top
          bg-image("brand")
          background-size 30px 18px
          background-repeat no-repeat
          margin-right 6px
        .name 
          font-size 16px
          line-height 18px          
      .description
        font-size 12px
        line-height 12px
        margin-bottom 10px
      .sale
        font-size 10px
        line-height 12px
        margin-bottom 2px
        .sale-icon
          display inline-block
          width 12px
          height 12px
          background-size 12px 12px
          background-repeat no-repeat
          vertical-align text-bottom
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
  .seller-bulletin
    width 100%
    height 26px
    background rgba(7, 17, 27, 0.2)
    padding 0 22px 0 12px
    box-sizing border-box
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    position relative
    .bulletin-icon
      display inline-block
      width 22px
      height 12px
      bg-image("bulletin")
      background-size 22px 12px
      background-repeat no-repeat
      vertical-align top
      margin-top 7px
      margin-right 4px
    .bulletin-text
      font-size 10px
      line-height 28px       
    .icon-keyboard_arrow_right
      position absolute
      right 6px
      top 8px
      font-size 12px
  .sale-count
    position absolute
    display inline-block
    height 24px
    line-height 24px
    text-align center
    font-size 10px
    padding 0 8px
    background rgba(0, 0, 0, 0.2)
    border-radius 12px
    box-sizing border-box
    right 12px
    bottom 14px
  .background
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    z-index -1
    filter blur(10px)
    img 
      width 100%
      height 100%
</style>
