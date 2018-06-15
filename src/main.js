import Vue from 'vue'
import VueResource from 'vue-resource'
import store from './store/index'
import router from './router/router'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(VueResource)
Vue.use(iView)

new Vue({
  el: '#wrapper',
  router,
  store,
  template: '<App/>',
  components: { App}
})
