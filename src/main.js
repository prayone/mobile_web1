// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.base.css'
import 'vue-ydui/dist/ydui.rem.css'
import 'swiper/dist/css/swiper.min.css'
import VueLazyload from 'vue-lazyload' 

Vue.config.productionTip = false

// 配置路由全局前置钩子函数
router.beforeEach((to, from, next) => {
  if (to.meta.aliasName) {
    window.document.title = to.meta.aliasName
  }
  next()
})

Vue.use(YDUI)
Vue.use(VueLazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
