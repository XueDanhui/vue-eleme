<template>
  <div class="v-header">
      <div class="seller-info">
        <div class="avatar-wrapper">
          <img :src="seller.avatar" alt="" class="avatar">
        </div>
        <div class="seller-info-detail">
          <div class="title">
            <div class="brand"></div>
            <div class="name">{{seller.name}}</div>
          </div>
          <div class="description">
            <span class="description-detail">{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
          </div>
          <div class="sale" v-if="seller.supports">
            <span class="icon"></span>
            <div class="sale-detail">{{seller.supports[0].description}}</div>            
          </div>
        </div>
      </div>
      <div class="seller-bulletin"></div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  }
};
</script>

<style scoped>

</style>
