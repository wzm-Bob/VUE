// import {getUser} from '../service/getData'
import request from 'superagent';
import { register } from "./mutation_type";
  export default {
     REDUCE_COUNT(context) {
 let res = {
   amount: 20
 }
       context.commit('REDUCE_COUNT', res)


     },
      register({
         commit
       }, payload) {
         debugger
         return new Promise((resolve, reject) => {
           request
             .post('https://douban.herokuapp.com/user/')
             .send({
               email: payload.email,
               pass: payload.pass,
               name: payload.name
             })
             .then(res => {
               debugger
              /*  commit({
                 type: 'register',
                 email: res.body.email,
                 token: res.body.token,
                 name: res.body.name
               }) */
               commit(register, res)
               resolve(res)
             }, err => {
               reject(err)
             })
         })
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


