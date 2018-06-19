
import {
  REDUCE_COUNT,
  register
} from "./mutation_type";

    export default {
    // type名是reduceCount 回调函数是大括号里的 接受第一个参数是state 必须是同步函数
    [REDUCE_COUNT](state, payload, options) {
        state.num+=payload.amount
    },
    [register](state, payload) {
        debugger
       state.login_email = payload.email
       state.login_token = payload.token
       state.login_name = payload.name
     },
}
