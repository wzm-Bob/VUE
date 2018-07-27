import Vue from 'vue'
import axios from 'axios'
import store from './store/index'
import router from './router/router'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Mock from './mock'
Mock.init()
Vue.use(axios)
Vue.use(iView)

new Vue({
  el: '#wrapper',
  router,
  store,
  template: '<App/>',
  components: { App}
})
