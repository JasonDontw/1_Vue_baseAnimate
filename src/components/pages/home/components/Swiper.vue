<template>
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://www.scan001.com/images/pbh3/wall/20060508/2880view_4020.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://www.scan001.com/images/pbh3/wall/20060508/2880view_3001.jpg'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  .swiper-button-prev, .swiper-button-next {
    --swiper-theme-color: #eee;
  }
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-pagination-bullet-active
      background: red !important
    .swiper-img
      width: 100%
</style>
