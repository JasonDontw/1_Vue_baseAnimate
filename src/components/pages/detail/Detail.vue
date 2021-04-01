<template>
  <div>
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <DetailList :list="list"></DetailList>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人個人票',
              children: [
                {
                  title: '一日票'
                }, {
                  title: '三日票'
                }
              ]
            }, {
              title: '成人團體票'
            }
          ]
        }, {
          title: '學生票'
        }, {
          title: '兒童票'
        }, {
          title: '優惠票'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
  .content
    height: 50rem
</style>
