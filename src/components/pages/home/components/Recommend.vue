<template>
  <div>
    <div class="title">熱銷推薦</div>
    <ul>
        <router-link
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          :to="'/detail/' + item.id"
          tag="li"
        >
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-detail-button">查看詳情</button>
          </div>
        </router-link>
      <li class="item-all border-bottom">
        <button class="item-all-button">查看所有商品</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'

  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-all
    line-height: .8rem
    padding: .1rem
    font-size: .3rem
    text-align: center
    .item-all-button
      font-weight: bold
      color: #00b6ff
      background: white
  .item
    overflow:hidden
    display:flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      overflow: hidden
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsit()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsit()
      .item-detail-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
