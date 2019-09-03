import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.scss' // global css
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'
import { HappyScroll } from 'vue-happy-scroll'
Vue.component('happy-scroll', HappyScroll)
import 'vue-happy-scroll/docs/happy-scroll.css'
Vue.use(Element)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面title*/
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})