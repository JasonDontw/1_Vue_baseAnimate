// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css' // 因為移動端的分辨率會導致邊框象素增大，所以要修正
import 'styles/iconfont.css' // 因為移動端的分辨率會導致邊框象素增大，所以要修正
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 實際寫法為router:router因為ES6語法Key Value相同可以縮寫
  components: { App }, // App縮寫同router
  template: '<App/>'
})
