import Vue from "vue";
import Vuex from "vuex";
import mutations from './mutation'
import actions from './action'
import getters from './getter'

Vue.use(Vuex)

const state =  {
    count: [20, 45, 67],
    num: 9999,
    events:'测试',
   user: "",
     single: true,
     password: "",
     phone: "",
     captcha: "",
  }


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})

