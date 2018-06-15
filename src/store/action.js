// import {getUser} from '../service/getData'

import {
    REDUCE_COUNT
  } from "./mutation_type";


  export default {
   /*  async getUserInfo({ commit,state}) {
      let res = await getUser();
      commit(GET_USERINFO, res)
    }, 
    提交传入类型和payload paylaod数据异步获取  方法名只是调用 mapactions用到
    */

   /*  testAction({ commit,state }) {
        let res = { amount:20}
        commit('REDUCE_COUNT',res)

     } */
     REDUCE_COUNT(context) {
 let res = {
   amount: 20
 }
       context.commit('REDUCE_COUNT', res)


     }

  }
 /*  
 // 组合式调用
 actions: {
      async actionA({
        commit
      }) {
        commit('gotData', await getData())
      },
      async actionB({
        dispatch,
        commit
      }) {
        await dispatch('actionA') // 等待 actionA 完成
        commit('gotOtherData', await getOtherData())
      }
 */


