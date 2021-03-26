<template>
  <div class="icons">
     <div class="icon">
       <div class="icon-img">
        <img class="icon-img-content" src='https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png'>
       </div>
       <p class="icon-desc">海外酒店</p>
      </div>
      <div class="icon">
       <div class="icon-img">
        <img class="icon-img-content" src='https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png'>
       </div>
       <p class="icon-desc">低價機票</p>
      </div>
      <div class="icon">
       <div class="icon-img">
        <img class="icon-img-content" src='https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png'>
       </div>
       <p class="icon-desc">汽車票船票</p>
      </div>
      <div class="icon">
       <div class="icon-img">
        <img class="icon-img-content" src='https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png'>
       </div>
       <p class="icon-desc">自由行</p>
      </div>
      <div class="icon">
       <div class="icon-img">
        <img class="icon-img-content" src='https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png'>
       </div>
       <p class="icon-desc">海外酒店</p>
      </div>
      <div class="icon">
       <div class="icon-img">
        <img class="icon-img-content" src='https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png'>
       </div>
       <p class="icon-desc">低價機票</p>
      </div>
      <div class="icon">
       <div class="icon-img">
        <img class="icon-img-content" src='https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png'>
       </div>
       <p class="icon-desc">汽車票船票</p>
      </div>
      <div class="icon">
       <div class="icon-img">
        <img class="icon-img-content" src='https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png'>
       </div>
       <p class="icon-desc">自由行</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' socped>
  @import '~styles/varibles.styl'

  .icons
    width: 100%
    overflow:hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      overflow: hidden
      float: left
      width:25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height : .44rem
        color: $darkTextColor
        text-align: center
</style>
