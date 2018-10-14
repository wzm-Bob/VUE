import request from 'superagent'
import { setToken,getToken,removeToken } from "../../utils"
const state = {
  user: "",
  password: "",
  phone: "",
  captcha: "",
  currentAuthority: "",
  status: "",
  email: '',
  token: getToken(),
  introduction: '',
  roles: []

}

const getters = {
 
}
// 状态变更 payload是关键信息
const mutations = {
  SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
  SET_TOKEN: (state,token) => {
    state.token = token
  },
  SET_USER(state, payload) {
    debugger
    state.currentAuthority = payload.currentAuthority
    state.status = payload.status
  },
  
}

const actions = {
  login({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      request
        .post('/api/login/account')
        .send({
          user: payload.user,
          password: payload.password
        })
        .then(res => {
          debugger
          const info = JSON.parse(res.text)
          commit({
            type: 'SET_USER',
            currentAuthority: info.currentAuthority,
            status: info.status,
          })
          commit('SET_TOKEN', info.token)
          setToken(info.token)
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },
 
  register({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      request
        .post('/api/register')
        .send({
          email: payload.email,
          pass: payload.password,
          name: payload.captcha
        })
        .then(res => {
          debugger
           const regsiterinfo = JSON.parse(res.text)
           commit({
             type: 'SET_USER',
             //user: res.body.user,
             //password: res.body.password,
             currentAuthority: regsiterinfo.currentAuthority,
             status: regsiterinfo.status,
           })
           //状态变更完成之后resolve数据 
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },
  // 获取用户信息
  getUserInfo({
    commit
  }, payload) {
    debugger
    return new Promise((resolve, reject) => {
      request
        .post('/api/getinfo')
        .send({
          token: payload.token
        })
        .then(res => {
          debugger
          const info = JSON.parse(res.text)
          if (info.roles && info.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', info.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_INTRODUCTION', info.introduction)
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },
  // 前端 登出
  FedLogOut({
    commit
  }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },
   // 动态修改权限
   ChangeRoles({
     commit
   }, role) {
     return new Promise(resolve => {
       debugger
       commit('SET_TOKEN', role)
       setToken(role)
       request
         .post('/api/getinfo')
         .send({
           token: role
         }).then(response => {
         const data = response.data
         commit('SET_ROLES', data.roles)
         commit('SET_INTRODUCTION', data.introduction)
         resolve()
       })
     })
   }
}

export default {
  state,
  getters,
  mutations,
  actions
}
