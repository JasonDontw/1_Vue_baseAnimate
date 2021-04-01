import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/pages/home/Home'
// import City from '@/components/pages/city/City'
// import Detail from '@/components/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [ // 異步加載寫法，使用此路游時，才會載入組件，大型專案適用
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/pages/home/Home')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/components/pages/city/City')
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/components/pages/detail/Detail')
    }
  ],
  // routes: [ //同步加載寫法，在載入時就會載入全部的組件，小型專案適用
  //   {
  //     path: '/',
  //     name: 'Home',
  //     component: Home
  //   }, {
  //     path: '/city',
  //     name: 'City',
  //     component: City
  //   }, {
  //     path: '/detail/:id',
  //     name: 'Detail',
  //     component: Detail
  //   }
  // ],
  scrollBehavior (to, from, savedPosition) { // 設定每次進入新頁面的畫面開始位置
    return { x: 0, y: 0 }
  }
})
