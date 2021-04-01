import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/Home'
import City from '@/components/pages/city/City'
import Detail from '@/components/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 設定每次進入新頁面的畫面開始位置
    return { x: 0, y: 0 }
  }
})
