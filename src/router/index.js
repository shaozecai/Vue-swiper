import Vue from 'vue'
import Router from 'vue-router'
import vueSwiper from '@/components/vue-swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vueSwiper',
      component: vueSwiper
    }
  ]
})
