import request from 'superagent'

const state = {
   menudata: []
}

const getters = {
 
}
// 状态变更 payload是关键信息
const mutations = {
  GET_MENU(state, payload) {
    state.menudata = payload.menuData
  }
}

const actions = {
  getMenu({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      request
        .post('/api/menu/data')
        .send()
        .then(res => {
            const info = JSON.parse(res.text)
          
          commit({
            type: 'GET_MENU',
            ...info
          })
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}
