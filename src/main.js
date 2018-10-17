import Vue from 'vue'
import axios from 'axios'
import store from './store'
import router from './router/router'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import  './mock'
import './authority'
//下面用不到的直接导入 不用起名
Vue.prototype.$http = axios
Vue.use(iView)

new Vue({
  el: '#wrapper',
  router,
  store,
  template: '<App/>',
  components: { App}
})
